import { useQuery } from "@apollo/client";
import { Box, Button, Flex, HStack, Spinner, Text } from "@chakra-ui/react";
import { signUpAsMenteeUrl, signUpAsMentorUrl } from "@thrip/appUrls";
import BeginMentorship from "@thrip/components/BeginMentorship";
import { GET_COURSES } from "@thrip/graphql/course";
import CourseGrid from "@thrip/partials/CourseGrid";
import { GetCoursesData } from "@thrip/types";
import toast from "react-hot-toast";

interface Props {
  header: string;
  subHeader: string;
  courseType: "MASTERCLASS" | "WEBINAR" | "VIRTUAL_SHADOWING";
}

const Course = ({ header, subHeader, courseType }: Props) => {
  const { data, loading: courseLoading } = useQuery<GetCoursesData>(
    GET_COURSES,
    {
      variables: {},
      onError: (error: any) => {
        toast.error("Error fetching classes", error?.message);
      },
    }
  );

  const courses = data?.getCourses || [];
  const courseData = courses?.filter(
    (i) => i?.type == courseType && i?.status === "LIVE"
  );

  if (courseLoading)
    return (
      <Flex
        h="100vh"
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Spinner color="brand.100" size="xl" />
      </Flex>
    );

  return (
    <>
      <Box px={{ base: "4", md: "32" }}>
        <Flex justifyContent="center" gap="10">
          <Box
            px={{ base: "4", lg: "48" }}
            pt={{ base: "10", lg: "20" }}
            pb={{ base: "10", lg: "20" }}
          >
            <Text
              fontWeight="700"
              fontSize={{ base: "3xl", md: "6xl" }}
              textAlign="center"
            >
              {header}
            </Text>
            <Text
              lineHeight="8"
              textAlign="center"
              fontWeight="300"
              fontSize={{ base: "md", md: "xl" }}
            >
              {subHeader}
            </Text>
          </Box>
        </Flex>
        {/* <Flex
          my="4"
          p={{ base: "4", md: "7" }}
          border="1px solid"
          borderColor="gray.200"
          borderRadius="6"
          gap="3"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex flexDir="column">
            <Text fontWeight={500} fontSize={{ base: "sm", md: "lg" }}>
              Filters
            </Text>

            <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
              Find the {header.toLowerCase()} that suit your needs best
            </Text>
          </Flex>

          <Button
            variant={"outline"}
            justifyContent="space-between"
            width="20"
            px="4"
            borderRadius="6"
            onClick={() => {}}
          >
            <PlusIcon size="16" />
            <Text fontWeight={500}>Add</Text>
          </Button>
        </Flex> */}
        <Box pb="10">
          <HStack
            alignItems="center"
            mt="16"
            mb="4"
            display={{ base: "none", md: "flex" }}
          >
            <Text fontWeight="700" fontSize="3xl">
              All {header}
            </Text>
            <Text fontSize="sm" opacity="0.7">
              ({courseData?.length})
            </Text>
          </HStack>
          <CourseGrid
            data={courseData}
            loading={courseLoading}
            courseType="Masterclass"
          />
        </Box>

        <BeginMentorship>
          <Button
            as="a"
            href={signUpAsMenteeUrl}
            w={{ base: "100%", md: "190px" }}
          >
            Sign up as a Mentee{" "}
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
    </>
  );
};

export default Course;
