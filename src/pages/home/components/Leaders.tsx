import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import Pill from "@thrip/components/Pill";
import { useGetMentorOfTheWeek } from "@thrip/customHooks";

const Leaders = () => {
  const [data, isLoading] = useGetMentorOfTheWeek();
  const mentorOftheWeek = data[0];

  const name = `${mentorOftheWeek?.fields?.firstName ?? ""} ${
    mentorOftheWeek?.fields?.lastName ?? ""
  }`;

  const occupation = mentorOftheWeek?.fields?.occupation ?? "";
  const workLocation = mentorOftheWeek?.fields?.workLocation ?? "";
  const country = mentorOftheWeek?.fields?.country ?? "";
  const areasOfExpertise: any = mentorOftheWeek?.fields?.areasOfExpertise ?? [];
  const profileLink = mentorOftheWeek?.fields?.profileLink ?? "";
  const about = mentorOftheWeek?.fields?.about ?? "";

  const image =
    (
      mentorOftheWeek?.fields as {
        image?: { fields?: { file?: { url: string } } };
      }
    )?.image?.fields?.file?.url ?? "";

  return (
    <Box
      bgColor="gray.700"
      py={{ base: "10", md: "20" }}
      px={{ base: "4", md: "48", xl: "60" }}
    >
      <Text textAlign="center">
        <Text fontWeight="700" fontSize={{ base: "3xl", md: "5xl" }} as="span">
          Meet the{" "}
        </Text>
        <Text
          as="span"
          color="brand.100"
          fontWeight="700"
          fontSize={{ base: "3xl", md: "5xl" }}
        >
          Leaders{" "}
        </Text>

        <Text as="span" fontWeight="700" fontSize={{ base: "3xl", md: "5xl" }}>
          In Dentistry
        </Text>
      </Text>
      <Text fontSize="xl" textAlign="center" mb="5">
        New mentors and sessions added every week.
      </Text>
      <Flex
        bgColor="white"
        borderRadius={{ md: "40px" }}
        p={{ base: "4", md: "10" }}
        alignItems="center"
        gap={{ md: "8" }}
        flexDir={{ base: "column", xl: "row" }}
      >
        {isLoading ? (
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
          <>
            <Image
              src={image}
              h={{ base: "md", md: "lg" }}
              w={{ base: "100%", md: "lg" }}
              objectFit="cover"
              objectPosition="top"
              borderRadius="20px"
            />
            <Box>
              <Text
                pt={{ base: "2", md: "0" }}
                fontWeight="700"
                fontSize={{ base: "2xl", md: "3xl" }}
              >
                {name}
              </Text>
              <Text color="gray.800" opacity="0.7">
                {String(occupation)}, {String(workLocation)}, {String(country)}
              </Text>
              <HStack my="4" flexWrap="wrap">
                {areasOfExpertise?.map((value: string) => (
                  <Pill text={value} key={value} />
                ))}
              </HStack>
              <VStack gap="5" alignItems="start">
                <Text opacity="0.7">{String(about)}</Text>
                {profileLink && (
                  <Button
                    w={{ base: "100%", md: "auto" }}
                    as="a"
                    href={String(profileLink)}
                  >
                    Visit {name}'s Profile
                  </Button>
                )}
              </VStack>
            </Box>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Leaders;
