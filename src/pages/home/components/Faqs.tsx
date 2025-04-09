import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import StyledDropdown from "@thrip/components/StyledDropdown";
import { useGetFaqs } from "@thrip/customHooks";
import { FaqsData } from "@thrip/types";
import {
  GENERAL,
  JOINING_AS_MENTOR_AND_MENTEE,
  PRIVACY_AND_SUPPORT,
  USING_THE_PLATFORM,
} from "@thrip/utils/constants";

import { useState } from "react";

const Faqs = () => {
  const [activeElement, setActiveElement] = useState<string>("");
  const [data, isLoading] = useGetFaqs();

  const faqs = data[0];

  const updateActiveElement = (id: string) => {
    setActiveElement(activeElement !== id ? id : "");
  };

  const whatIsIntaglio = faqs?.fields?.whatIsIntaglio ?? "";
  const howDoesIntaglioWork = faqs?.fields?.howDoesIntaglioWork ?? "";
  const mentorEligibility = faqs?.fields?.mentorEligibility ?? "";
  const menteeEligibility = faqs?.fields?.menteeEligibility ?? "";
  const menteeBenefits = faqs?.fields?.menteeBenefits ?? "";
  const membershipCost = faqs?.fields?.membershipCost ?? "";
  const sessionAdjustment = faqs?.fields?.sessionAdjustment ?? "";
  const externalCommunication = faqs?.fields?.externalCommunication ?? "";
  const securityMeasures = faqs?.fields?.securityMeasures ?? "";
  const contactIntaglio = faqs?.fields?.contactIntaglio ?? "";

  const faqsData: FaqsData = {
    [GENERAL]: [
      {
        question: "What is Thrip?",
        answer: String(whatIsIntaglio),
      },
      {
        question: "How does Thrip work?",
        answer: String(howDoesIntaglioWork),
      },
    ],
    [JOINING_AS_MENTOR_AND_MENTEE]: [
      {
        question: "Who can join Thrip as a mentor?",
        answer: String(mentorEligibility),
      },
      {
        question: "How can I join Thrip as a mentee?",
        answer: String(menteeEligibility),
      },
      {
        question: "What are the benefits of joining Thrip as a mentee?",
        answer: String(menteeBenefits),
      },
      {
        question: "Is there a cost to become a mentor or mentee on Thrip?",
        answer: String(membershipCost),
      },
    ],
    [USING_THE_PLATFORM]: [
      {
        question: "What if I need to cancel or reschedule a mentoring session?",
        answer: String(sessionAdjustment),
      },
      {
        question:
          "Can I communicate with mentors outside of the Thrip platform?",
        answer: String(externalCommunication),
      },
    ],
    [PRIVACY_AND_SUPPORT]: [
      {
        question: "How is my information protected on Thrip?",
        answer: String(securityMeasures),
      },
      {
        question: "How can I contact Thrip for support?",
        answer: String(contactIntaglio),
      },
    ],
  };

  return (
    <Flex
      bgColor="gray.700"
      pt={{ base: "10", md: "20" }}
      pb={{ base: "10", md: "40" }}
      px={{ base: "4", md: "48", xl: "60" }}
      justifyContent="center"
    >
      <Box w={{ base: "100%", md: "xl" }}>
        <Text fontWeight="700" fontSize={{ base: "2xl", md: "3xl" }}>
          Frequently Asked Questions
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
            {Object.keys(faqsData).map((category: string) => (
              <StyledDropdown
                key={category}
                text={category}
                active={activeElement === category}
                onclick={() => updateActiveElement(category)}
                content={faqsData[category]}
              />
            ))}
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Faqs;
