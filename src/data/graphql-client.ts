import { GraphQLClient } from 'graphql-request';

let client: GraphQLClient;

export function config(url: string) {
  client = new GraphQLClient(url);
}

export function request<T>(query: string, variables?: { [key: string]: any }): Promise<T> {
  if (client === undefined) {
    throw new Error('GraphQL client was not configured.');
  }

  return client.request<T>(query, variables);
}
