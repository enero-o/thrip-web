import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import BeginJourney from "@thrip/components/BeginJourney";
import ContactForm from "./components/ContactForm";
import ContactCard from "./components/ContactCard";
import { CircleHelp, Headset, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import routes from "@thrip/routes";
import { instagramUrl } from "@thrip/appUrls";
import HomePageLayout from "@thrip/layouts/HomePageLayout";

const ContactUs = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const navigate = useNavigate();

  const openGmail = () => {
    const email = "hello@intagl.io";
    window.location.href = "mailto:" + email;
  };

  const goToFaqs = () => {
    navigate(routes.faqs);
  };

  return (
    <HomePageLayout
      header="Contact Us"
      subHeader=" We believe in providing exceptional support to our users, ensuring
    your experience with us is nothing short of world-class."
    >
      <ContactForm />
      <Box pt="28" pb="20" px={{ base: "4", sm: "10%" }}>
        <Flex
          pb="28"
          gap="20"
          justifyContent="space-between"
          alignItems="center"
          flexDir={{ base: "column", lg: "row" }}
        >
          <VStack gap="20">
            <ContactCard
              icon={
                <Mail color="#B1B3BB" size={isLargerThan800 ? "50" : "35"} />
              }
              blue
              type="Email"
              buttonText="Send Us Mail"
              buttonIcon={<Mail size={15} />}
              onClick={openGmail}
            >
              For a more direct approach, feel free to reach out to us via email
              at{" "}
              <Text
                fontSize={{ base: "sm", md: "md", lg: "xl" }}
                as="span"
                color="brand.100"
              >
                hello@intagl.io.
              </Text>{" "}
              Our team will diligently review your message and ensure you
              receive a detailed response within 24 business hours. Your
              satisfaction is our priority.
            </ContactCard>

            <ContactCard
              icon={
                <CircleHelp
                  color="#B1B3BB"
                  size={isLargerThan800 ? "50" : "35"}
                />
              }
              type="FAQs"
              buttonText="Go to FAQs"
              onClick={goToFaqs}
            >
              We understand that sometimes you may have questions that others
              have already asked. To provide immediate assistance, we've
              compiled a comprehensive FAQs page. Here, you'll find answers to
              common queries about our mentoring services.
            </ContactCard>
            <ContactCard
              blue
              iconImg="/feedback.svg"
              type="Feedback"
              buttonText="Send Us Mail"
              buttonIcon={<Mail size={14} />}
              onClick={openGmail}
            >
              Your feedback is invaluable to us. We're constantly striving to
              enhance our services and provide the best possible experience for
              our users. If you have any suggestions, ideas, or feedback, please
              don't hesitate to reach out. Email us at{" "}
              <Text
                fontSize={{ base: "sm", md: "md", lg: "xl" }}
                as="span"
                color="brand.100"
              >
                hello@intagl.io
              </Text>
              , and we'll be delighted to hear from you.
            </ContactCard>
          </VStack>
          <VStack gap="20">
            <ContactCard
              icon={
                <Headset color="#B1B3BB" size={isLargerThan800 ? "50" : "35"} />
              }
              type="Mentor/Mentee Support"
              buttonText="Send Us Mail"
              buttonIcon={<Mail size={15} />}
              onClick={openGmail}
            >
              If you're a mentor or mentee and require assistance with your
              mentoring relationship, our dedicated support team is here to
              help. Please contact us at{" "}
              <Text
                fontSize={{ base: "sm", md: "md", lg: "xl" }}
                as="span"
                color="brand.100"
              >
                hello@intagl.io
              </Text>
              , and we'll provide the guidance and support you need
            </ContactCard>

            <ContactCard iconImg="/connected.svg" type="Stay Connected">
              Join our vibrant community and stay updated with the latest news
              and announcements. Connect with us on Instagram. We love sharing
              valuable insights, engaging content, and exciting updates with our
              passionate community.
              <HStack pt="4">
                <Link to={instagramUrl}>
                  <Image
                    boxSize={{ base: "10", md: "auto" }}
                    src="/blueInstagramIcon.svg"
                  />
                </Link>
              </HStack>
            </ContactCard>
          </VStack>
        </Flex>
        <Text fontSize={{ base: "md", md: "xl" }} fontWeight="300">
          At Thrip, we're committed to your success and satisfaction. We're
          passionate about delivering exceptional support and ensuring that you
          have an outstanding mentoring experience. We're here to help you
          achieve your mentoring goals, every step of the way.
        </Text>
      </Box>
      <BeginJourney />
    </HomePageLayout>
  );
};

export default ContactUs;
