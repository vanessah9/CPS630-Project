import Review from "@/models/Review";
import { useState } from "react";
import { postReview } from "@/api/reviewApi";

interface ReviewFormProps {
  reviews: Review[];
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
}
const ReviewForm = ({ reviews, setReviews }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [services, setServices] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newReview = {
      ratingNumber: rating,
      review: review,
      services: services,
    };

    postReview(newReview);
    setReviews([...reviews, newReview]);

    setRating(0);
    setReview("");
    setServices([]);
  };

  return (
    <div>
      <h1 className="modal-header fs-3 mb-0 mt-0">Add your review</h1>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h6>Please check the services you received:</h6>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                value="Online Shopping"
                id="flexCheckDefault"
                onChange={(e) => {
                  const { value, checked } = e.target as HTMLInputElement;
                  if (checked) {
                    setServices([...services, value]);
                  } else {
                    setServices(
                      services.filter((service) => service !== value)
                    );
                  }
                }}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Online Shopping
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                value="Delivery"
                id="flexCheckChecked"
                onChange={(e) => {
                  const { value, checked } = e.target as HTMLInputElement;
                  if (checked) {
                    setServices([...services, value]);
                  } else {
                    setServices(
                      services.filter((service) => service !== value)
                    );
                  }
                }}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Delivery
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                value="Past Orders"
                id="flexCheckChecked"
                onChange={(e) => {
                  const { value, checked } = e.target as HTMLInputElement;
                  if (checked) {
                    setServices([...services, value]);
                  } else {
                    setServices(
                      services.filter((service) => service !== value)
                    );
                  }
                }}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Past Orders
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="rating">
              <h6>Rating:</h6>
            </label>
            <input
              type="number"
              id="rating"
              className="form-control"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="reviewTextArea">
              <h6>Review: </h6>
            </label>
            <textarea
              className="form-control"
              id="reviewTextArea"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
