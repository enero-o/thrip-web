import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    zIndex: 10,
  },
});

const variants = {
  secondary: {
    item: {
      ps: '6',
      py: '3',
      color: 'brand.100',
      fontSize: 'sm',
      _hover: { bg: 'brand.100', color: 'white' },
      _focus: { bg: 'brand.100', color: 'white' },
    },
  },
};

export const menuTheme = defineMultiStyleConfig({ baseStyle, variants });
