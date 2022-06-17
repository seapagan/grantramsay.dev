import React from "react";

import ReactDOM from "react-dom/client";

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

import { settings } from "./configure/settings";
import App from "./App";

import "./index.scss";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});
const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from settings.
  const token = process.env.REACT_APP_GITHUB_PAT;

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
