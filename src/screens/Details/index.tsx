import { useNavigation, useRoute } from "@react-navigation/native";

import { Piece } from "@components/Piece";

import { ColorPalette } from "@hooks/usePokemonColor/types";
import { useUriPokemonImage } from "@hooks/useUriPokemonImage";
import { PokemonType } from "@services/pokemon";
import { capitalize } from "@utils/capitalize";
import imageBackground from "@assets/image_background.png";

import {
  Container,
  Header,
  BackButton,
  IconButton,
  Content,
  Title,
  ActiveArea,
  Id,
  TypeArea,
  Image,
  ImageBackground,
} from "./styles";
import { useTheme } from "styled-components";

type RouteParams = {
  id: number;
  name: string;
  pallete: ColorPalette;
};

export function Details() {
  const types: PokemonType[] = [
    {
      type_id: 1,
      pokemon_v2_type: {
        name: "Grass",
      },
    },
    {
      type_id: 2,
      pokemon_v2_type: {
        name: "Poison",
      },
    },
  ];

  const { params } = useRoute();
  const { id, name, pallete } = params as RouteParams;
  const { goBack } = useNavigation();
  const imageUri = useUriPokemonImage(id);
  const theme = useTheme();

  const containerColor =
    pallete.primary === theme?.COLORS?.WHITE_100
      ? pallete.support
      : pallete.primary;

  return (
    <Container backgroundColor={containerColor}>
      <ImageBackground source={imageBackground} />

      <Header>
        <BackButton activeOpacity={0.7} onPress={goBack}>
          <IconButton color={pallete.text} />
        </BackButton>

        <ActiveArea>
          <Title textColor={pallete.text}>{capitalize(name)}</Title>
          <Id textColor={pallete.text}>#00{id}</Id>
        </ActiveArea>

        <TypeArea>
          {!!types.length &&
            types.map((item, index) => (
              <Piece key={`${item}_${index}`} item={item} pallete={pallete} />
            ))}
        </TypeArea>
      </Header>

      <Content>
        <Image resizeMode="contain" source={{ uri: imageUri }} />
      </Content>
    </Container>
  );
}
