import { request } from './graphql-client';

const query = /* GraphQL */`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      id,
      number,
      name,
      image,
      types
    }
  }
`;

interface PokemonsQuery {
  pokemons: PokemonSummary[];
}

export interface PokemonSummary {
  id: string;
  name: string;
  number: string;
  image: string;
  types: string[];
}

export async function listQuery(count: number): Promise<PokemonSummary[]> {
  const { pokemons } = await request<PokemonsQuery>(query, { first: count });

  return pokemons;
}