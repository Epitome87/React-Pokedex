import React from 'react';
import styles from './Pokemon.module.css';

function Pokemon(props) {
  const { pokemon_name: name, pokemon_id: id } = props.pokemon;

  let perfectCheckedString;
  let luckyCheckedString;
  let shinyCheckedString;

  // `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
  const imageURL =
    // 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/1.png';
    `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${props.pokemon.pokemon_id}.png`;


  return (
    <div className={styles.Pokemon}>
      <div className={styles['Pokemon__card-face']}>
        <div className={styles['checkbox-container']}>
          <label className={styles['checkbox-label']}>
            <input type='checkbox' name='perfect-checkbox' />
            <span className={styles.checkmark}></span>
          </label>

          <label className={styles['checkbox-label']}>
            <input type='checkbox' name='lucky-checkbox' />
            <span className={styles.checkmark}></span>
          </label>

          <label className={styles['checkbox-label']}>
            <input type='checkbox' name='shiny-checkbox' />
            <span className={styles.checkmark}></span>
          </label>
        </div>

        <div className={styles.Pokemon__content}>
          <div className={styles['Pokemon__img-container']}>
            <img
              src={imageURL}
              alt={`Pokemon ${name}`}
            />
          </div>
          <div className={styles.Pokemon__info}>
            <span className={styles.Pokemon__info__number}>#{id}</span>
            <h3 className={styles.Pokemon__info__name}>{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
