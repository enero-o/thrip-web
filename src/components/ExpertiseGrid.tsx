import type { FC } from "react";

import { Box, Button, HStack, Text } from "@chakra-ui/react";

interface ExpertiseGridProps {
  areasOfExpertise: { id: string; name: string; years: number }[];
}

const ExpertiseGrid: FC<ExpertiseGridProps> = ({ areasOfExpertise = [] }) => {
  return (
    <>
      {areasOfExpertise.map((expertise) => (
        <Box key={expertise.id}>
          <HStack
            justifyContent={{ base: "space-between", md: "initial" }}
            my="1"
          >
            <Box w="40%">
              <Button
                border="2px solid"
                borderColor="lightGray"
                bg={"#FFFFFF"}
                size={"xs"}
                color={"black"}
                borderRadius={100}
                fontSize={"xs"}
                fontWeight={"400"}
              >
                {expertise.name}
              </Button>
            </Box>

            <Text fontWeight={300} fontSize={{ base: "sm", md: "md" }}>
              {expertise.years} Year{expertise.years > 1 && "s"}
            </Text>
          </HStack>
        </Box>
      ))}
    </>
  );
};

export default ExpertiseGrid;
