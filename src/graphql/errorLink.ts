import { onError } from "@apollo/client/link/error";

// Log any GraphQL errors or network error that occurred
export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (networkError) {
    const error = `[Network error]: ${networkError}`;
    console.log(error);
    // Bugsnag.notify(error);
  }

  if (graphQLErrors)
    for (const err of graphQLErrors) {
      const { message, locations, path } = err;

      const error = `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`;
      console.log(error);
      // Bugsnag.notify(error);
    }
});
