import { useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { signInAsMenteeUrl, signUpAsMentorUrl } from "@thrip/appUrls";
import BeginMentorship from "@thrip/components/BeginMentorship";
import Filter from "@thrip/components/filter";
import { GET_MENTORS } from "@thrip/graphql/mentors";
import HomePageLayout from "@thrip/layouts/HomePageLayout";
import MentorsPartial from "@thrip/partials/MentorsPartial";
import Pagination from "@thrip/partials/Pagination";
import { MentorFilters } from "@thrip/types";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Mentors = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filters, setFilters] = useState<MentorFilters>({});
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState(25);

  const navigate = useNavigate();

  const { data, loading, refetch } = useQuery(GET_MENTORS, {
    onError: () => {},
    variables: {
      query: {
        filter: {
          ...(filters.expertise ? { expertise: filters.expertise } : {}),
          ...(searchValue.length > 3 ? { search: searchValue } : {}),
        },
        page: {
          limit: itemsPerPage,
        },
      },
    },
    onCompleted: () => {
      onClose();
    },
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const parsedFilters: MentorFilters = {};
    queryParams.forEach((value, key) => {
      parsedFilters[key] = value;
    });
    setFilters(parsedFilters);
  }, [setFilters]);

  useEffect(() => {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        queryParams.append(key, value.toString());
      }
    });
    const newUrl = `${location.pathname}?${queryParams.toString()}`;
    navigate(newUrl, { replace: true });

    refetch();
  }, [filters]);

  useEffect(() => {
    refetch({
      query: {
        filter: {
          ...(filters.expertise ? { expertise: filters.expertise } : {}),
          ...(filters.rateSortOrder
            ? { rateSortOrder: filters.rateSortOrder }
            : {}),
          ...(searchValue.length > 3 ? { search: searchValue } : {}),
        },
      },
    });
  }, [searchValue, refetch]);

  const mentors = data?.getMentors?.data || [];
  const totalDocuments = data?.getMentors?.totalDocuments || 0;

  const handlePageChange = useCallback((data: { selected: number }) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
    refetch({
      query: {
        page: {
          limit: itemsPerPage,
          offset: selectedPage * itemsPerPage,
        },
        filter: {
          ...(filters.expertise ? { expertise: filters.expertise } : {}),
          ...(filters.rateSortOrder
            ? { rateSortOrder: filters.rateSortOrder }
            : {}),
          ...(searchValue.length > 3 ? { search: searchValue } : {}),
        },
      },
    });

    setTimeout(() => {
      window.scrollTo({ top: 60, left: 0, behavior: "smooth" });
    }, 1000);
  }, []);

  const offset = currentPage * itemsPerPage;

  const startCount = totalDocuments ? offset + 1 : 0;
  const endCount = startCount ? startCount + itemsPerPage : 0;

  return (
    <HomePageLayout
      header="Our Mentors"
      subHeader="We host a diverse group of experienced dental professionals ready
      to guide you on your professional journey. Explore and find your
      perfect match."
    >
      <Box pt="5" px={{ base: "4", sm: "10%" }}>
        <HStack gap="2" alignItems="center" pb="2">
          <Text fontWeight={700} fontSize={{ base: "xl", md: "3xl" }}>
            All Mentors
          </Text>
        </HStack>

        <Flex pb="4" flexDir="column" gap={{ base: "2", md: "3" }}>
          <Input
            name="search"
            placeholder="Search mentor's name"
            border="1px solid"
            borderColor="gray.600"
            borderRadius="6"
            width={{ base: "full", md: "96" }}
            autoComplete="off"
            onChange={(e) => {
              const searchValue = e.target.value;
              setSearchValue(searchValue);
            }}
            value={searchValue}
          />

          {searchValue && (
            <Text color="gray.600" fontWeight="400">
              Showing {mentors?.length ?? 0} results for &quot;
              {searchValue}&quot;
            </Text>
          )}
        </Flex>

        <Filter
          text="mentor"
          includeExpertise
          setFilters={setFilters}
          loading={loading}
          isOpen={isOpen}
          onClose={onClose}
          filters={filters}
          onOpen={onOpen}
          header="Mentors"
        />

        <MentorsPartial data={mentors} loading={loading} />

        <Pagination
          dataCount={totalDocuments}
          currentPage={currentPage}
          forcedPage={currentPage}
          onPageChange={handlePageChange}
          startCount={startCount}
          endCount={endCount}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={(i) => {
            refetch({
              query: {
                filter: {
                  ...(filters.expertise
                    ? { expertise: filters.expertise }
                    : {}),
                  ...(filters.rateSortOrder
                    ? { rateSortOrder: filters.rateSortOrder }
                    : {}),
                  ...(searchValue.length > 3 ? { search: searchValue } : {}),
                },
                page: {
                  limit: itemsPerPage,
                  offset: currentPage * itemsPerPage,
                },
              },
            });
            setItemsPerPage(i);
          }}
        />

        <BeginMentorship>
          <Button
            as="a"
            href={signInAsMenteeUrl}
            w={{ base: "100%", md: "190px" }}
          >
            Sign up as Mentee
          </Button>

          <Button
            as="a"
            href={signUpAsMentorUrl}
            variant={"outine"}
            border="1px solid"
            color="white"
            borderColor="white"
            w={{ base: "100%", md: "auto" }}
          >
            Apply to be a Mentor
          </Button>
        </BeginMentorship>
      </Box>
    </HomePageLayout>
  );
};

export default Mentors;
