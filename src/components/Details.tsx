import type { FC } from "react";

import { Box, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";

import type { GetCourse } from "@thrip/types";

interface ComponentProps {
  data: GetCourse;
}

const Details: FC<ComponentProps> = ({ data }) => {
  const courseType =
    data?.type?.charAt(0) + data?.type?.slice(1)?.toLowerCase();

  return (
    <VStack gap="6" align="flex-start">
      <Box>
        <Text fontSize="lg" fontWeight="700">
          {`${courseType} Overview:`}
        </Text>
        <Box dangerouslySetInnerHTML={{ __html: data?.description ?? "" }} />
      </Box>

      {data?.aim && (
        <Box>
          <Text fontSize="lg" fontWeight="700">
            {`${courseType} Aim:`}
          </Text>

          <Text fontWeight="400" fontSize="md">
            {data?.aim ?? ""}
          </Text>
        </Box>
      )}

      {data?.objective && (
        <Box>
          <Text fontSize="lg" fontWeight="700">
            Learning Outcomes:
          </Text>

          <Text fontWeight="400" fontSize="md">
            <UnorderedList fontSize="md" ml="3">
              {data?.objective.map((i) => (
                <ListItem> {i}</ListItem>
              ))}
            </UnorderedList>
          </Text>
        </Box>
      )}
    </VStack>
  );
};

export default Details;
