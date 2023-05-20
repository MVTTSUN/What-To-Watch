import { Review } from '../../types/review';
import ReviewCard from '../review-card/review-card';

type ReviewsProps = {
  filmReviewsData: Review[];
}

export default function Reviews({filmReviewsData} : ReviewsProps) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {filmReviewsData.map((review, i) => i % 2 === 0 ? <ReviewCard key={`review-${i + 1}`} reviewData={review} /> : '')}
      </div>

      <div className="film-card__reviews-col">
        {filmReviewsData.map((review, i) => i % 2 !== 0 ? <ReviewCard key={`review-${i + 1}`} reviewData={review} /> : '')}
      </div>
    </div>
  );
}
