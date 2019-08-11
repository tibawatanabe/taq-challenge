import React, { useState, useEffect } from 'react';
import { listQuery, PokemonSummary } from '../../data/pokemon-list.query';
import { PokemonItemComponent } from './pokemon-item.component';

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
        <PokemonItemComponent
          {...pokemon}
          key={pokemon.id}
        />
      ))}
    </>
  );
}