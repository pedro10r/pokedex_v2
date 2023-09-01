import "react-native-reanimated";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Routes } from "./src/routes";

import { client } from "@services/client";
import { theme } from "@styles/themes/default";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>{fontsLoaded && <Routes />}</ThemeProvider>
    </ApolloProvider>
  );
}
