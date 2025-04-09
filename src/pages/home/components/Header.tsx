import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
  Link,
  Spinner,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { signUpAsMenteeUrl, signUpAsMentorUrl } from "@thrip/appUrls";
import ScrollAnimation from "@thrip/components/ScrollAnimation";
import { useGetHeaderImages } from "@thrip/customHooks";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

const checkboxData = [
  { text: "Become a mentor", value: "mentor" },
  { text: "Become a mentee", value: "mentee" },
];

const Header = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const isOptionEmpty = selectedOption === "";
  const [data, loading] = useGetHeaderImages();
  const imageData = data[0];

  const images = imageData?.fields?.image.map(
    (image: any) => image?.fields?.file?.url
  );

  return (
    <Box>
      <Flex
        justifyContent="space-between"
        pb={{ base: "16", md: "0" }}
        gap="10"
        flexDir={{ base: "column", xl: "row" }}
        pt={{ base: "4", md: "0" }}
        pl={{ base: "4", xl: "32" }}
        pr={{ base: "4", md: "0" }}
        alignItems="center"
      >
        <Flex w="100%" maxW={{ lg: "3xl" }} flexDir="column" zIndex="10">
          <Text>
            <Text
              fontWeight="700"
              fontSize={{ base: "3xl", md: "6xl" }}
              as="span"
              color="brand.100"
            >
              LEARN{" "}
            </Text>

            <Text
              as="span"
              fontWeight="700"
              fontSize={{ base: "3xl", md: "6xl" }}
            >
              FROM THE{" "}
            </Text>
            <Text
              as="span"
              fontWeight="700"
              color="brand.100"
              fontSize={{ base: "3xl", md: "6xl" }}
            >
              BEST
            </Text>

            <Text
              as="span"
              fontWeight="700"
              fontSize={{ base: "3xl", md: "6xl" }}
            >
              {","} BE THE
            </Text>
            <Text
              as="span"
              color="brand.100"
              fontWeight="700"
              fontSize={{ base: "3xl", md: "6xl" }}
            >
              {" "}
              BEST
            </Text>
            <Text
              as="span"
              fontWeight="700"
              fontSize={{ base: "3xl", md: "6xl" }}
            >
              .
            </Text>
          </Text>

          <Text
            fontWeight={{ base: "300", md: "400" }}
            fontSize={{ base: "md", md: "xl" }}
          >
            Learn from expert mentors, in the comfort of your own home or
            practice.
          </Text>

          <Divider
            opacity="1"
            my={{ base: "3", md: "5" }}
            borderRadius="5px"
            bgColor="brand.100"
            height="1"
            width="10"
          />
          <VStack alignItems="start" gap="4">
            <HStack>
              <Text fontWeight="700" fontSize={{ base: "md", md: "xl" }}>
                What brings you to Thrip today?
              </Text>
              <Box display={{ base: "none", md: "block" }}>
                <ArrowDown color="#2473F7" />
              </Box>
            </HStack>

            <RadioGroup
              onChange={setSelectedOption}
              value={selectedOption}
              w="100%"
            >
              <VStack alignItems="start" w={{ base: "100%", lg: "xl" }}>
                {checkboxData.map((i) => (
                  <Box bgColor="gray.100" px="6" py="3" w="100%" key={i.value}>
                    <Radio borderColor="dark" value={i.value} w="100%">
                      {i.text}
                    </Radio>
                  </Box>
                ))}
              </VStack>
            </RadioGroup>

            <Button
              _hover={{
                opacity: isOptionEmpty ? "0.8" : undefined,
              }}
              isDisabled={isOptionEmpty}
              as="a"
              href={`/know-user?role=${selectedOption}`}
            >
              Continue
            </Button>
          </VStack>
        </Flex>

        {loading ? (
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
          <ScrollAnimation images={images} />
        )}
      </Flex>

      <Flex
        display={{ base: "none", md: "flex" }}
        borderTop="1px solid"
        borderColor="gray.200"
        justifyContent="end"
        gap="10"
        alignItems="center"
        py="4"
        mt="14"
        px="5"
      >
        <Text fontWeight="300">
          Unlock unlimited mentorship opportunities now – Free to Join
        </Text>

        <HStack gap="4" display="flex">
          <Button as="a" href={signUpAsMenteeUrl}>
            Sign up as a Mentee
          </Button>
          <Link color="dark" href={signUpAsMentorUrl}>
            Apply to be a Mentor
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
