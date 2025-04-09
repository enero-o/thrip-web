import { checkboxAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

// default base style from the Checkbox theme
const baseStyle = definePartsStyle({
  // control: {
  //   padding: 3,
  //   borderRadius: 0,
  // },
});

// Defining a custom variant
const variantCircular = definePartsStyle({
  control: defineStyle({
    rounded: 'full',
    width: '20px',
    height: '20px',
    _checked: {
      background: '#28B446',
      border: 'none',
    },
    icon: {
      width: 1,
      height: 1,
    },
    _hover: {
      background: '#28B446',
      border: 'none',
    }
  }),
});

const variants = {
  circular: variantCircular,
};

const sizes = {
  xs: definePartsStyle({
    control: defineStyle({
      boxSize: 4,
    }),
  }),
};

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
});
