import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const hBaseStyle = defineStyle({
  gap: "0",
});

const vBaseStyle = defineStyle({
  gap: "0",
});

export const hStackTheme = defineStyleConfig({
  baseStyle: hBaseStyle,
});

export const vStackTheme = defineStyleConfig({
  baseStyle: vBaseStyle,
});
