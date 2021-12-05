import React, { Component } from 'react';
import styles from './Pokedex.module.css';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (!this.props.pokemonList) {
      return <p>No Pokemon Found</p>;
    }

    return (
      <div className={styles.Pokedex}>
        {this.props.pokemonList.map((pokemon) => (
          <Pokemon key={`poke${pokemon.pokemon_id}`} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}
export default Pokedex;
