import React from 'react';
import { Film } from '../../types/film';

type DetailsProps = {
  filmData: Film;
}

export default function Details({filmData} : DetailsProps) {
  const { director, starring, runTime, genre, released } = filmData;
  const formatTime = runTime % 60 !== 0 ? `${Math.floor(runTime / 60)}h ${runTime % 60}m` : `${runTime}m`;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {starring.map((star, i, arr) => i !== arr.length - 1 ? (<React.Fragment key={`star-${i + 1}`}>{star}, <br/></React.Fragment>) : star)}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{formatTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}
