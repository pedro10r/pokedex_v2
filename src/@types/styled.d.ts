import "styled-components/native";
import { theme } from "@styles/themes/default";

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
