import {Link, useNavigate, useParams } from 'react-router-dom';
import ButtonListFalse from '../../components/button-list-false/button-list-false';
import Footer from '../../components/footer/footer';
import Info from '../../components/info/info';
import { Film } from '../../types/film';
import FilmsList from '../../components/films-list/films-list';
import { reviews } from '../../mocks/reviews';
// import SmallFilmCard from '../../components/small-film-card/small-film-card';

type MoviePageScreenProps = {
  filmsData: Film[];
};

export default function MoviePageScreen({ filmsData } : MoviePageScreenProps) {
  const { id } = useParams() as { id: string };
  const filmData = filmsData.find((film) => film.id === parseInt(id, 10)) as Film;
  const { name, genre, released, posterImage } = filmData;
  const navigate = useNavigate();
  const filmReviewsData = reviews.filter((review) => review.id === parseInt(id, 10));

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => navigate(`/player/${id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <ButtonListFalse />
                <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <Info filmData={filmData} filmReviewsData={filmReviewsData} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList filmsInfo={filmsData} />
        </section>

        <Footer />
      </div>
    </>
  );
}
