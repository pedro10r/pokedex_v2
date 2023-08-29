import { SafeAreaView } from "react-native";
import { Container, Logo, ImageBackground } from "./styles";

import logo from "@assets/logo.png";
import imageBackground from "@assets/background.png";

export function Header() {
  return (
    <Container>
      <SafeAreaView />
      <ImageBackground source={imageBackground} />
      <Logo source={logo} />
    </Container>
  );
}
