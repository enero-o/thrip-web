import type { PropsWithChildren } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";

import { errorLink } from "./errorLink";
import config from "@thrip/config";

const cache = new InMemoryCache({});

const httpLink = createHttpLink({
  uri: config.BASE_URL,
});

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache,
});

export function ApolloWrapper({ children }: PropsWithChildren) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
