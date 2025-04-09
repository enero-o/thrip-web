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

interface privacyDataProps {
  header: string;
  subList?: { header?: string; description: string }[];
}
const privacyData: privacyDataProps[] = [
  {
    header: "Information We Collect",
    subList: [
      {
        header: "Personal Information:",
        description:
          "When you sign up for our services as a mentor or mentee, we may collect personal information such as your name, email address, contact number, professional qualifications, and other relevant details.",
      },
      {
        header: "Usage Information:",
        description:
          "We may collect information about how you interact with our website, including the pages visited, features accessed, and the duration and frequency of your activities.",
      },
      {
        header: "Communication Information:",
        description:
          "We may collect information related to your communication with other users or our support team, including email exchanges, chat logs, and feedback.",
      },
      {
        header: "Payment Information: ",
        description:
          "If you choose to subscribe to our paid services, we will collect and process payment information necessary for billing purposes. However, we do not store your complete payment details as they are securely handled by our third-party payment processors.",
      },
    ],
  },
  {
    header: "Use of Information",
    subList: [
      {
        header: "Providing Services:",
        description:
          "We use the information we collect to provide our mentoring services, including facilitating connections between mentors and mentees, scheduling sessions, and delivering relevant content and resources.",
      },
      {
        header: "Communication:",
        description:
          "We may use your contact information to communicate with you about your account, mentoring sessions, important updates, promotions, and other relevant information related to our services. You can manage your communication preferences through your account settings.",
      },
      {
        header: "Improving Our Services: ",
        description:
          "We analyse usage patterns and feedback to enhance our website, develop new features, personalise user experiences, and improve the effectiveness of our mentoring platform.",
      },
      {
        header: "Legal Compliance:",
        description:
          "We may use your information to comply with legal obligations, enforce our terms of service, protect our rights and the rights of others, and prevent fraudulent or illegal activities.",
      },
    ],
  },
  {
    header: "Data Security",
    subList: [
      {
        description:
          "We employ appropriate technical and organisational measures to safeguard your personal information against unauthorised access, disclosure, alteration, or destruction. We regularly review and update our security practices to ensure the protection of your data",
      },
      {
        description:
          "While we take reasonable precautions, please understand that no method of data transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security of your information.",
      },
    ],
  },
  {
    header: "Data Retention",
    subList: [
      {
        description:
          "We retain your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.",
      },
    ],
  },
  {
    header: "Sharing of Information",
    subList: [
      {
        description:
          "We do not sell, trade, or rent your personal information to third parties for marketing purposes. However, we may share your information with trusted third-party service providers who assist us in operating our website, conducting business, and delivering services to you. These providers are obligated to maintain the confidentiality and security of your information.",
      },
      {
        description:
          "We may disclose your information if required by law, in response to a legal process, or to protect our rights, privacy, safety, or property, as well as the rights, privacy, safety, or property of our users or the public.",
      },
    ],
  },
  {
    header: "Your Rights",
    subList: [
      {
        description:
          "You have the right to access, update, correct, or delete your personal information. You can manage your account settings and make changes to your information through your account dashboard.",
      },
      {
        description:
          "You can also request the removal of your personal information by contacting us directly. However, please note that certain data may be retained for legal or legitimate business purposes.",
      },
    ],
  },
  {
    header: "Cookies and Tracking Technologies",
    subList: [
      {
        description:
          "We use cookies and similar tracking technologies to enhance your browsing experience, analyse website traffic, and customise content based on your preferences. You have the option to accept or reject cookies through your browser settings. However, please note that blocking or disabling cookies may affect certain features and functionality of our website.",
      },
    ],
  },
  {
    header: "Third-Party Links",
    subList: [
      {
        description:
          "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or the content of such websites. We encourage you to review the privacy policies of those third parties before providing any personal information.",
      },
    ],
  },
  {
    header: "Children's Privacy",
    subList: [
      {
        description:
          "Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information without parental consent, please contact us, and we will take steps to remove the information promptly.",
      },
    ],
  },
  {
    header: "Changes to the Privacy Policy",
    subList: [
      {
        description:
          "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or as necessary to protect our users and business. We will notify you of any material changes by posting the updated Privacy Policy on our website or through other communication channels.",
      },
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      {" "}
      <Box px={{ base: "4", md: "32" }} pb="20">
        <Flex justifyContent="center" gap="10">
          <Box
            px={{ base: "4", lg: "48" }}
            pt={{ base: "10", lg: "20" }}
            pb={{ base: "10", lg: "14" }}
          >
            <Text
              fontWeight="700"
              fontSize={{ base: "3xl", md: "6xl" }}
              textAlign="center"
            >
              Privacy Policy
            </Text>
            <Text
              lineHeight="8"
              textAlign="center"
              fontWeight="300"
              fontSize={{ base: "md", md: "xl" }}
            >
              At Thrip, we value and prioritise the privacy and security of
              our users. This Privacy Policy outlines the types of information
              we collect, how we use and protect that information, and the
              choices you have regarding your personal data. Please read this
              policy carefully to understand our practices regarding your
              information.
            </Text>
            <Text pt="2" color="gray.300" textAlign="center">
              Effective Date: 01/06/2023
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
            {privacyData.map(({ header, subList }) => (
              <Box key={header}>
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
                    {header}
                  </ListItem>
                </HStack>
                {subList && (
                  <UnorderedList
                    ml={{ base: "12", md: "16" }}
                    display="flex"
                    flexDir="column"
                    gap="2"
                  >
                    {subList.map(({ header, description }) => (
                      <ListItem
                        key={header}
                        fontSize={{ md: "xl" }}
                        fontWeight="600"
                      >
                        {header && header}{" "}
                        <Text
                          fontSize={{ md: "xl" }}
                          fontWeight="300"
                          as="span"
                        >
                          {description}
                        </Text>
                      </ListItem>
                    ))}
                  </UnorderedList>
                )}
              </Box>
            ))}
          </List>
          <Text fontSize={{ base: "md", md: "xl" }}>
            By using our website and services, you acknowledge that you have
            read, understood, and agreed to this Privacy Policy.
          </Text>
          <Text fontSize={{ base: "md", md: "xl" }}>
            Last updated: 01/06/2023{" "}
          </Text>
        </VStack>
      </Box>
      <BeginJourney />
    </>
  );
};

export default PrivacyPolicy;
