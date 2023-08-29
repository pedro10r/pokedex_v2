import { useTheme } from "styled-components";
import { Colors } from "./types";

export function usePokemonColorPalette(color: Colors) {
  const theme = useTheme();

  const palette = {
    black: {
      primary: theme?.COLORS?.BLACK_100,
      secondary: theme?.COLORS?.BLACK_200,
      support: theme?.COLORS?.BLACK_300,
      text: theme?.COLORS?.WHITE,
    },
    blue: {
      primary: theme?.COLORS?.BLUE_100,
      secondary: theme?.COLORS?.BLUE_200,
      support: theme?.COLORS?.BLUE_300,
      text: theme?.COLORS?.WHITE,
    },
    brown: {
      primary: theme?.COLORS?.BROWN_100,
      secondary: theme?.COLORS?.BROWN_200,
      support: theme?.COLORS?.BROWN_300,
      text: theme?.COLORS?.WHITE,
    },
    gray: {
      primary: theme?.COLORS?.GRAY_100,
      secondary: theme?.COLORS?.GRAY_200,
      support: theme?.COLORS?.GRAY_300,
      text: theme?.COLORS?.WHITE,
    },
    green: {
      primary: theme?.COLORS?.GREEN_100,
      secondary: theme?.COLORS?.GREEN_200,
      support: theme?.COLORS?.GREEN_300,
      text: theme?.COLORS?.WHITE,
    },
    pink: {
      primary: theme?.COLORS?.PINK_100,
      secondary: theme?.COLORS?.PINK_200,
      support: theme?.COLORS?.PINK_300,
      text: theme?.COLORS?.WHITE,
    },
    purple: {
      primary: theme?.COLORS?.PURPLE_100,
      secondary: theme?.COLORS?.PURPLE_200,
      support: theme?.COLORS?.PURPLE_300,
      text: theme?.COLORS?.WHITE,
    },
    red: {
      primary: theme?.COLORS?.RED_100,
      secondary: theme?.COLORS?.RED_200,
      support: theme?.COLORS?.RED_300,
      text: theme?.COLORS?.WHITE,
    },
    white: {
      primary: theme?.COLORS?.WHITE_100,
      secondary: theme?.COLORS?.WHITE_200,
      support: theme?.COLORS?.WHITE_300,
      text: theme?.COLORS?.TEXT,
    },
    yellow: {
      primary: theme?.COLORS?.YELLOW_100,
      secondary: theme?.COLORS?.YELLOW_200,
      support: theme?.COLORS?.YELLOW_300,
      text: theme?.COLORS?.WHITE,
    },
    default: {
      primary: theme?.COLORS?.WHITE_100,
      secondary: theme?.COLORS?.WHITE_200,
      support: theme?.COLORS?.WHITE_300,
      text: theme?.COLORS?.TEXT,
    },
  };

  return palette.hasOwnProperty(color) ? palette[color] : palette.default;
}
