import { SafeAreaView, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { Piece } from "@components/Piece";

import { ColorPalette } from "@hooks/usePokemonColor/types";
import { useUriPokemonImage } from "@hooks/useUriPokemonImage";
import { PokemonType } from "@services/pokemon";
import { capitalize } from "@utils/capitalize";
import imageBackground from "@assets/background_white.png";

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
import { useEffect } from "react";
import usePokemonDetails from "@services/pokemon/hooks/usePokemonDetails";

type RouteParams = {
  id: number;
  name: string;
  palette: ColorPalette;
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
  const { id, name, palette } = params as RouteParams;
  const { goBack } = useNavigation();
  const imageUri = useUriPokemonImage(id);
  const theme = useTheme();

  const containerColor =
    palette.primary === theme?.COLORS?.WHITE_100
      ? palette.support
      : palette.primary;

  const [fetchPokemonDetails, { data }] = usePokemonDetails(id);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    <Container backgroundColor={containerColor}>
      <SafeAreaView />
      <StatusBar translucent barStyle="light-content" />
      <ImageBackground source={imageBackground} />

      <Header>
        <BackButton activeOpacity={0.7} onPress={goBack}>
          <IconButton color={palette.text} />
        </BackButton>

        <ActiveArea>
          <Title textColor={palette.text}>{capitalize(name)}</Title>
          <Id textColor={palette.text}>#00{id}</Id>
        </ActiveArea>

        <TypeArea>
          {!!types.length &&
            types.map((item, index) => (
              <Piece key={`${item}_${index}`} item={item} palette={palette} />
            ))}
        </TypeArea>
      </Header>

      <Content>
        <Image resizeMode="contain" source={{ uri: imageUri }} />
      </Content>
    </Container>
  );
}
