import type React from "react";
import { useEffect } from "react";

import { Button, Flex, Text } from "@chakra-ui/react";
import { PlusIcon } from "lucide-react";

import type { MentorFilters } from "@thrip/types";
import FilterModal from "./FilterModal";

interface Props {
  filters: MentorFilters;
  setFilters: React.Dispatch<React.SetStateAction<MentorFilters>>;
  onOpen: () => void;
  loading: boolean;
  isOpen: boolean;
  onClose: () => void;
  includeExpertise?: boolean;
  text: string;
  header: string;
}

const Filter = ({
  header,
  text,
  includeExpertise,
  onClose,
  isOpen,
  filters,
  loading,
  setFilters,
  onOpen,
}: Props) => {
  const applyFilters = (selectedFilters: MentorFilters) => {
    setFilters(selectedFilters);
  };

  useEffect(() => {
    if (location.search) {
      const queryParams = new URLSearchParams(location.search);

      const parsedFilters: MentorFilters = {};

      queryParams.forEach((value, key) => {
        parsedFilters[key] = value;
      });

      setFilters(parsedFilters);
    }
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        queryParams.append(key, value.toString());
      }
    });

    const newUrl = `${location.pathname}?${queryParams.toString()}`;

    if (newUrl) {
      // TODO fix this
      // window.history.replaceState({}, '', newUrl);
      // navigate(newUrl, { replace: true });
    }
  }, [filters]);

  return (
    <>
      <Flex
        my="4"
        px={{ base: "4", md: "7" }}
        py="4"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="6"
        justifyContent="space-between"
        alignItems={{ md: "center" }}
        gap="4"
        flexDir={{ base: "column", md: "row" }}
      >
        <Flex flexDir="column">
          <Text fontWeight={500} fontSize={{ base: "sm", md: "lg" }}>
            Filters
          </Text>

          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
            Find the {text} you need faster
          </Text>
          <Flex pt="2" gap="2" flexWrap="wrap">
            {filters.expertise && (
              <Text fontSize="sm" color="gray.500">
                Expertise: {filters.expertise},
              </Text>
            )}
          </Flex>
        </Flex>

        <Flex>
          {Object.values(filters).some(
            (value) => value !== null && value !== ""
          ) && (
            <Button variant={"outline"} mr={4} onClick={() => setFilters({})}>
              Reset Filters
            </Button>
          )}

          <Button
            variant={"outline"}
            justifyContent="space-between"
            width="20"
            px="4"
            borderRadius="6"
            onClick={onOpen}
            leftIcon={<PlusIcon size="16" />}
          >
            <Text fontWeight={500}>Add</Text>
          </Button>
        </Flex>
      </Flex>

      <FilterModal
        includeExpertise={includeExpertise}
        initialFilters={filters}
        loading={loading}
        header={header}
        isOpen={isOpen}
        onClose={onClose}
        applyFilters={applyFilters}
      />
    </>
  );
};

export default Filter;
