
import { useNavigate } from "react-router-dom";
import "./offersection.css";

export default function OfferSection() {

  var navigate = useNavigate();

  return (
    <div className="container offer-container">

      <div className="offer-banner">

        <div className="row align-items-center">

          <div className="col-md-7 offer-content">

            <span className="offer-tag">
              LIMITED TIME OFFER
            </span>

            <h2>
              Special <span>Offer!</span>
            </h2>

            <h4>
              Get 20% OFF on your first order.
            </h4>

            <p>
              Enjoy your favourite meals at a special price.
              Delicious food is just one click away!
            </p>

            <button
              className="offer-btn"
              onClick={() => navigate("/user/products")}
            >
              Order Now →
            </button>

          </div>

          <div className="col-md-5 text-center">

            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500"
              alt="Special food offer"
              className="offer-image"
            />

          </div>

        </div>

      </div>

    </div>
  );
}
