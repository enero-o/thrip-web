import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  color: "dark",
  fontWeight: "normal",
  fontSize: "sm",
});

export const textTheme = defineStyleConfig({
  baseStyle,
  variants: {
    light: {
      fontWeight: "light",
    },
    dark: {
      color: "pitchBlack",
      fontWeight: "medium",
      fontSize: "medium",
    },
    lightBlack: {
      color: "dark",
      fontWeight: "light",
      fontSize: "sm",
    },
    header: {
      color: "dark",
      fontWeight: "bold",
      fontSize: "2xl",
    },
    blue: {
      color: "brand.100",
    },
    darkGray: {
      color: "gray.800",
      fontSize: "xs",
    },
    darkBlue: {
      color: "brand.200",
      fontSize: { base: "md", md: "lg" },
      fontWeight: { md: "medium" },
    },
  },
});
