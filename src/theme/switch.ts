import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyleTrack = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    bg: 'gray.100',
    _checked: {
      bg: `${c}.500`,
    },
  };
});

const baseStyle = definePartsStyle((props) => ({
  // define the part you're going to style
  container: {
    // ...
  },
  thumb: {
    bg: 'white',
  },
  track: baseStyleTrack(props),
}));

const boxy = definePartsStyle({
  track: {
    bg: 'white',
    _checked: {
      bg: '#00AD7E',
    },
  },
});

export const switchTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { boxy },
});
