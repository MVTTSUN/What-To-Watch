import { useState } from 'react';
import { Film } from '../../types/film';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmsListProps = {
  filmsInfo: Film[];
}

export default function FilmsList({ filmsInfo }: FilmsListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState<null | number>(null);

  const handleFilmMouseMove = (id: number) => setActiveFilm(id);
  const handleFilmMouseLeave = () => setActiveFilm(null);

  return (
    <div className="catalog__films-list">
      {filmsInfo.map((film) => (
        <SmallFilmCard
          key={film.id}
          {...film}
          onMouseMove={handleFilmMouseMove}
          onMouseLeave={handleFilmMouseLeave}
        />
      ))}
    </div>
  );
}
