import { HStack, Image, Text } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <HStack gap="2" onClick={() => navigate(-1)} cursor="pointer">
      <Image src="/prev.png" alt="previous" />
      <Text color="black" fontSize="sm" fontWeight={500}>
        Back
      </Text>
    </HStack>
  );
};

export default GoBack;
