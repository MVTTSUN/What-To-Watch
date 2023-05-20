import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';

const InfoFilmCard = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014
};

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      infoFilmCard={InfoFilmCard}
      filmsData={films}
    />
  </React.StrictMode>,
);
