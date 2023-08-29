import { ColorPalette } from "@hooks/usePokemonColor/types";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Details: {
        id: number;
        name: string;
        pallete: ColorPalette;
      };
    }
  }
}
