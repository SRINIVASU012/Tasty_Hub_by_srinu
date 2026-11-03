
import { useNavigate } from "react-router-dom";
import "./herosection.css";

export default function HeroSection() {

  var navigate = useNavigate();

  return (
    <div className="tasty-hero">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6 hero-content">

            <span className="hero-tag">
              Welcome to TastyHub
            </span>

            <h1>
              Good Food,<br />
              <span>Good Mood!</span>
            </h1>

            <p>
              Discover delicious food and order your
              favourite meals with TastyHub.
              Fresh taste, amazing flavours and happy moments!
            </p>

            <button
              className="hero-btn"
              onClick={() => navigate("/user/products")}
            >
              Explore Foods →
            </button>

          </div>

          <div className="col-md-6 text-center">

            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
              className="hero-image"
              alt="Delicious pizza"
            />

          </div>

        </div>
      </div>
    </div>
  );
}
