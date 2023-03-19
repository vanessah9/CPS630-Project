import checkLogin from "@/auth/checkLogin";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Reviews() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkLogin(navigate, location.pathname);
  }, [navigate, location.pathname]);
  return (
    <div className="reviews">
      <h1 className="reviews-title">Reviews</h1>
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
