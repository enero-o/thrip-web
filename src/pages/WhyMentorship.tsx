import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import InfoCard from "../components/InfoCard";
import BeginJourney from "@thrip/components/BeginJourney";
import { useGetWhyMentorship } from "@thrip/customHooks";

const WhyMentorship = () => {
  const [data, isLoading] = useGetWhyMentorship();

  const whyMentorshipData = data[0];

  const unlockPotential = whyMentorshipData?.fields?.unlockPotential ?? "";
  const learningCurve = whyMentorshipData?.fields?.learningCurve ?? "";
  const network = whyMentorshipData?.fields?.network ?? "";
  const navigate = whyMentorshipData?.fields?.navigate ?? "";
  const growth = whyMentorshipData?.fields?.growth ?? "";
  const earning = whyMentorshipData?.fields?.earning ?? "";
  const reputation = whyMentorshipData?.fields?.reputation ?? "";
  const investment = whyMentorshipData?.fields?.investment ?? "";

  const reasonData = [
    {
      number: "01",
      title: "Unlock Your Full Potential",
      body: String(unlockPotential),
    },
    {
      number: "02",
      title: "Shorten Your Learning Curve",
      body: String(learningCurve),
    },
    {
      number: "03",
      title: "Expand Your Network and Opportunities",
      body: String(network),
    },
    {
      number: "04",
      title: "Navigate Career Transitions with Ease",
      body: String(navigate),
    },
    {
      number: "05",
      title: "Foster Personal and Professional Growth",
      body: String(growth),
    },
    {
      number: "06",
      title: "Increased Earning Potential",
      body: String(earning),
    },
    {
      number: "07",
      title: "Enhanced Professional Reputation",
      body: String(reputation),
    },
    {
      number: "08",
      title: "Long-Term Investment",
      body: String(investment),
    },
  ];
  return (
    <>
      <Box px={{ base: "4", md: "32" }}>
        <Flex justifyContent="center" gap="10">
          <Box pt={{ base: "10", lg: "20" }} pb={{ base: "10", lg: "20" }}>
            <Text textAlign="center">
              <Text
                fontWeight="700"
                fontSize={{ base: "3xl", md: "6xl" }}
                as="span"
              >
                Why{" "}
              </Text>

              <Text
                as="span"
                color="brand.100"
                fontWeight="700"
                fontSize={{ base: "3xl", md: "6xl" }}
              >
                Mentorship
              </Text>

              <Text
                as="span"
                fontWeight="700"
                fontSize={{ base: "3xl", md: "6xl" }}
              >
                ?
              </Text>
            </Text>

            <Text
              textAlign="center"
              fontWeight="300"
              fontSize={{ base: "md", md: "xl" }}
            >
              We believe in the transformative power of mentorship in dentistry.
            </Text>
          </Box>
        </Flex>

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
            {reasonData.map(({ number, title, body }) => (
              <InfoCard
                key={number}
                number={number}
                title={title}
                body={body}
              />
            ))}
          </>
        )}

        <Text
          py={{ base: "14", md: "20" }}
          fontWeight="300"
          fontSize={{ base: "md", md: "xl" }}
        >
          We firmly believe that investing in mentorship is an investment into
          your future. By joining our platform, you'll gain access to a
          community of experienced mentors who are passionate about supporting
          your growth and success. Experience the transformative power of
          mentoring and embark on an accelerated journey toward becoming an
          exceptional dental professional.
        </Text>
      </Box>

      <BeginJourney />
    </>
  );
};

export default WhyMentorship;
