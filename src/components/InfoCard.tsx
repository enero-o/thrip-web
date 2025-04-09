import { Box, Card, CardBody, CardHeader, Flex, Text } from "@chakra-ui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";

interface Props {
  number: string;
  title: string;
  body?: string;
}

const InfoCard = ({ number, title, body }: Props) => {
  const [isBodyVisible, setIsBodyVisible] = useState<boolean>(false);

  const toggleBodyVisibility = () => {
    setIsBodyVisible(!isBodyVisible);
  };

  return (
    <Card m="0" w="full" flexDir={{ base: "column", md: "row" }}>
      <Text color="brand.100" fontSize="xl" fontWeight="700">
        {number}
      </Text>
      <Box pl={{ md: "7" }} w="100%">
        <Flex
          justifyContent="space-between"
          alignItems={{ base: "center", md: "normal" }}
        >
          <CardHeader
            px={{ base: "0", md: "5" }}
            py="0"
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="700"
          >
            {title}
          </CardHeader>
          <Box cursor="pointer" onClick={toggleBodyVisibility}>
            <Flex
              alignItems="center"
              justifyContent="center"
              h={{ base: "6", md: "12" }}
              w={{ base: "6", md: "12" }}
              borderRadius="full"
              bgColor={isBodyVisible ? "brand.100" : "gray.200"}
            >
              {isBodyVisible ? (
                <X size={15} color="#ffff" />
              ) : (
                <Plus size={15} color="#2473F7" />
              )}
            </Flex>
          </Box>
        </Flex>
        {isBodyVisible && (
          <CardBody px={{ base: "0", md: "5" }}>{body}</CardBody>
        )}
      </Box>
    </Card>
  );
};

export default InfoCard;
