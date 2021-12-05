import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../components/Pagination';
import Pokedex from '../components/Pokedex';
import styles from './CollectionPage.module.css';

function CollectionPage(props) {
  const pokemonList = [
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Ivysaur' },
    { id: 3, name: 'Venusaur' },
    { id: 4, name: 'Squirtle' },
    { id: 5, name: 'Blastoise' },
    { id: 6, name: 'Wartortle' },
  ];

  const [pokemons, setPokemons] = useState(pokemonList);
  const [isLoaded, setIsLoaded] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(50);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const startTime = window.performance.now();

  useEffect(() => {
    // console.log('IN USE EFFECT');

    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    axios.get('./blankPokedex.json').then((response) => {
      console.log('Time to load JSON: ', window.performance.now() - startTime);
      // About 250ms on average
      setIsLoaded(false);
      console.log(response.data.Pokemon);
      const pokedex_JSON = response.data.Pokemon;
      setPokemons(pokedex_JSON);
      // setIsLoaded(true);
    });

    return function cleanup() {
      // Cleanup stuff
    };
  }, []);

  // Get current Pokemon list
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemons = pokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  // const [pokemons, setPokemons] = useState(pokemonList);

  return (
    <section className={styles.CollectionPage}>
      <h1>Collection Page</h1>
      <h2>Comprehensive & Beautiful Pokemon Go Collection Tracker</h2>
      <Pokedex pokemonList={currentPokemons} />
      <Pagination
        postsPerPage={pokemonPerPage}
        totalPosts={pokemons.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      {/* <div className='progress-bars'>
        <div style={{ width: 150, height: 150 }}>
          <CircularProgressbar value={66} text={`${100 * (66 / 100)}%`} />
        </div>
        <div style={{ width: 150, height: 150 }}>
          <CircularProgressbar value={66} text={`${100 * (66 / 100)}%`} />
        </div>
        <div style={{ width: 150, height: 150 }}>
          <CircularProgressbar value={66} text={`${100 * (66 / 100)}%`} />
        </div>
      </div> */}
    </section>
  );
}

export default CollectionPage;
