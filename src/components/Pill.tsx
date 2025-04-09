import { Box, Text } from "@chakra-ui/react";

interface PillProps {
  text: string;
  onClick?: () => void;
  active?: boolean;
}

const Pill = ({ text, onClick, active }: PillProps) => (
  <Box
    onClick={onClick}
    border="1px solid"
    cursor="pointer"
    borderColor="gray.200"
    p="2"
    borderRadius="full"
    w="fit-content"
    bg={active ? "brand.100" : "transparent"}
  >
    <Text
      fontSize={{ base: "sm", md: "md" }}
      fontWeight="300"
      color={active ? "white" : "inherit"}
    >
      {text}
    </Text>
  </Box>
);

export default Pill;
