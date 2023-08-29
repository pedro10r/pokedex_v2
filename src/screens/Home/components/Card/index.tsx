import { memo } from "react";

import { ColorPalette } from "@hooks/usePokemonColor/types";
import { PokemonType } from "@services/pokemon";
import { capitalize } from "@utils/capitalize";
import { Piece } from "@components/Piece";
import imageBackGround from "@assets/background_white.png";

import {
  Container,
  IdArea,
  Name,
  Id,
  TypeArea,
  Image,
  ImageAbsolute,
} from "./styles";

type Props = {
  id: number;
  name: string;
  pallete: ColorPalette;
  types: PokemonType[];
  imageUri: string;
  onPress: () => void;
};

function CardMemo({ id, name, pallete, types, imageUri, onPress }: Props) {
  return (
    <Container
      backgroundColor={pallete.primary}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <IdArea>
        <Id>#00{id}</Id>
      </IdArea>

      <Image source={imageBackGround} />
      <ImageAbsolute resizeMode="contain" source={{ uri: imageUri }} />

      <Name textColor={pallete.text}>{capitalize(name)}</Name>

      <TypeArea>
        {!!types.length &&
          types.map((item, index) => (
            <Piece key={`${item}_${index}`} item={item} pallete={pallete} />
          ))}
      </TypeArea>
    </Container>
  );
}

export const Card = memo(CardMemo, (prevProps, nextProps) => {
  return nextProps.id === prevProps.id;
});
