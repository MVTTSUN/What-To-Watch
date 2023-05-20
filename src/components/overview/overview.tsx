import { Film } from '../../types/film';

type OverviewProps = {
  filmData: Film;
}

export default function Overview({filmData} : OverviewProps) {
  const { rating, scoresCount, description, director, starring } = filmData;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating.toString().split('.').join(',')}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring.map((star, i, arr) => i !== arr.length - 1 ? `${star}, ` : star)}</strong></p>
      </div>
    </>
  );
}
