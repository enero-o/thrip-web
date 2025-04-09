import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  color: 'black',
  fontWeight: 'bold',
});

export const headingTheme = defineStyleConfig({
  baseStyle,
  sizes: {
    'xl': {
      fontSize: '2xl',
    },
  },
});
