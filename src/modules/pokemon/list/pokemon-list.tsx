import React, { useState, useEffect } from 'react';
import { listQuery, PokemonSummary } from '../../../data/pokemon-list.query';
import { PokemonItemComponent } from './pokemon-item.component';
import { Link } from 'react-router-dom';
import * as PokemonDetail from '../detail';

export const PokemonList: React.FC = () => {
  const [ loading, setLoading ] = useState(true);
  const [ pokemons, setPokemons ] = useState<PokemonSummary[]>([]);
  const [ error, setError ] = useState<Error | undefined>(undefined);

  useEffect(() => {
    listQuery(50)
      .then(setPokemons)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (<>Loading...</>);
  }

  if (error) {
    return(<>{error!.message || 'Oops, something went wrong'}</>);
  }

  return (
    <>
      {pokemons.map(pokemon => (
        <Link key={pokemon.id} to={PokemonDetail.path(pokemon.name, pokemon.id)}>
          <PokemonItemComponent {...pokemon} />
        </Link>
      ))}
    </>
  );
}