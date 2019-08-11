import React from 'react';

interface PokemonComponentProps {
  name: string;
  number: string;
  image: string;
  classification: string;
  types: string[];
  maxCP: number;
  maxHP: number;
  fleeRate: number;
}

export const PokemonComponent: React.FC<PokemonComponentProps> = (props) => {
  const { name, number, image, classification, types, maxCP, maxHP, fleeRate } = props;

  return (
    <>
      <h1>{ name }</h1>
      <h2>{ number }</h2>
      <p>{ classification }</p>
      {types.map(type => (<span key={type}>{ type }</span>))}
      <dl>
        <dt>Max HP</dt>
        <dd>{ maxHP }</dd>
        <dt>Max CP</dt>
        <dd>{ maxCP }</dd>
        <dt>Flee Rate</dt>
        <dd>{ fleeRate }</dd>
      </dl>
      <img src={image} alt={name} />
    </>
  );
}