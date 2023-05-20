import { Link } from 'react-router-dom';
import { useRef, MouseEvent } from 'react';

type TabsProps = {
  handleClickTab: (evt: MouseEvent, refTab: React.MutableRefObject<HTMLAnchorElement | null>) => void;
  activeTab: {
    isOverview: boolean;
    isDetails: boolean;
    isReviews: boolean;
  };
};

export default function Tabs({handleClickTab, activeTab} : TabsProps) {
  const refOverviewTab = useRef<HTMLAnchorElement | null>(null);
  const refDetailsTab = useRef<HTMLAnchorElement | null>(null);
  const refReviewsTab = useRef<HTMLAnchorElement | null>(null);
  // const [activeTab, setActiveTab] = useState({ isOverview: true, isDetails: false, isReviews: false });

  // const handleClickTab = (refTab: React.MutableRefObject<HTMLAnchorElement | null>) => {
  //   if (refTab.current) {
  //     switch(refTab.current.textContent) {
  //       case 'Overview':
  //         setActiveTab({ isOverview: true, isDetails: false, isReviews: false });
  //         break;
  //       case 'Details':
  //         setActiveTab({ isOverview: false, isDetails: true, isReviews: false });
  //         break;
  //       case 'Reviews':
  //         setActiveTab({ isOverview: false, isDetails: false, isReviews: true });
  //         break;
  //     }
  //   }
  // };

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${activeTab.isOverview ? 'film-nav__item--active' : ''}`}>
          <Link ref={refOverviewTab} to='' onClick={(evt) => handleClickTab(evt, refOverviewTab)} className="film-nav__link">Overview</Link>
        </li>
        <li className={`film-nav__item ${activeTab.isDetails ? 'film-nav__item--active' : ''}`}>
          <Link ref={refDetailsTab} to='' onClick={(evt) => handleClickTab(evt, refDetailsTab)} className="film-nav__link">Details</Link>
        </li>
        <li className={`film-nav__item ${activeTab.isReviews ? 'film-nav__item--active' : ''}`}>
          <Link ref={refReviewsTab} to='' onClick={(evt) => handleClickTab(evt, refReviewsTab)} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}
