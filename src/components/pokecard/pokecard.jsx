import React from 'react';
import './pokecard.scss';

const POKE_API = 'https://pokeapi.co/api/v2/pokemon/';
const API_IMG =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const Pokecard = ({ id, name, type, exp }) => {
  let imgSRC = `${API_IMG}${id}.png`;

  return (
    <div className="pokecard" id={id}>
      <h1 className="name">{name}</h1>
      <img className="image" src={imgSRC} alt="A pokemon" />
      <h2 className="type">Type: {type}</h2>
      <h2 className="exp">EXP: {exp}</h2>
    </div>
  );
};

export default Pokecard;
