import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    border: "1px solid #e2e8f0",
    boxShadow: "none",
    p: { base: "4", md: "10" },
    pb: "lg",
    w: { base: "sm", md: "lg" },
    mx: "auto",
    mt: "16",
  },
});

const sizes = {
  md: definePartsStyle({
    container: {
      //borderRadius: '0px',
    },
  }),
};

const variants = {
  lightBlue: definePartsStyle({
    container: {
      backgroundColor: "lightBlue",
      border: "none",
      color: "dark",
      borderRadius: "10",
      mt: "2",
      m: 0,
      mx: 0,
    },
  }),
};

export const cardTheme = defineMultiStyleConfig({ baseStyle, sizes, variants });
