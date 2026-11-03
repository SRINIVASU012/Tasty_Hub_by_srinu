
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./popular.css";

export default function PopularFoods() {

  const foods = useSelector(
    (state) => state.product.products
  );

  const navigate = useNavigate();

  return (
    <div className="popular-section">

      <div className="container">

        <h2 className="popular-title">
          Popular <span>Foods</span>
        </h2>

        <p className="popular-subtitle">
          Discover our most loved and delicious dishes
        </p>

        <div className="row g-4">

          {foods.slice(0, 4).map((item) => (

            <div className="col-12 col-sm-6 col-lg-3" key={item.id}>

              <div className="popular-card">

                <div className="popular-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="popular-card-body">

                  <span className="popular-category">
                    {item.category}
                  </span>

                  <h5>{item.name}</h5>

                  <p>{item.description}</p>

                  <div className="popular-rating">
                    ⭐ {item.rating || 4.5}
                  </div>

                  <div className="popular-bottom">

                    <h5>₹{item.price}</h5>

                    <button
                      onClick={() =>
                        navigate(`/user/productdetails/${item.id}`)
                      }
                    >
                      View Details
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
