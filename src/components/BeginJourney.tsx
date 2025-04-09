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
import { signUpAsMenteeUrl } from "@thrip/appUrls";
import { useGetBeginMentorship } from "@thrip/customHooks";
import { getImageUrl } from "@thrip/utils/helpers";

const BeginJourney = () => {
  const [data, isLoading] = useGetBeginMentorship();

  const beginMentorship = data[0];

  const header = beginMentorship?.fields?.header ?? "";

  const paragraph = beginMentorship?.fields?.paragraph ?? "";

  const image = getImageUrl(beginMentorship as any);

  const words = String(header).split(" ");

  return (
    <Box
      bgColor="gray.700"
      py={{ base: "10", md: "20" }}
      px={{ base: "4", md: "48", xl: "60" }}
    >
      <Flex
        bgColor="white"
        borderRadius={{ md: "40px" }}
        px={{ base: "4", md: "10" }}
        pt={{ base: "4", md: "10" }}
        pb="10"
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
              boxSize={{ xl: "sm" }}
              objectFit="contain"
              objectPosition="center"
              borderRadius="20px"
            />
            <VStack
              pt={{ base: "3", md: "0" }}
              alignItems="start"
              gap={{ base: "2", md: "4" }}
            >
              <Flex flexWrap="wrap" gap="2">
                {words.map((word, index) => {
                  if (word.toLowerCase() === "mentorship") {
                    return (
                      <Text
                        key={index}
                        color="brand.100"
                        fontWeight="700"
                        fontSize={{ base: "3xl", md: "5xl" }}
                      >
                        {word}
                      </Text>
                    );
                  } else {
                    return (
                      <Text
                        key={index}
                        fontWeight="700"
                        fontSize={{ base: "3xl", md: "5xl" }}
                      >
                        {word}
                      </Text>
                    );
                  }
                })}
              </Flex>
              <Text
                fontSize={{ base: "md", md: "xl" }}
                textAlign="center"
                mb="5"
              >
                {String(paragraph)}
              </Text>

              <HStack gap="3">
                <Button as="a" href={signUpAsMenteeUrl}>
                  Sign up as a Mentee
                </Button>
              </HStack>
            </VStack>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default BeginJourney;
