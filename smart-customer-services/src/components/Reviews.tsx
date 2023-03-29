import checkLogin from "@/auth/checkLogin";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import { getReviews } from "@/api/reviewApi";
import Review from "@/models/Review";

export default function Reviews() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      const result = await getReviews();
      setReviews(result.data);
    };
    fetchReviews();
  }, []);

  return (
    <div className="reviews">
      <h1 className="reviews-title">Reviews</h1>
      <div className="d-grid col-6 mx-auto">
        <button
          className="btn btn-primary reviews-btn"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add Review
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 reviews-item">
        {reviews.map((review, index) => (
          <div key={index} className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3">{review.ratingNumber}/5</h5>
                <blockquote className="blockquote mb-3">
                  <p>"{review.review}"</p>
                </blockquote>
                {review.services && (
                  <h6 className="card-subtitle mb-0">
                    Services Used: {review.services.join(", ")}
                  </h6>
                )}
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">By: Name</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <ReviewForm reviews={reviews} setReviews={setReviews} />
          </div>
        </div>
      )}
    </div>
  );
}
