import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

import { Pokemon, fetchQuery } from '../../../data/pokemon-fetch.query';

import { PokemonComponent } from './pokemon.component';
import { path } from './index';

export const PokemonDetail: React.FC<RouteComponentProps<{ id: string, name: string }>> = ({ match }) => {
  const [ loading, setLoading ] = useState(true);
  const [ pokemon, setPokemon ] = useState<Pokemon | undefined>(undefined);
  const [ error, setError ] = useState<Error | undefined>(undefined);

  useEffect(() => {
    fetchQuery(match.params.id, match.params.name)
      .then(setPokemon)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [match.params.id, match.params.name]);

  if (loading) {
    return (<>Loading...</>);
  }

  if (error || !pokemon) {
    return(<>{error!.message || 'Oops, something went wrong'}</>);
  }

  return (
    <>
      <PokemonComponent {...pokemon} />
      {pokemon.evolutions && pokemon.evolutions.map(evolution => (
        <Link to={path(evolution.name, evolution.id)}>
          <img src={evolution.image} alt={evolution.name} />
        </Link>
      ))}
    </>
  );
}