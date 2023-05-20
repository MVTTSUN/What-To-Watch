import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { useRef, useState } from 'react';
import Videoplayer from '../videoplayer/videoplayer';

type SmallFilmCardProps = Film & {
  onMouseMove: (id: number) => void;
  onMouseLeave: () => void;
};

export default function SmallFilmCard({ posterImage, name, id, onMouseMove, onMouseLeave, previewVideoLink }: SmallFilmCardProps) {
  const [showPreview, setShowPreview] = useState(false);
  const refSetTimeout = useRef<NodeJS.Timeout>();

  const onMouseMoveHandler = () => {
    onMouseMove(id);
    refSetTimeout.current = setTimeout(() => {
      setShowPreview(true);
    }, 1000);
  };

  const onMouseLeaveHandler = () => {
    onMouseLeave();
    clearTimeout(refSetTimeout.current as NodeJS.Timeout);
    setShowPreview(false);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onPointerEnter={onMouseMoveHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className="small-film-card__image">
        {showPreview
          ? <Videoplayer previewVideoLink={previewVideoLink} />
          : <img src={posterImage} alt={name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}
