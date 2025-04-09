import type { FC } from "react";

import { useQuery } from "@apollo/client";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { GET_COURSE } from "@thrip/graphql//course";
import type { GetCourse, GetCourseData } from "@thrip/types";
import { formatDate } from "@thrip/utils";

import StatusBadge from "@thrip/components/StatusBadge";
import Details from "@thrip/components/Details";
import { signUpAsMenteeUrl } from "@thrip/appUrls";

interface EventDetailsProps {
  text: string;
  detail: string;
  icon: string;
}

const EventDetails: FC<EventDetailsProps> = ({ icon, text, detail }) => (
  <Flex justifyContent="space-between">
    <HStack>
      <Image src={icon} boxSize="5" />
      <Text>{text}</Text>
    </HStack>
    <Text>{detail}</Text>
  </Flex>
);

const CourseDetail = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const { data, loading, error } = useQuery<GetCourseData>(GET_COURSE, {
    variables: {
      query: {
        _id: courseId,
      },
    },
  });

  const course = data?.getCourse ?? ({} as GetCourse);

  const { formattedDate, formattedTime, gmtOffset } = formatDate(
    course?.dateTime ?? ""
  );

  if (loading)
    return (
      <Flex
        h="100vh"
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Spinner size="xl" color="brand.100" />
      </Flex>
    );

  if (error)
    return (
      <Flex
        h="100vh"
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }} fontWeight="700">
          Error Loading Course Detail
        </Text>
      </Flex>
    );

  return (
    <>
      <Box pt="5" pb="20" px={{ base: "4", sm: "10%" }}>
        <Box width="full" py={{ md: "4" }} px={{ md: "2" }} pb="3">
          <HStack gap="2" onClick={() => navigate(-1)} cursor="pointer" mb="3">
            <Image src="/prev.png" alt="previous" />
            <Text color="black" fontSize="sm" fontWeight={500}>
              Back
            </Text>
          </HStack>

          <Flex
            p={{ base: "4", md: "8" }}
            borderRadius="10px"
            bgColor="lightBlue"
            border="1px solid"
            borderColor="gray.200"
            justifyContent="space-between"
            flexDir={{ base: "column", lg: "row" }}
            gap="4"
          >
            <VStack alignItems="flex-start">
              <StatusBadge text={course?.type ?? ""} />

              <Box maxWidth={{ lg: "lg" }}>
                <Text
                  fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
                  fontWeight="700"
                  lineHeight={{ base: "32px", md: "normal", lg: "48px" }}
                  textTransform="capitalize"
                >
                  {course?.title ?? ""}
                </Text>

                <Text pt="2" fontWeight="light">
                  {course?.outline ?? ""}
                </Text>
              </Box>

              <HStack gap="2">
                <Text fontSize="sm" fontWeight="700">
                  Speaker:
                </Text>

                <Avatar
                  size="xs"
                  name={`${course?.mentor?.firstName} ?? ''} ${
                    course?.mentor?.lastName ?? ""
                  }`}
                  src={course?.mentor?.imageUrl ?? ""}
                />

                <Text textDecor="underline">
                  {course?.mentor?.firstName ?? ""}{" "}
                  {course?.mentor?.lastName ?? ""}
                </Text>
              </HStack>
            </VStack>

            <Box>
              {course && course.videoUrl ? (
                <video controls width="500px" style={{ borderRadius: "15px" }}>
                  <source
                    src={encodeURIComponent(course?.videoUrl ?? "")}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <>
                  <Image
                    src={course?.thumbnailUrl ?? ""}
                    width={{ md: "xl" }}
                    objectFit="cover"
                    objectPosition="center"
                    height={{ sm: "xs" }}
                    borderRadius="8px"
                  />
                </>
              )}
            </Box>
          </Flex>

          <Flex
            pt={{ base: "7", md: "8" }}
            gap="6"
            justifyContent="space-between"
            flexDir={{ base: "column-reverse", lg: "row" }}
          >
            <Details data={course} />
            <Box minWidth="96" height="fit-content">
              <Box
                py="6"
                px="4"
                border="1px solid"
                borderColor="gray.100"
                borderRadius="8px"
              >
                <Flex flexDir="column" gap="24px">
                  <HStack>
                    <Text fontWeight="light" color="gray.800">
                      Price
                    </Text>

                    <Text fontWeight="700" fontSize="xl">
                      £{course?.payablePricing ?? ""}
                    </Text>
                  </HStack>

                  <Divider />
                </Flex>

                <Flex direction="column" gap="32px" pt="6">
                  <EventDetails
                    icon="/calendar.png"
                    text="Date"
                    detail={formattedDate}
                  />

                  <EventDetails
                    icon="/duration.png"
                    text="Time"
                    detail={`${formattedTime} (${gmtOffset})`}
                  />

                  <EventDetails
                    icon="/award.svg"
                    text="CPD/CE Credits"
                    detail={`${course?.duration ?? ""} Minutes`}
                  />
                </Flex>
              </Box>
              <Link to={signUpAsMenteeUrl}>
                <Text fontSize="md" textAlign="center" pt="5" color="brand.100">
                  Sign up as Mentee
                </Text>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default CourseDetail;
