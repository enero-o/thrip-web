import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { toTitleCase } from "@thrip/utils";

interface CommentCardProps {
  image: string;
  title: string;
  location?: string;
  comment: string;
  large?: boolean;
  userType?: {
    name: string;
    type: string;
  };
}

const CommentCard = ({
  image,
  title,
  location,
  comment,
  large,
  userType,
}: CommentCardProps) => {
  return (
    <Flex
      width={{ base: "100%", md: large ? "xl" : "sm" }}
      pt="16"
      px="8"
      pb="6"
      gap="2"
      border="1px solid"
      borderColor="gray.200"
      flexDir="column"
    >
      <Avatar src={image} name={userType ? userType.name : title} size="xl" />
      <Box>
        <Text fontSize="2xl" fontWeight="500">
          {title}
        </Text>
        {location && <Text opacity="0.7">{location}</Text>}
      </Box>
      <Text opacity="0.7" fontWeight="300">
        "{comment}"
      </Text>
      {userType && (
        <Box>
          <Text fontWeight="700">{userType.name}</Text>
          <Text>{toTitleCase(userType.type)}</Text>
        </Box>
      )}
    </Flex>
  );
};

export default CommentCard;
