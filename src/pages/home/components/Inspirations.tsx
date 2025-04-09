import { useQuery } from "@apollo/client";
import { Box, Button, Flex, HStack, Spinner, Text } from "@chakra-ui/react";
import Carousel from "@thrip/components/Carousel";
import Pill from "@thrip/components/Pill";
import ProfileCard from "@thrip/components/ProfileCard";
import { GET_MENTORS } from "@thrip/graphql/mentors";
import routes from "@thrip/routes";
import { Mentor } from "@thrip/types";
import { getExpertiseWithMostYears } from "@thrip/utils";
// import { ProfileCardProps } from "@thrip/utils/types";
import { useState } from "react";

const topics = [
  "Restorative Dentistry",
  "Orthodontics",
  "Implants",
  "Cosmetic Dentistry",
  "Dental Photography",
  "Oral Surgery",
  "Endodontics",
  "TMD",
  "Communication",
  "Dental Practice Purchase",
];

const Inspirations = () => {
  const [activeElement, setActiveElement] = useState<string>(
    "Restorative Dentistry"
  );

  const { data, loading } = useQuery(GET_MENTORS, {
    onError: () => {},
    variables: {
      query: {
        filter: {
          ...(activeElement ? { expertise: activeElement } : {}),
        },
        page: {
          limit: 10,
        },
      },
    },
  });

  const mentors: Mentor[] = data?.getMentors?.data ?? [];

  return (
    <Box px={{ base: "4", md: "10", lg: "32" }} py={{ base: "10", md: "16" }}>
      <Flex justifyContent="center" px={{ lg: "48" }} mb="2">
        <Text textAlign="center">
          <Text
            fontWeight="700"
            fontSize={{ base: "3xl", md: "5xl" }}
            as="span"
          >
            A Dose Of{" "}
          </Text>

          <Text
            as="span"
            color="brand.100"
            fontWeight="700"
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            Inspiration
          </Text>

          <Text
            as="span"
            fontWeight="700"
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            ,
          </Text>

          <Text
            as="span"
            fontWeight="700"
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            {" "}
            Tailored To{" "}
          </Text>

          <Text
            as="span"
            fontWeight="700"
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            Your
          </Text>
          <Text
            as="span"
            color="brand.100"
            fontWeight="700"
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            {" "}
            Interests
          </Text>
        </Text>
      </Flex>

      <HStack px={{ md: "40" }} flexWrap="wrap" justifyContent="center">
        {topics.map((val) => (
          <Pill
            active={activeElement === val}
            onClick={() => setActiveElement(val)}
            key={val}
            text={val}
          />
        ))}
      </HStack>

      <Flex pl="14" justifyContent="space-between" pt="10" pb={8}>
        <HStack>
          <Text fontSize={{ base: "sm", md: "md" }} fontWeight="700">
            {activeElement}
          </Text>

          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="brand.100"
            fontWeight="500"
            cursor="pointer"
          >
            See All
          </Text>
        </HStack>
      </Flex>
      {loading ? (
        <Flex
          h="100vh"
          width="100%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Spinner color="brand.100" size="xl" />
        </Flex>
      ) : (
        <Carousel>
          {mentors?.map(
            ({ imageUrl, firstName, lastName, userId, bio, expertise }) => {
              const name = `${firstName}  ${lastName}`;
              const link = `/mentor-profile/${userId}`;
              const expertiseWithMostYears =
                getExpertiseWithMostYears(expertise);

              return (
                <ProfileCard
                  link={link}
                  descriptionLength={40}
                  image={imageUrl}
                  name={name}
                  key={userId}
                  description={bio}
                  expertise={expertiseWithMostYears}
                />
              );
            }
          )}
        </Carousel>
      )}
      <Flex justifyContent="center" pt={{ base: "6", md: "10" }}>
        <Button as="a" href={routes.mentors}>
          Explore Mentors
        </Button>
      </Flex>
    </Box>
  );
};

export default Inspirations;
