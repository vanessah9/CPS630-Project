import checkLogin from "@/auth/checkLogin";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Reviews() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);

  const [showModal, setShowModal] = useState(false);
  const [review, setReview] = useState("");
  const [RN, setRN] = useState("");

  const handleSubmit = () => {
    // add post request here
    setRN("");
    setReview("");
  };

  return (
    <div className="reviews">
      <h1 className="reviews-title">Reviews</h1>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <p>
              <h3>Rating (1-5)</h3>
              <input
                type="number"
                min="1"
                max="5"
                value={RN}
                onChange={(e) => setRN(e.target.value)}
              />

              <h3>Review</h3>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </p>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}

      <button onClick={() => setShowModal(true)}>Add Review</button>
      <div className="reviews-item">
        <h2 className="reviews-item__title">Review 1</h2>
        <p className="reviews-item__text">
          Nike Air Force 1 is a classic sneaker that has been around for over
          three decades. This iconic shoe was first introduced in 1982 and has
          since become a cultural icon. The Air Force 1 has been worn by
          basketball players, musicians, and fashion enthusiasts alike. It's a
          shoe that is beloved for its simple design and comfort. The design of
          the Nike Air Force 1 is minimalistic, featuring a white leather upper
          with a perforated toe box and a chunky midsole. The design has
          remained largely unchanged since its debut, and for good reason. The
          simplicity of the design makes it versatile and able to be worn with a
          variety of outfits. The shoe comes in various colors and materials,
          including suede and canvas. The Air Force 1 is known for its comfort.
          The midsole is thick and provides ample cushioning, making it a
          comfortable shoe for all-day wear. The perforated toe box allows for
        </p>
      </div>
      <div className="reviews-item">
        <h2 className="reviews-item__title">Review 2</h2>
        <p className="reviews-item__text">
          Nike Air Force 1 is a classic sneaker that has been around for over
          three decades. This iconic shoe was first introduced in 1982 and has
          since become a cultural icon. The Air Force 1 has been worn by
          basketball players, musicians, and fashion enthusiasts alike. It's a
          shoe that is beloved for its simple design and comfort. The design of
          the Nike Air Force 1 is minimalistic, featuring a white leather upper
          with a perforated toe box and a chunky midsole. The design has
          remained largely unchanged since its debut, and for good reason. The
          simplicity of the design makes it versatile and able to be worn with a
          variety of outfits. The shoe comes in various colors and materials,
          including suede and canvas. The Air Force 1 is known for its comfort.
          The midsole is thick and provides ample cushioning, making it a
          comfortable shoe for all-day wear. The perforated toe box allows for
          breathability, preventing your feet from getting too hot and sweaty.
        </p>
      </div>
      <div className="reviews-item">
        <h2 className="reviews-item__title">Review 3</h2>
        <p className="reviews-item__text">
          Nike Air Force 1 is a classic sneaker that has been around for over
          three decades. This iconic shoe was first introduced in 1982 and has
          since become a cultural icon. The Air Force 1 has been worn by
          basketball players, musicians, and fashion enthusiasts alike. It's a
          shoe that is beloved for its simple design and comfort. The design of
          the Nike Air Force 1 is minimalistic, featuring a white leather upper
          with a perforated toe box and a chunky midsole. The design has
          remained largely unchanged since its debut, and for good reason. The
          simplicity of the design makes it versatile and able to be worn with a
          variety of outfits. The shoe comes in various colors and materials,
          including suede and canvas. The Air Force 1 is known for its comfort.
          The midsole is thick and provides ample cushioning, making it a
          comfortable shoe for all-day wear. The perforated toe box allows for
          breathability, preventing your feet from getting too hot and sweaty.
        </p>
      </div>
      <div className="reviews-item">
        <h2 className="reviews-item__title">Review 4</h2>
        <p className="reviews-item__text">
          Nike Air Force 1 is a classic sneaker that has been around for over
          three decades. This iconic shoe was first introduced in 1982 and has
          since become a cultural icon. The Air Force 1 has been worn by
          basketball players, musicians, and fashion enthusiasts alike. It's a
          shoe that is beloved for its simple design and comfort. The design of
          the Nike Air Force 1 is minimalistic, featuring a white leather upper
          with a perforated toe box and a chunky midsole. The design has
          remained largely unchanged since its debut, and for good reason. The
          simplicity of the design makes it versatile and able to be worn with a
          variety of outfits. The shoe comes in various colors and materials,
          including suede and canvas. The Air Force 1 is known for its comfort.
          The midsole is thick and provides ample cushioning, making it a
          comfortable shoe for all-day wear. The perforated toe box allows for
        </p>
      </div>
    </div>
  );
}
