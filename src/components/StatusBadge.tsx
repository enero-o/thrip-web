import type { FC } from "react";

import { Badge, Text } from "@chakra-ui/react";
import { toTitleCase } from "@thrip/utils";

interface ComponentProps {
  text: string;
}

const StatusBadge: FC<ComponentProps> = ({ text }) => {
  return (
    <Badge
      width="fit-content"
      bgColor={text === "LIVE" ? "#EF4444" : "brand.100"}
      py="1"
      px="2"
      borderRadius="3px"
      textTransform="none"
    >
      <Text fontSize={{ base: "2xs", md: "sm" }} color="white">
        {toTitleCase(text.replace("_", " "))}
      </Text>
    </Badge>
  );
};

export default StatusBadge;
