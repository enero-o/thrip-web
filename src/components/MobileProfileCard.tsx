import type { FC } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import { Link, To } from "react-router-dom";
import { nameInitials } from "@thrip/utils/helpers";
import { ExpertiseItem } from "@thrip/types";

interface SpecialtyPillProps {
  specialties?: string[];
}

const SpecialtyPill: FC<SpecialtyPillProps> = ({ specialties }) => {
  const MAX_DISPLAYED_SPECIALTIES = 3;

  const displayedSpecialties = specialties?.slice(0, MAX_DISPLAYED_SPECIALTIES);

  const remainingSpecialties = specialties?.slice(MAX_DISPLAYED_SPECIALTIES);

  return (
    <>
      {displayedSpecialties?.map((val) => (
        <MiniBox text={val} key={val} />
      ))}

      {remainingSpecialties?.length && remainingSpecialties?.length > 0 && (
        <MiniBox text={`${remainingSpecialties?.length} More`} />
      )}
    </>
  );
};

interface Props {
  text: string;
}

const MiniBox: FC<Props> = ({ text }) => {
  return (
    <Flex
      border="0.5px solid"
      borderColor="gray.200"
      p="1"
      borderRadius="35"
      width="fit-content"
    >
      <Text fontSize="sm">{text}</Text>
    </Flex>
  );
};

interface MobileProfileCardProps extends SpecialtyPillProps {
  image: string;
  name: string;
  title?: string;
  link?: string;
  expertise?: ExpertiseItem;
}

const MobileProfileCard: FC<MobileProfileCardProps> = ({
  specialties,
  image,
  title,
  name,
  link,
  expertise,
}) => {
  return (
    <Link to={link as To}>
      <Box border="1px solid" borderColor="gray.200" borderRadius="6" p="2">
        <Box
          height="44"
          borderRadius="8"
          position="relative"
          backgroundImage={`url(${image})`}
          bgColor={!image ? "green.200" : ""}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          {!image && (
            <Text
              fontSize="6xl"
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
        </Box>

        <Flex flexDir="column" pt="2">
          <Text fontSize="md" fontWeight="700">
            {name}
          </Text>
          <Text fontSize="xs">{title}</Text>
        </Flex>
        <Flex gap="1" flexWrap="wrap" pt="1.5">
          <SpecialtyPill specialties={specialties} />
        </Flex>

        {expertise?.expertise && (
          <Text lineHeight="normal">
            {expertise?.expertise} ({expertise?.years} years)
          </Text>
        )}
      </Box>
    </Link>
  );
};

export default MobileProfileCard;
