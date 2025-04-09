import { useState } from "react";

import { InfoIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";

interface Props {
  value: string;
  color?: string;
}

export default function CustomTooltip({ value, color = "gray.500" }: Props) {
  const [isLabelOpen, setIsLabelOpen] = useState(false);

  return (
    <Tooltip hasArrow isOpen={isLabelOpen} label={value} fontSize="xs">
      <InfoIcon
        fill={color}
        onMouseEnter={() => setIsLabelOpen(true)}
        onMouseLeave={() => setIsLabelOpen(false)}
        onClick={() => setIsLabelOpen(true)}
      />
    </Tooltip>
  );
}
