import { ApolloProvider } from "@apollo/client";
import { Routes } from "./src/routes";
import { client } from "./src/services/client";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}
