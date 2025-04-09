import {
  Box,
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import BeginJourney from "@thrip/components/BeginJourney";

interface TermsOfSeviceDataProps {
  header: string;
  description: string;
  subList?: string[];
}
const termsOfServiceData: TermsOfSeviceDataProps[] = [
  {
    header: "Acceptance of Terms",
    description:
      "By accessing or using the platform, you affirm that you are of legal age and have the legal capacity to enter into this agreement. If you do not agree with any of the terms outlined in this agreement, please do not access, or use the platform.",
  },
  {
    header: "User Accounts",
    description:
      "To access certain features or services on the platform, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and are solely responsible for all activities that occur under your account. You agree to provide accurate and complete information during the registration process and to update your account information as necessary.",
  },
  {
    header: "Mentorship Services",
    description:
      "The platform facilitates mentorship connections between mentors and mentees in the dental profession. Thrip acts as a facilitator and does not guarantee the accuracy, reliability, or quality of the mentorship services provided. Mentors and mentees are solely responsible for their interactions and agree to hold Thrip harmless from any claims or disputes arising from these interactions.",
  },
  {
    header: "User Conduct",
    description: "User Conduct: When using the platform, you agree to:",
    subList: [
      "Use the platform in compliance with all applicable laws and regulations.",
      "Respect the rights and privacy of other users.",
      "Refrain from using the platform for any illegal or unauthorised purpose.",
      "Not engage in any activity that could harm, disrupt, or impair the platform's functionality or integrity.",
      "Not transmit any viruses, malware, or harmful code through the platform.",
      "Not use the platform to harass, intimidate, or discriminate against others.",
    ],
  },
  {
    header: "Intellectual Property",
    description:
      "The platform and its contents, including but not limited to text, graphics, logos, and software, are the property of Thrip or its licensors and are protected by intellectual property laws. You may not use, modify, reproduce, distribute, or create derivative works based on the platform without prior written consent from Thrip.",
  },
  {
    header: "Limitation of Liability",
    description:
      "In no event shall Thrip or its affiliates, directors, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use the platform, including but not limited to damages for loss of profits, data, or other intangible losses.",
  },
  {
    header: "Privacy",
    description:
      "Thrip respects your privacy and handles your personal information in accordance with its Privacy Policy. By using the platform, you consent to the collection, use, and disclosure of your information as described in the Privacy Policy.",
  },
  {
    header: "Termination",
    description:
      "Thrip reserves the right, at its sole discretion, to terminate or suspend your access to the platform without prior notice for any reason, including but not limited to a breach of this agreement.",
  },
  {
    header: "Modifications",
    description:
      "Thrip reserves the right to modify or update this agreement at any time. Any changes will be effective immediately upon posting the revised agreement on the platform. It is your responsibility to review the agreement periodically for any updates.",
  },
  {
    header: "Governing Law and Jurisdiction",
    description:
      "This agreement shall be governed by and construed in accordance with the laws of the United Kingdom. Any disputes arising from or related to this agreement shall be subject to the exclusive jurisdiction of the courts in the United Kingdom.",
  },
  {
    header: "Severability",
    description:
      "If any provision of this agreement is deemed invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
  },
  {
    header: "Entire Agreement",
    description:
      "This agreement constitutes the entire agreement between you and Thrip regarding the use of the platform and supersedes any prior agreements or understandings.",
  },
];

const TermsOfService = () => {
  return (
    <>
      <Box px={{ base: "4", md: "32" }} pb="20">
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
              Terms of Service
            </Text>
            <Text
              lineHeight="8"
              textAlign="center"
              fontWeight="300"
              fontSize={{ base: "md", md: "xl" }}
            >
              These Terms of Service ("Agreement") govern the use of the{" "}
              <Text
                color="brand.100"
                as="span"
                fontSize={{ base: "md", md: "xl" }}
              >
                Thrip
              </Text>{" "}
              website and its services ("Platform"). Please read this agreement
              carefully before accessing or using the platform. By accessing or
              using the platform, you agree to be bound by this agreement.
            </Text>
          </Box>
        </Flex>
        <VStack alignItems="start" gap={{ base: "4", md: "8" }}>
          <List
            gap={{ base: "4", md: "8" }}
            display="flex"
            listStyleType="none"
            flexDir="column"
          >
            {termsOfServiceData.map(({ header, description, subList }) => (
              <Box>
                <HStack alignItems="start">
                  <ListIcon
                    mt="2"
                    bgColor="brand.100"
                    h={{ base: "2", md: "4" }}
                    w={{ base: "2", md: "4" }}
                    borderRadius="100%"
                  >
                    <Text></Text>
                  </ListIcon>

                  <ListItem
                    fontSize={{ md: "xl" }}
                    key={header}
                    fontWeight="600"
                  >
                    {header}:{" "}
                    <Text fontSize={{ md: "xl" }} fontWeight="300" as="span">
                      {description}
                    </Text>
                  </ListItem>
                </HStack>
                {subList && (
                  <UnorderedList
                    ml={{ base: "12", md: "16" }}
                    display="flex"
                    flexDir="column"
                    gap="2"
                  >
                    {subList.map((subItem) => (
                      <ListItem
                        key={subItem}
                        fontSize={{ md: "xl" }}
                        fontWeight="300"
                      >
                        {subItem}
                      </ListItem>
                    ))}
                  </UnorderedList>
                )}
              </Box>
            ))}
          </List>
          <Text fontSize={{ base: "md", md: "xl" }}>
            If you have any questions or concerns about this agreement, please
            contact us at{" "}
            <Text
              as="span"
              color="brand.100"
              fontSize={{ base: "md", md: "xl" }}
            >
              hello@intagl.io
            </Text>
          </Text>
          <Text fontSize={{ base: "md", md: "xl" }}>
            By accessing or using the platform, you acknowledge that you have
            read, understood, and agreed to be bound by this Terms of Service
            agreement.
          </Text>
        </VStack>
      </Box>
      <BeginJourney />
    </>
  );
};

export default TermsOfService;
