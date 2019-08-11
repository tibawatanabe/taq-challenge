import React from 'react';


interface PokemonItemComponentProps {
  name: string;
  number: string;
  types: string[];
  image: string;
}

export const PokemonItemComponent: React.FC<PokemonItemComponentProps> = (props) => {
  const { name, number, image, types } = props;
  return (
    <div>
      <h3>{ name }</h3>
      <h4>#{ number }</h4>
      {types.map(type => <span key={type}>{ type }</span>)}
      <img src={image} alt={name}/>
    </div>
  );
}