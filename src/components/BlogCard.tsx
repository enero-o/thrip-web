import type React from "react";

import { Avatar, Box, Button, Flex, HStack, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  date: string;
  image: string;
  name: string;
  link: string;
}

const BlogCard: React.FC<Props> = ({
  name,
  title,
  description,
  date,
  image,
  link,
}) => {
  return (
    <Flex
      p={{ base: "2", md: "4" }}
      border="1px solid"
      borderColor="gray.200"
      minW={{ base: "100%", md: "md", lg: "80" }}
      maxW="96"
      borderRadius="8"
      w="100%"
      maxH={{ md: "lg" }}
      gap="4"
      flexDir="column"
      justifyContent="space-between"
    >
      <Box
        height={{ base: "40", md: "56" }}
        borderRadius="8"
        position="relative"
        bgImage={`url(${image})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
      ></Box>

      <Text
        noOfLines={2}
        fontSize={{ base: "base", md: "xl" }}
        fontWeight="700"
        as="h2"
        textTransform="capitalize"
      >
        {title}
      </Text>

      <Text noOfLines={2} fontSize={{ base: "sm", md: "base" }}>
        {description}
      </Text>

      <Flex flexDir="column" gap="3">
        <HStack gap="2">
          <HStack>
            <Avatar size="sm" name={name} src={""} />
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              color="gray.500"
              fontWeight="500"
            >
              {name}
            </Text>
          </HStack>

          <Text
            fontSize={{ base: "xs", md: "sm" }}
            color="gray.500"
            fontWeight="500"
          >
            {date}{" "}
          </Text>
        </HStack>
      </Flex>
      <Button as="a" href={link}>
        Read More
      </Button>
    </Flex>
  );
};

export default BlogCard;
