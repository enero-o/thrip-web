import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  color: 'brand.100',
  fontSize: 'sm',
});

export const linkTheme = defineStyleConfig({
  baseStyle,
  defaultProps: {},
});
