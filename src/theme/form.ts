import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

export const formLabelTheme = defineStyleConfig({
  baseStyle: defineStyle({
    fontSize: 'sm',
    mr: 0,
    color: 'black',
    fontWeight: '400',
    lineHeight: '20px',
  }),
});

export const formErrorMessageTheme = defineStyleConfig({
  baseStyle: defineStyle({
    fontSize: 'sm',
    fontWeight: '400',
    lineHeight: '20px',
  }),
});
