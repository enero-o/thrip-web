import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tablist: {
    backgroundColor: 'gray.100',
    p: 1.5,
    borderRadius: 10,
  },
});

// export the component theme
export const tabsTheme = defineMultiStyleConfig({ baseStyle });
