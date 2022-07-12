import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {
  FilmData,
} from './types/types';

const filmObject: FilmData = {
  id: 1,
  title: 'The Grand Budapest Hotel 1111111', // Изменено для проверки
  genre: 'Drama',
  year: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App filmObject={filmObject}/>
  </React.StrictMode>,
);
