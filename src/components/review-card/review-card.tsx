import { Review } from '../../types/review';

type ReviewCardProps = {
  reviewData: Review;
};

export default function ReviewCard({reviewData} : ReviewCardProps) {
  const { comment, user, rating, date } = reviewData;
  const dateReview = new Date(date);
  const dateReviewConfig: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time
            className="review__date"
            dateTime={`${dateReview.getFullYear()}-${dateReview.toLocaleDateString('en-US', {month: '2-digit'})}-${dateReview.getDate()}`}
          >
            {dateReview.toLocaleDateString('en-US', dateReviewConfig)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.toString().split('.').join(',')}</div>
    </div>
  );
}
