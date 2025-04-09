import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
  rounded: 'md',
  color: 'dark',
  bgColor: 'transparent',
  borderColor: '#CBD5E1',
  fontWeight: 'medium',
  fontSize: 'sm',
});

const grayOutline = defineStyle({
  px: 3,
  rounded: 'md',
  color: 'dark',
  bgColor: 'transparent',
  border: '1px solid #E2E8F0',
  fontWeight: 'light',
  fontSize: 'sm',
  borderRadius: 65,
});

const solid = defineStyle({
  rounded: 'md',
  color: 'white',
  bgColor: 'brand.100',
  fontWeight: 'medium',
  fontSize: 'sm',
  _disabled: {
    opacity: 0.8,
    bgColor: 'brand.100',
  },
  _hover: {
    opacity: 0.8,
    bgColor: 'brand.100',
  },
});

const dark = defineStyle({
  rounded: 'md',
  color: 'white',
  bgColor: '#575964',
  fontWeight: 'medium',
  fontSize: 'sm',
  _disabled: {
    opacity: 0.4,
  },
  _hover: {
    opacity: 0.8,
  },
});

const ghost = defineStyle({
  px: 2,
  mr: 1,
  color: '#676F86',
  fontWeight: 'medium',
  fontSize: 'sm',
  _disabled: {
    opacity: 0.6,
  },
});

const danger = defineStyle({
  px: 10,
  bgColor: 'danger',
  color: 'white',
  fontSize: 'sm',
  _hover: {
    bgColor: 'white',
    border: '1px solid danger',
    color: 'danger',
  },
});

const dangerOutline = defineStyle({
  bgColor: 'transparent',
  color: '#EF4444',
  fontSize: 'sm',
  border: '1px solid #EF4444',
});

export const buttonTheme = defineStyleConfig({
  variants: { outline, solid, dark, ghost, danger, grayOutline, dangerOutline },
});
