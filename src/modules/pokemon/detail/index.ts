import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export const path = (name: string = ':name', id: string = ':id') => `/pokemon/${name}/${id}`;
export const Component = React.lazy<React.ComponentType<RouteComponentProps<{ id: string, name: string }>>>(() =>
  import('./pokemon-detail').then(m => ({ default: m.PokemonDetail }))
);
