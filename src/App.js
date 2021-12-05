import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Main Pages
import Page from './components/Page';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import CollectionPage from './pages/CollectionPage';
import ShowcasePage from './pages/ShowcasePage';

function App() {
  let isLoaded = true;
  return isLoaded ? (
    <div className='App'>
      <Navbar />
      <Page>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/collection' element={<CollectionPage />} />
          <Route path='/showcase' element={<ShowcasePage />} />
        </Routes>
      </Page>
    </div>
  ) : (
    <LoadingSpinner>
      <p>Catchin' Pokemon</p>
      {/* <img
        className='animated-pokeball'
        src='./pokeball.gif'
        alt='Pokeball being thrown'
      /> */}{' '}
      <img
        className='ui fluid image large'
        // src='https://gfycat.com/defenselesspoisedarizonaalligatorlizard'
        // src='https://thumbs.gfycat.com/DefenselessPoisedArizonaalligatorlizard-max-1mb.gif'
        // src='https://i.pinimg.com/originals/89/e2/fd/89e2fd10dfa913237e304b6e8d003f87.gif'
        src='https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif'
        alt='Pokeball being thrown'
      />
    </LoadingSpinner>
  );
}

export default App;
