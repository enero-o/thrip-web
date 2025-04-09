import { Box, Button, Flex, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { signInAsMenteeUrl, signUpAsMenteeUrl, signUpAsMentorUrl } from "@thrip/appUrls";
import { Logo } from "@thrip/icons/logo";
import routes from "@thrip/routes";
import { LucideIcon, MenuIcon, X } from "lucide-react";
import { useState } from "react";

interface NavItems {
  title: string;
  link: string;
  icon?: LucideIcon;
}

const navItems: NavItems[] = [
  {
    title: "Why?",
    link: routes.why,
  },
  {
    title: "Mentors",
    link: routes.mentors,
  },
  {
    title: "Masterclasses",
    link: routes.masterclasses,
  },
  {
    title: "Webinars",
    link: routes.webinars,
  },
];

const rightRoutes: NavItems[] = [
  {
    title: "Apply to be a Mentor",
    link: signUpAsMentorUrl,
  },
  {
    title: "Sign up as a Mentee",
    link: signUpAsMenteeUrl,
  },
  {
    title: "Log in",
    link: signInAsMenteeUrl,
  },
];

const additionalRoutes: NavItems[] = [
  // {
  //   title: "Testimonials",
  //   link: routes.testimonials,
  // },
  {
    title: "FAQs",
    link: routes.faqs,
  },
  // {
  //   title: "Blog",
  //   link: routes.blog,
  // },
  {
    title: "About Us",
    link: routes.aboutUs,
  },
  {
    title: "Contact Us",
    link: routes.contactUs,
  },
];

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);

  const mobileNavigation = [...navItems, ...additionalRoutes];
  return (
    <Flex
      py="4"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      px={{ base: "4", xl: "32" }}
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Flex gap="10">
        <Link href={routes.home}>
          <Logo />
        </Link>
        <HStack
          alignItems="center"
          gap="4"
          display={{ base: "none", lg: "flex" }}
        >
          {navItems.map((item) => (
            <Link
              key={item.title}
              color="dark"
              href={item.link}
              display="flex"
              alignItems="center"
              gap="1"
            >
              <Text>{item.title}</Text>
              {item.icon && <Icon as={item.icon as LucideIcon} />}
            </Link>
          ))}
        </HStack>
      </Flex>

      <HStack gap="4" display={{ base: "none", lg: "flex" }}>
        {rightRoutes.map(({ title, link }) => (
          <Box key={title}>
            {title === "Sign up as a Mentee" ? (
              <Button target="_blank" as="a" href={link}>
                {title}
              </Button>
            ) : (
              <Link target="_blank" color="dark" href={link}>
                {title}
              </Link>
            )}
          </Box>
        ))}
      </HStack>
      <Box
        display={{ base: "block", lg: "none" }}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <MenuIcon />}
      </Box>
      {open && (
        <Box
          position="absolute"
          top="16"
          left="0"
          bottom="0"
          bg="white"
          zIndex="9999"
          w="100%"
          px="4"
        >
          {mobileNavigation.map((item) => (
            <Link
              key={item.title}
              color="dark"
              href={item.link}
              display="block"
              py="3"
            >
              <Flex alignItems="center">
                <Text fontSize="md">{item.title}</Text>
                {item.icon && <Icon as={item.icon as LucideIcon} ml="2" />}
              </Flex>
            </Link>
          ))}

          <HStack
            gap="4"
            pt="8"
            flexDir="column"
            display={{ base: "flex", lg: "none" }}
          >
            {rightRoutes.map(({ title, link }) => (
              <Flex
                justifyContent="center"
                alignItems="center"
                key={title}
                w="100%"
              >
                {title === "Sign up as a Mentee" ? (
                  <Button
                    fontSize="md"
                    as="a"
                    href={link}
                    w={{ base: "100%", md: "80" }}
                  >
                    {title}
                  </Button>
                ) : (
                  <Link fontSize="md" color="dark" href={link}>
                    {title}
                  </Link>
                )}
              </Flex>
            ))}
          </HStack>
        </Box>
      )}
    </Flex>
  );
};

export default Nav;
