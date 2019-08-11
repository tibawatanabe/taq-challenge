import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export const path = () => '/list';
export const Component = React.lazy<React.ComponentType<RouteComponentProps>>(() =>
  import('./pokemon-list').then(m => ({ default: m.PokemonList }))
);