import checkLogin from "@/auth/checkLogin";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReviewForm from "./ReviewForm";

interface Review {
  rating: number;
  reviewText: string;
}

export default function Reviews() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [showModal, setShowModal] = useState(false);

  // const [review, setReview] = useState("");
  // const [RN, setRN] = useState(0);

  // const handleSubmit = () => {
  //   // add post request here
  //   setRN(0);
  //   setReview("");
  // };

  return (
    <div className="reviews">
      <h1 className="reviews-title">Reviews</h1>
      <button onClick={() => setShowModal(true)}>Add Review</button>
      <ul>
        {reviews.map((review, index) => (
          <div key={index} className="reviews-item">
            <h2 className="reviews-item__title">Review {index + 1}</h2>
            <p className="reviews-item__text">Rating: {review.rating}</p>
            <p className="reviews-item__text">Review: {review.reviewText}</p>
          </div>
        ))}
      </ul>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <ReviewForm reviews={reviews} setReviews={setReviews}/>
            {/* <button onClick={handleSubmit}>Submit</button> */}
          </div>
        </div>
      )}
    </div>
  );
}
