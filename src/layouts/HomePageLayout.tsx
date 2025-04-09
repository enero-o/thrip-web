import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
  header: string;
  subHeader: string;
}

const HomePageLayout = ({ header, subHeader, children }: Props) => {
  return (
    <>
      <Flex
        px={{ base: "4", md: "32" }}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap="10"
      >
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
            {header}
          </Text>
          <Text
            lineHeight="8"
            textAlign="center"
            fontWeight="300"
            fontSize={{ base: "md", md: "xl" }}
          >
            {subHeader}
          </Text>
        </Box>
      </Flex>
      {children}
    </>
  );
};

export default HomePageLayout;
