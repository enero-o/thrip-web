import {
  Box,
  Flex,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { instagramUrl } from "@thrip/appUrls";
import routes from "@thrip/routes";
import { Link } from "react-router-dom";

const leftNavigationData = [
  { text: "Contact Us", link: routes.contactUs },
  { text: "About Us", link: routes.aboutUs },
  { text: "FAQs", link: routes.faqs },
  // { text: "Blog", link: routes.blog },
];

const rightNavigationData = [
  { text: "Copyright Information", link: routes.copyright },
  { text: "Terms of Service", link: routes.termsOfService },
  { text: "Privacy Policy", link: routes.privacyPolicy },
  // { text: "Testimonials", link: routes.testimonials },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box bgColor="dark" as="footer" py="12" px={{ base: "4", md: "36" }}>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "start" }}
        justifyContent="center"
        gap={{ base: "10", md: "20" }}
      >
        <VStack alignItems="start" gap="5" justifyContent="center">
          <Text fontSize="xs" color="white" opacity="0.4">
            Navigation
          </Text>
          <HStack gap="20" alignItems="start">
            <UnorderedList
              styleType="none"
              ml="0"
              display="flex"
              flexDir="column"
              gap={{ base: "3", md: "1" }}
            >
              {leftNavigationData.map(({ text, link }) => (
                <ListItem key={text} color="white" fontSize="sm">
                  <Link to={link} onClick={scrollToTop}>
                    {text}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
            <UnorderedList
              styleType="none"
              display="flex"
              flexDir="column"
              gap={{ base: "3", md: "1" }}
            >
              {rightNavigationData.map(({ text, link }) => (
                <ListItem key={text} color="white" fontSize="sm">
                  <Link to={link} onClick={scrollToTop}>
                    {text}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </HStack>
        </VStack>
        <VStack
          alignItems={{ base: "center", md: "start" }}
          gap="5"
          justifyContent="center"
        >
          <Flex
            gap={{ base: "6", md: "40" }}
            alignItems="center"
            flexDirection={{ base: "column-reverse", md: "row" }}
          >
            <VStack
              gap={{ base: "4", md: "1" }}
              alignItems={{ base: "center", md: "start" }}
            >
              <Text fontSize="xs" color="white" opacity="0.4">
                Contact us
              </Text>
              <Text color="white" opacity="0.8">
                hello@intagl.io
              </Text>
            </VStack>
          </Flex>

          <HStack>
            <Link to={instagramUrl}>
              <Image src="/instagram.svg" />
            </Link>
          </HStack>
        </VStack>
      </Flex>
      <Text mt="8" textAlign="center" fontSize="xs" color="white" opacity="0.4">
        © {currentYear} Thrip Video. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
