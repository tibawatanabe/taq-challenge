import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import * as PokemonList from './pokemon/list';
import * as PokemonDetail from './pokemon/detail';

export const Routes: React.SFC = () => {
  return (
    <React.Suspense fallback={"Loading"}>
      <Switch>
        <Route path={PokemonList.path()} component={PokemonList.Component} />
        <Route path={PokemonDetail.path()} component={PokemonDetail.Component} />
        <Redirect exact path="/" to={PokemonList.path()} />
      </Switch>
    </React.Suspense>
  );
}