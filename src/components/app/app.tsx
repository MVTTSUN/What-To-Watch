import MainScreen from '../../pages/main-screen/main-screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import Code404Screen from '../../pages/code-404-screen/code-404-screen';
import { Film } from '../../types/film';

type AppProps = {
  infoFilmCard: {
    title: string;
    genre: string;
    year: number;
  };
  filmsData: Film[];
};

function App({infoFilmCard, filmsData} : AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainScreen infoFilmCard={infoFilmCard} filmsData={filmsData} />} />
          <Route path='/login' element={<SignInScreen />} />
          <Route path='/mylist' element={<MyListScreen filmsData={filmsData} />} />
          <Route path='/films/:id'>
            <Route index element={<MoviePageScreen filmsData={filmsData} />} />
            <Route path='/films/:id/review' element={<AddReviewScreen />} />
          </Route>
          <Route path='/player/:id' element={<PlayerScreen filmsData={filmsData} />} />
        </Route>
        <Route path='*' element={<Code404Screen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
