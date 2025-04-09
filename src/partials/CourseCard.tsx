import type React from "react";

import { StarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { formatDate } from "@thrip/utils";
import { Mentor } from "@thrip/types";
import StatusBadge from "@thrip/components/StatusBadge";

interface CourseCardProps {
  isNew?: boolean;
  badgeText: string;
  title: string;
  description: string;
  dateTime: string;
  price: number;
  regularPrice?: number;
  discount?: number;
  image: string;
  _id: string;
  mentor: Mentor;
  courseType?: "Masterclass" | "Webinar" | "Virtual_Shadowing";
  hasRegisteredCourse?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  isNew,
  badgeText,
  title,
  description,
  dateTime,
  price,
  regularPrice,
  image,
  _id,
  mentor,
  courseType,
}) => {
  const strippedValue = description?.replace(/<\/?[^>]+(>|$)/g, "");
  const truncatedDescription =
    description && description.length > 0 && `${strippedValue.slice(0, 68)}...`;

  const navigate = useNavigate();
  const course = courseType ? `courseType=${courseType}` : "";
  const link = `/course-detail/${_id}?${course}`;

  const handlePageNavigation = () => {
    if (badgeText === "LIVE") {
      navigate(link);
    } else if (badgeText === "On-demand") {
      navigate("#");
    }
  };

  const { formattedDate, formattedTime } = formatDate(dateTime);

  return (
    <Flex
      p={{ base: "1", md: "4" }}
      border="1px solid"
      borderColor="gray.200"
      borderRadius="8"
      w="100%"
      height={{ md: "lg" }}
      flexDir="column"
      justifyContent="space-between"
    >
      <Box
        height={{ base: "56", md: "44" }}
        borderRadius="8"
        position="relative"
        bgImage={`url(${image})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
      >
        {isNew && (
          <HStack
            position="absolute"
            top="4"
            p="1"
            right="3"
            bgColor="gray.200"
            gap="1"
            alignItems="center"
            borderRadius="3px"
          >
            <StarIcon color="dark" boxSize={3} />
            <Text fontSize="xs">New</Text>
          </HStack>
        )}
      </Box>
      <Flex pt="4" flexDir="column" gap="2">
        <Flex justifyContent="space-between">
          <StatusBadge text={badgeText} />

          {badgeText === "On-demand" && (
            <HStack gap="1" alignItems="center">
              <StarIcon
                color="yellow.500"
                mb={0.5}
                boxSize={{ base: 3, md: 5 }}
              />
              <Text fontSize={{ base: "2xs", md: "sm" }}>3.8/5</Text>
            </HStack>
          )}
        </Flex>
        <Text
          noOfLines={1}
          fontSize={{ base: "base", md: "2xl" }}
          fontWeight="700"
          as="h2"
          textTransform="capitalize"
        >
          {title}
        </Text>
        <Text fontSize={{ base: "sm", md: "base" }}>
          {truncatedDescription}
          {description !== "" && (
            <Text
              as="span"
              cursor="pointer"
              onClick={() => handlePageNavigation()}
              textDecoration="underline"
              color="brand.100"
            >
              Read More
            </Text>
          )}
        </Text>
      </Flex>{" "}
      <Flex flexDir="column" gap="3">
        <Flex gap="2" alignItems="center">
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
            Speaker
          </Text>
          <HStack>
            <WrapItem>
              <Avatar
                size="xs"
                name={`${mentor?.firstName} ?? ''} ${mentor?.lastName ?? ""}`}
                src={mentor?.imageUrl ?? ""}
              />
            </WrapItem>
            <Text fontSize={{ base: "xs", md: "bse" }}>
              {mentor?.firstName ?? ""} {mentor?.lastName ?? ""}
            </Text>
          </HStack>
        </Flex>

        <HStack gap="2">
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            color="gray.500"
            fontWeight="500"
          >
            Date / Time
          </Text>
          <Text
            fontSize={{ base: "xs", md: "base" }}
          >{`${formattedDate}, ${formattedTime}`}</Text>
        </HStack>

        <HStack gap="2">
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
            Price
          </Text>

          <Text fontSize={{ base: "base", md: "lg" }} fontWeight="700">
            £{price}
          </Text>

          <Text
            color="gray.700"
            fontSize={{ base: "xs", md: "sm" }}
            textDecor="line-through"
          >
            {regularPrice ? `£${regularPrice}` : ""}
          </Text>
        </HStack>

        <Button onClick={() => handlePageNavigation()}>
          See Full Course Details
        </Button>
      </Flex>
    </Flex>
  );
};

export default CourseCard;
