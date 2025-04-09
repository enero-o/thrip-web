import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import BeginJourney from "@thrip/components/BeginJourney";
import InfoCard from "../components/InfoCard";
import { useGetFaqs } from "@thrip/customHooks";

interface FAQsCardProps {
  header: string;
  data: {
    number: string;
    title: string;
    body?: string;
  }[];
}

const FAQsCard = ({ header, data }: FAQsCardProps) => (
  <Box pt={{ base: "7", md: "14" }}>
    <Text fontSize="lg" fontWeight="700">
      {header}
    </Text>
    {data.map(({ number, title, body }) => (
      <InfoCard key={number} number={number} title={title} body={body} />
    ))}
  </Box>
);

const FAQs = () => {
  const [data, isLoading] = useGetFaqs();

  const faqs = data[0];

  const whatIsIntaglio = faqs?.fields?.whatIsIntaglio ?? "";
  const howDoesIntaglioWork = faqs?.fields?.howDoesIntaglioWork ?? "";

  const generalData = [
    {
      number: "01",
      title: "What is Thrip",
      body: String(whatIsIntaglio),
    },
    {
      number: "02",
      title: "How does intaglio work",
      body: String(howDoesIntaglioWork),
    },
  ];

  const mentorEligibility = faqs?.fields?.mentorEligibility ?? "";
  const menteeEligibility = faqs?.fields?.menteeEligibility ?? "";
  const menteeBenefits = faqs?.fields?.menteeBenefits ?? "";
  const membershipCost = faqs?.fields?.membershipCost ?? "";

  const membershipData = [
    {
      number: "03",
      title: "Who can join Thrip as a mentor",
      body: String(mentorEligibility),
    },
    {
      number: "04",
      title: "How can I join Thrip as a mentee",
      body: String(menteeEligibility),
    },
    {
      number: "05",
      title: "What are the benefits of joining Thrip as a mentee",
      body: String(menteeBenefits),
    },
    {
      number: "06",
      title: "Is there a cost to become a mentor or mentee on Thrip",
      body: String(membershipCost),
    },
  ];

  const sessionAdjustment = faqs?.fields?.sessionAdjustment ?? "";
  const externalCommunication = faqs?.fields?.externalCommunication ?? "";

  const platformUsageData = [
    {
      number: "07",
      title: "What if I need to cancel or reschedule a mentoring session",
      body: String(sessionAdjustment),
    },
    {
      number: "08",
      title: "Can I communicate with mentors outside of the Thrip platform",
      body: String(externalCommunication),
    },
  ];

  const securityMeasures = faqs?.fields?.securityMeasures ?? "";
  const contactIntaglio = faqs?.fields?.contactIntaglio ?? "";

  const privacyData = [
    {
      number: "09",
      title: "How is my information protected on Thrip?",
      body: String(securityMeasures),
    },
    {
      number: "10",
      title: "How can I contact Thrip for support?",
      body: String(contactIntaglio),
    },
  ];

  return (
    <>
      <Box
        pt={{ base: "16", lg: "20" }}
        pb={{ base: "16", lg: "24" }}
        px={{ base: "4", md: "32" }}
      >
        <Text
          fontWeight="700"
          fontSize={{ base: "3xl", md: "6xl" }}
          textAlign="center"
          pb={{ base: "2", md: "10" }}
        >
          FAQs
        </Text>
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
            <FAQsCard header="General" data={generalData} />
            <FAQsCard
              header="Joining as a Mentor or Mentee"
              data={membershipData}
            />
            <FAQsCard header="Using the Platform" data={platformUsageData} />
            <FAQsCard header="Privacy and Support" data={privacyData} />
          </>
        )}
      </Box>
      <BeginJourney />
    </>
  );
};

export default FAQs;
