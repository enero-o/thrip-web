import React, { useEffect, useState } from "react";
import { Box, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

const Carousel: React.FC<Props> = ({ children }) => {
  const [current, setCurrent] = useState<number>(0);
  const [length, setLength] = useState(React.Children.count(children));

  useEffect(() => {
    setLength(React.Children.count(children));
  }, [children]);

  const prev = () => {
    if (current > 0) {
      setCurrent((prevState) => prevState - 1);
    }
  };

  const next = () => {
    if (current < length - 4) {
      setCurrent((prevState) => prevState + 1);
    }
  };

  const baseWidth = useBreakpointValue({
    base: "100%",
    md: "calc((100% - 5%) / 3)",
    lg: "calc((100% - 10%) / 4)",
  });

  return (
    <Flex alignItems="center" gap={4}>
      <IconButton
        icon={<ChevronLeft />}
        aria-label="Previous"
        onClick={prev}
        colorScheme="gray"
        variant="ghost"
      />
      <Box width="100%" overflow="hidden">
        <Flex
          gap="0 3%"
          transition="transform 0.5s ease-in-out"
          transform={{
            base: `translateX(-${current * (100 + current / 2)}%)`,
            md: `translateX(-${current * (105 / 3)}%)`,
            lg: `translateX(-${current * (105 / 4)}%)`,
          }}
        >
          {React.Children.map(children, (child) => (
            <Box width={baseWidth} minWidth={baseWidth}>
              {child}
            </Box>
          ))}
        </Flex>
      </Box>
      <IconButton
        icon={<ChevronRight />}
        aria-label="Next"
        onClick={next}
        colorScheme="gray"
        variant="ghost"
        isDisabled={current === length - 1}
      />
    </Flex>
  );
};

export default Carousel;
