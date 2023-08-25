import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";

import { Routes } from "./src/routes";

import { client } from "./src/services/client";
import { theme } from "./src/styles/themes/default";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </ApolloProvider>
  );
}
