import { useState, MouseEvent } from 'react';
import Overview from '../overview/overview';
import Tabs from '../tabs/tabs';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import { Film } from '../../types/film';
import { Review } from '../../types/review';

type InfoProps = {
  filmData: Film;
  filmReviewsData: Review[];
}

export default function Info({filmData, filmReviewsData} : InfoProps) {
  const [activeTab, setActiveTab] = useState({ isOverview: true, isDetails: false, isReviews: false });
  const [infoElement, setInfoElement] = useState(<Overview filmData={filmData} />);

  const handleClickTab = (evt: MouseEvent,refTab: React.MutableRefObject<HTMLAnchorElement | null>) => {
    evt.preventDefault();
    if (refTab.current) {
      switch(refTab.current.textContent) {
        case 'Overview':
          setInfoElement(<Overview filmData={filmData} />);
          setActiveTab({ isOverview: true, isDetails: false, isReviews: false });
          break;
        case 'Details':
          setInfoElement(<Details filmData={filmData} />);
          setActiveTab({ isOverview: false, isDetails: true, isReviews: false });
          break;
        case 'Reviews':
          setInfoElement(<Reviews filmReviewsData={filmReviewsData} />);
          setActiveTab({ isOverview: false, isDetails: false, isReviews: true });
          break;
      }
    }
  };

  return (
    <div className="film-card__desc">
      <Tabs handleClickTab={handleClickTab} activeTab={activeTab}/>

      {infoElement}
    </div>
  );
}
