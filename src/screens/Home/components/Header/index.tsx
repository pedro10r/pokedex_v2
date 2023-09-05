import { SafeAreaView } from "react-native";

import logo from "@assets/logo.png";
import imageBackground from "@assets/background.png";

import { words } from "./words";
import { Container, Logo, ImageBackground, Title } from "./styles";

export function Header() {
  return (
    <Container>
      <SafeAreaView />
      <ImageBackground source={imageBackground} />
      <Logo source={logo} />
      <Title>{words.title}</Title>
    </Container>
  );
}
