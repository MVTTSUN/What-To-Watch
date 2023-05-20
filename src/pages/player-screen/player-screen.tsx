import { useNavigate, useParams } from 'react-router-dom';
import ButtonPlay from '../../components/button-play/button-play';
import { Film } from '../../types/film';

type PlayerScreenProps = {
  filmsData: Film[];
};

export default function PlayerScreen({ filmsData } : PlayerScreenProps) {
  const { id } = useParams() as { id: string };
  const filmData = filmsData.find((film) => film.id === parseInt(id, 10)) as Film;
  const { name, runTime } = filmData;
  const navigate = useNavigate();

  return (
    <div className="player">
      <video src="#" className="player__video" poster="img/player-poster.jpg"></video>

      <button
        type="button"
        className="player__exit"
        onClick={() => navigate(`/films/${id}`)}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{runTime}</div>
        </div>

        <div className="player__controls-row">
          <ButtonPlay />
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
