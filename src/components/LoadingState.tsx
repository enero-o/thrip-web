import { Box, SimpleGrid, SkeletonText } from "@chakra-ui/react";

const LoadingState = () => {
  return (
    <Box w="full" mt="10">
      <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={4}>
        <SkeletonText
          size="40"
          noOfLines={1}
          skeletonHeight="sm"
          startColor="gray.100"
          endColor="gray.200"
        />
        <SkeletonText
          size="40"
          noOfLines={1}
          skeletonHeight="sm"
          startColor="gray.100"
          endColor="gray.200"
        />
        <SkeletonText
          size="40"
          noOfLines={1}
          skeletonHeight="sm"
          startColor="gray.100"
          endColor="gray.200"
        />
        <SkeletonText
          size="40"
          noOfLines={1}
          skeletonHeight="sm"
          startColor="gray.100"
          endColor="gray.200"
        />
      </SimpleGrid>
    </Box>
  );
};

export default LoadingState;
