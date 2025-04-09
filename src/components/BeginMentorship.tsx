import { Box, Flex, HStack, Text } from "@chakra-ui/react";
interface Props {
  children: React.ReactNode;
}

const BeginMentorship = ({ children }: Props) => {
  return (
    <Flex
      my={{ base: "10", md: "20" }}
      bgColor="dark"
      borderRadius="10px"
      gap="5"
      p={{ base: "5", md: "10" }}
      alignItems="center"
      flexDir="column"
    >
      <Box maxW="614px">
        <Text
          textAlign="center"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="500"
          color="white"
        >
          Begin your mentorship journey today.
        </Text>
        <Text
          textAlign="center"
          pt="1"
          fontSize="md"
          color="white"
          fontWeight="300"
          opacity="0.6"
        >
          Ready to take the next step in your dental career?{" "}
          <Text fontSize="base" color="white" fontWeight="700" as="span">
            {" "}
            Sign up{" "}
          </Text>{" "}
          today and book your first mentoring session.
        </Text>
      </Box>
      <HStack
        w="100%"
        justifyContent="center"
        flexDir={{ base: "column", md: "row" }}
        gap="4"
        alignItems="center"
      >
        {children}
      </HStack>
    </Flex>
  );
};

export default BeginMentorship;
