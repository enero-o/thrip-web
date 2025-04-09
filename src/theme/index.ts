import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import { buttonTheme } from "./button";
import { cardTheme } from "./card";
import { checkboxTheme } from "./checkbox";
import { colors } from "./colors";
import {
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights,
} from "./font";
import { formErrorMessageTheme, formLabelTheme } from "./form";
import { headingTheme } from "./heading";
import { inputTheme } from "./input";
import { linkTheme } from "./link";
import { menuTheme } from "./menu";
import { progressTheme } from "./progress";
import { hStackTheme, vStackTheme } from "./stack";
import { switchTheme } from "./switch";
import { tabsTheme } from "./tabs";
import { textTheme } from "./text";
import { avatarTheme } from "./avatar";

export const theme = extendTheme({
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  components: {
    Switch: switchTheme,
    Checkbox: checkboxTheme,
    Button: buttonTheme,
    Card: cardTheme,
    Heading: headingTheme,
    Link: linkTheme,
    FormLabel: formLabelTheme,
    FormErrorMessage: formErrorMessageTheme,
    Menu: menuTheme,
    Input: inputTheme,
    Tabs: tabsTheme,
    Text: textTheme,
    HStack: hStackTheme,
    VStack: vStackTheme,
    Progress: progressTheme,
    Avatar: avatarTheme,
  },
});
