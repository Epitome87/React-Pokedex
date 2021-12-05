import React from 'react';
import { useTitle } from '../hooks/useTitle';
import styles from './HomePage.module.css';

function HomePage() {
  useTitle('MattDex - HomePage');

  return (
    <main className={styles.HomePage}>
      <section className={styles.HomePage__Hero}>
        <header className={styles.HomePage__Header}>
          <h1>MattDex</h1>
          <h2>Comprehensive & Beautiful Pokemon Go Collection Tracker</h2>
        </header>
        <img
          src='https://cdn.shopify.com/s/files/1/1775/7943/products/Pokemon.Pikachu_1024x1024.jpg?v=1524306038'
          alt='Pikachu'
          className={styles.HomePage__Illustration}
        ></img>
      </section>

      {/* <div className={styles.test}>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            class='shape-fill'
          ></path>
        </svg>
      </div> */}

      <section className={styles.Collection}>
        {/* <div className={styles.test2}>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              class='shape-fill'
            ></path>
          </svg>
        </div> */}
        <header className={styles.Header}>Collections</header>
        <div className={styles.Collection__Items}>
          <article className={styles.Collection__Perfects}>
            <header>Perfects</header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              inventore?
            </p>
          </article>
          <article className={styles.Collection__Luckies}>
            <header>Luckies</header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              inventore?
            </p>
          </article>

          <article className={styles.Collection__Shinies}>
            <header>Shinies</header>
            <p>See how bright you shine by keeping tabs on all your Shinies</p>
          </article>
        </div>
      </section>

      <section className={styles.Leaderboards}>
        <header className={styles.Header}>Leaderboards!</header>
        <div className={styles.LeaderBoards__Items}>
          <article className={styles.Leaderboards__Global}>
            <header>Global Rank</header>
            <p>See how you rank against the top players in the world!</p>
          </article>
          <article className={styles.Leaderboards__Friends}>
            <header>Compete vs Friends</header>
            See how you compare against all your friends!
          </article>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
