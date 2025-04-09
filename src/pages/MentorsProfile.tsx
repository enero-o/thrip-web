import { useState } from "react";

import { useQuery } from "@apollo/client";
import {
  Box,
  Divider,
  Flex,
  SkeletonText,
  Stack,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

import type { GetCoursesData } from "@thrip/types";

import { GET_COURSES } from "@thrip/graphql/course";
import { GET_EXPERTISE, GET_MENTOR_BY_ID } from "@thrip/graphql/mentors";
import { GET_MENTOR_SERVICES } from "@thrip/graphql/services";
import { CustomTab } from "@thrip/components/CustomTab";
import CourseGrid from "@thrip/partials/CourseGrid";
import { ServicesTab } from "@thrip/partials/Services";
import { mentorFmt } from "@thrip/utils";
import ExpertiseGrid from "@thrip/components/ExpertiseGrid";
import GoBack from "@thrip/components/goBack";

const MentorsProfile = () => {
  const [availability] = useState("available");
  const { userId } = useParams();

  const { data, loading } = useQuery(GET_MENTOR_BY_ID, {
    variables: { userId: userId },
    onError: () => {},
  });

  const { data: res, loading: serviceLoading } = useQuery(GET_MENTOR_SERVICES, {
    variables: { input: { filter: { mentorId: userId } } },
    onError: () => {},
  });

  const mentorServices = res?.getMentorServices?.data;

  const { data: courseData, loading: courseLoading } = useQuery<GetCoursesData>(
    GET_COURSES,
    {
      variables: {
        query: {
          mentorId: userId,
        },
      },
      onError: (error: any) => {
        toast.error("Error fetching courses:", error?.message);
      },
    }
  );

  const courses = courseData?.getCourses || [];

  const webinars = courses.filter((i) => i.type == "WEBINAR");
  const masterclass = courses.filter((i) => i.type == "MASTERCLASS");
  const virtualShadowing = courses.filter((i) => i.type == "VIRTUAL_SHADOWING");

  const courseTypes = courses?.map((item) => {
    if (item?.type === "VIRTUAL_SHADOWING") {
      return "Virtual Shadowing";
    }
    return item?.type.toLowerCase().replace(/^(.)|\s+(.)/g, function ($1) {
      return $1.toUpperCase();
    });
  });

  const filterCourseType = courseTypes?.filter(
    (values, index, self) => self.indexOf(values) === index
  );
  const sortCourseType = filterCourseType.sort();
  const tabList = ["Sessions", ...sortCourseType];

  const findCourse = (type: string) => {
    const filterCourse = tabList.find((item) => item === type);
    return filterCourse;
  };

  const availabilityData = [
    { status: "available", label: "Available", color: "green.500" },
    { status: "away", label: "Away", color: "yellow.500" },
  ];

  const currentAvailability = availabilityData.find(
    (item) => item.status === availability
  ) ?? {
    status: "",
    label: "",
    color: "",
  };

  const { data: expertise } = useQuery(GET_EXPERTISE, {
    onError: () => {},
    variables: {
      query: {
        mentorId: userId,
      },
    },
  });

  interface ExpertiseItem {
    id: string;
    name: string;
    years: number;
  }

  const mentorExpertise: ExpertiseItem[] = expertise?.getExpertise?.map(
    (item: { _id: string; expertise: string; years: number }) => {
      return {
        id: item._id,
        name: item.expertise,
        years: item.years,
      };
    }
  );

  const expertiseWithMostYears: ExpertiseItem = mentorExpertise?.reduce(
    (maxYearsItem: ExpertiseItem, currentItem: ExpertiseItem) => {
      return currentItem.years > maxYearsItem.years
        ? currentItem
        : maxYearsItem;
    },
    mentorExpertise[0] || { id: "", name: "", years: 0 }
  );

  const nameOfExpertiseWithMostYears = expertiseWithMostYears?.name;

  const mentor = data?.getMentorById;
  const mnt = mentorFmt(mentor);

  const mentorName = mnt.name;
  const bio = mnt.bio;
  const image = mnt.image;

  const initials = mentorName
    .split(" ")
    .map((word) => word[0])
    .join("");

  if (loading || serviceLoading || courseLoading) {
    return (
      <Box w="full" mt="10">
        <SkeletonText
          size="40"
          noOfLines={1}
          skeletonHeight="sm"
          startColor="gray.100"
          endColor="gray.200"
        />
        <SkeletonText
          mt="4"
          noOfLines={10}
          spacing="10"
          skeletonHeight="8"
          startColor="gray.100"
          endColor="gray.200"
        />
      </Box>
    );
  }

  return (
    <>
      <Box pt="10" pb="20" px={{ base: "4", sm: "10%" }}>
        <Stack spacing={[3, 3, 4]} w="full">
          <GoBack />
          <Flex
            bg={"#F1F6FD"}
            borderRadius={7}
            direction={{ base: "column", xl: "row" }}
          >
            <Box
              width={{ base: "100%", xl: "md" }}
              bgColor={!image ? "green.200" : ""}
              position="relative"
            >
              {image ? (
                <Box
                  bgImage={`url('${image}')`}
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  h={{ base: "lg", md: "xl" }}
                  bgSize="cover"
                />
              ) : (
                <Text
                  fontSize="80px"
                  fontWeight={700}
                  position="absolute"
                  color="white"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                >
                  {initials}
                </Text>
              )}
            </Box>

            <Box
              flex="1"
              pt={{ base: 4, md: 6, xl: 12 }}
              py={3}
              px={{ base: 4, md: 6, xl: 12 }}
            >
              <Flex
                gap={2}
                direction={{ base: "column", md: "column", xl: "row" }}
                justifyContent={{ base: "normal", lg: "space-between" }}
              >
                <Box alignItems="center">
                  <Text
                    fontSize={{ base: "xl", lg: "2xl" }}
                    fontWeight={600}
                    color={"#4E4B66"}
                  >
                    {mentorName}
                  </Text>

                  <Stack direction={{ base: "column", xs: "row" }}>
                    {nameOfExpertiseWithMostYears && (
                      <Text fontWeight={500} color="#9195A6">
                        {nameOfExpertiseWithMostYears}
                      </Text>
                    )}

                    <Box fontSize="sm">
                      <Box
                        as="span"
                        display="inline-block"
                        w="2"
                        h="2"
                        bg={currentAvailability.color}
                        borderRadius="50%"
                        ml={1}
                        mr={2}
                      />
                      {currentAvailability.label}
                    </Box>
                  </Stack>
                </Box>
              </Flex>

              <Divider
                my={4}
                borderColor="gray.400"
                display={{ base: "none", xl: "block" }}
              />

              <Stack>
                <Box pt="2">
                  <Text fontSize="md" color="#9195A6">
                    Biography
                  </Text>

                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight={300}
                    lineHeight={6}
                    py={{ md: 2.5 }}
                  >
                    {bio}
                  </Text>
                </Box>

                {mentorExpertise?.length > 0 && (
                  <Flex gap={4} alignItems="flex-start">
                    <Box pt={{ base: "2", md: "0" }} m={{ sm: 1 }} flex={1}>
                      <Text fontSize="md" color="gray.500" pb="1">
                        Area(s) of Expertise
                      </Text>

                      <ExpertiseGrid areasOfExpertise={mentorExpertise} />
                    </Box>
                  </Flex>
                )}
              </Stack>
            </Box>
          </Flex>

          <Box mt={4}>
            <Tabs>
              <Flex justifyContent="start">
                <TabList
                  bg="#F1F5F9"
                  p={1.5}
                  borderRadius={10}
                  overflowX="auto"
                >
                  {tabList.map((tab, i) => (
                    <CustomTab
                      key={i}
                      fontSize={"md"}
                      fontWeight={500}
                      lineHeight={0.9}
                    >
                      {tab}
                    </CustomTab>
                  ))}
                </TabList>
              </Flex>

              <TabPanels>
                <TabPanel>
                  <ServicesTab
                    loading={serviceLoading}
                    services={mentorServices}
                  />
                </TabPanel>

                {findCourse("Masterclass") && (
                  <TabPanel>
                    <CourseGrid
                      data={masterclass}
                      loading={courseLoading}
                      courseType="Masterclass"
                    />
                  </TabPanel>
                )}

                {findCourse("Virtual Shadowing") && (
                  <TabPanel>
                    <CourseGrid
                      data={virtualShadowing}
                      loading={courseLoading}
                      courseType="Virtual_Shadowing"
                    />
                  </TabPanel>
                )}

                {findCourse("Webinar") && (
                  <TabPanel>
                    <CourseGrid
                      data={webinars}
                      loading={courseLoading}
                      courseType="Webinar"
                    />
                  </TabPanel>
                )}
              </TabPanels>
            </Tabs>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default MentorsProfile;
