import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { signUpUrl } from "@thrip/appUrls";

import routes from "@thrip/routes";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const checkboxData = [
  "One on one mentoring",
  "Group teaching webinars",
  "Masterclasses offering in depth learning",
  "Virtual shadowing treating live patients",
];

const KnowUser = () => {
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);

  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxValues = [...checkboxValues];
    if (updatedCheckboxValues.includes(checkboxData[index])) {
      updatedCheckboxValues.splice(index, 1);
    } else {
      updatedCheckboxValues.push(checkboxData[index]);
    }
    setCheckboxValues(updatedCheckboxValues);
  };

  const isCheckboxEmpty = checkboxValues.length === 0;

  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <Box pt={{ base: "12", md: "28" }} pb={{ base: "20", md: "28" }} px="4">
          <Text
            fontWeight="700"
            fontSize={{ base: "xl", md: "3xl" }}
            pb={{ base: "2", md: "3" }}
          >
            Let’s get to know you{" "}
          </Text>

          <VStack alignItems="start" gap="4">
            <HStack>
              <Text
                fontWeight={{ md: "700" }}
                fontSize={{ base: "md", md: "lg" }}
              >
                Which mentoring format interests you the most?
              </Text>
              <Box display={{ base: "none", md: "block" }}>
                <ArrowDown color="#2473F7" />
              </Box>
            </HStack>

            <VStack alignItems="start" w={{ base: "100%", lg: "xl" }}>
              {checkboxData.map((value, index) => (
                <Checkbox
                  borderTopRadius={index === 0 ? "md" : "none"}
                  borderBottomRadius={
                    index === checkboxValues.length - 1 ? "md" : "none"
                  }
                  borderColor="dark"
                  bgColor="gray.100"
                  onChange={() => handleCheckboxChange(index)}
                  px="6"
                  py="3"
                  gap="2"
                  key={value}
                  w="100%"
                >
                  {value}
                </Checkbox>
              ))}
            </VStack>

            <HStack
              justifyContent="space-between"
              w="100%"
              pt={{ base: "6", md: "12" }}
            >
              <Button variant={"outline"} as="a" href={routes.home}>
                Cancel
              </Button>
              <Button
                isDisabled={isCheckboxEmpty}
                _hover={{
                  opacity: isCheckboxEmpty ?? "0.8",
                }}
                as="a"
                target="_blank"
                href={`${signUpUrl}?userType=${role}`}
              >
                Continue
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Flex>
    </>
  );
};

export default KnowUser;
