import { useState } from "react";

interface Review {
  rating: number;
  reviewText: string;
}

interface ReviewFormProps {
  reviews: Review[];
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
}
const ReviewForm = ({ reviews, setReviews }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a new review object with the rating and review text
    const newReview = {
      rating,
      reviewText: review,
    };

    // Add the new review to the reviews array in the parent component's state
    setReviews([...reviews, newReview]);

    // Reset the form
    setRating(0);
    setReview("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          min="0"
          max="5"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
