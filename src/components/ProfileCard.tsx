import type { FC } from "react";

import { Flex, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { nameInitials } from "@thrip/utils/helpers";
import { ProfileCardProps } from "@thrip/utils/types";

const ProfileCard: FC<ProfileCardProps> = ({
  trending,
  image,
  name,
  link,
  expertise,
}) => {
  const backgroundGradient = `linear-gradient(181deg,
     rgba(255, 255, 255, 0.00) 52.13%, 
     rgba(45, 48, 61, 0.70) 76.22%, #2D303D 87.74%, #2D303D 98.97%),
      url(${image})`;

  return (
    <Link to={link}>
      <Flex
        p={trending ? ["8", "5"] : "6"}
        height="96"
        position="relative"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundImage={backgroundGradient}
        alignItems="end"
        backgroundPosition="top"
        borderRadius="5"
        bgColor={!image ? "green.200" : ""}
        objectFit="cover"
      >
        {!image && (
          <Text
            fontSize="7xl"
            fontWeight={700}
            position="absolute"
            color="white"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            {nameInitials(name)}
          </Text>
        )}

        <VStack gap={2} align="flex-start">
          <Text
            color="white"
            fontSize={trending ? "3xl" : "2xl"}
            fontWeight={700}
            lineHeight="normal"
          >
            {name}
          </Text>

          {expertise?.expertise && (
            <Text color="white" lineHeight="normal">
              {expertise?.expertise} ({expertise?.years} years)
            </Text>
          )}
        </VStack>
      </Flex>
    </Link>
  );
};

export default ProfileCard;
