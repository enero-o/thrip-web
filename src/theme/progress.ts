import { progressAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(progressAnatomy.keys);

const baseStyle = definePartsStyle({
  filledTrack: {
    bg: 'brand.100',
  },
  track: {
    bg: '#ACC9F1',
  },
});

export const progressTheme = defineMultiStyleConfig({ baseStyle });
