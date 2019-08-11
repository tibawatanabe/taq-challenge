import { request } from './graphql-client';

const query = /* GraphQL */`
  query Pokemon($id: String!, $name: String) {
    pokemon(id: $id, name: $name) {
      id,
      name,
      image,
      classification,
      types,
      resistant,
      weaknesses,
      fleeRate,
      maxCP,
      maxHP,
      evolutions {
        id, name, image, number, types
      }
    }
  }
`;

interface PokemonQuery {
  pokemon: Pokemon;
}

export interface PokemonSummary {
  id: string;
  name: string;
  number: string;
  image: string;
  types: string[];
}

export interface Pokemon {
  id: string;
  name: string;
  number: string;
  image: string;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: [];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  evolutions: PokemonSummary[];
}

export async function fetchQuery(id: string, name: string): Promise<Pokemon> {
  const { pokemon } = await request<PokemonQuery>(query, { id, name });
  return pokemon;
}