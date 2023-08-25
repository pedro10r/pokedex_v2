import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Routes } from "./src/routes";

import { client } from "./src/services/client";
import { theme } from "./src/styles/themes/default";

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
