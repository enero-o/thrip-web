import { Flex, Image, Text, VStack } from "@chakra-ui/react";

interface AboutCardProps {
  title: string;
  paragraph: string;
  image: string;
  imagePlacement?: string;
}

const AboutCard = ({
  image,
  imagePlacement,
  title,
  paragraph,
}: AboutCardProps) => {
  return (
    <Flex
      bgColor={imagePlacement === "right" ? "white" : "gray.700"}
      py={{ base: "6", md: "32" }}
      px={{ base: "4", md: "36" }}
      alignItems="center"
      gap={{ base: "5", md: "20" }}
      flexDir={{
        base: "column-reverse",
        xl: `${imagePlacement === "right" ? "row-reverse" : "row"}`,
      }}
    >
      <Image
        src={image}
        width="xl"
        height={{ base: "2xs", md: "sm" }}
        objectFit="cover"
        objectPosition="top"
      />
      <VStack
        pt={{ base: "3", md: "0" }}
        alignItems="start"
        gap={{ base: "2", md: "4" }}
      >
        <Text fontWeight="700" fontSize={{ base: "2xl", md: "4xl" }}>
          {title}
        </Text>
        <Text
          lineHeight="8"
          fontWeight="300"
          fontSize={{ base: "md", md: "xl" }}
        >
          {paragraph}
        </Text>
      </VStack>
    </Flex>
  );
};

export default AboutCard;
