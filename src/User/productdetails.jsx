
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addtocart } from "../store/cartslice";
import { addtowishlist } from "../store/wishlistslice";
import "./productDetails.css";

export default function ProductDetails() {
  var { id } = useParams();

  var navigate = useNavigate();
  var dispatch = useDispatch();

  var selector = useSelector((state) => state.product.products);

  var detail = selector.find((obj) => obj.id == id);

  var handlecart = () => {
    var obj = {
      ...detail,
      username: localStorage.getItem("userlogin"),
      quantity: 1,
    };

    dispatch(addtocart(obj));
    navigate("/user/cart");
  };

  var handlewishlist = () => {
    var obj = {
      ...detail,
      username: localStorage.getItem("userlogin"),
    };

    dispatch(addtowishlist(obj));
    navigate("/user/wishlist");
  };

  if (!detail) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found!</h2>
        <button onClick={() => navigate("/user/products")}>
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="container py-5">

        <div className="details-card">
          <div className="row g-0 align-items-center">

            <div className="col-md-6">
              <div className="details-image">
                <img src={detail.image} alt={detail.name} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="details-content">

                <span className="details-category">
                  {detail.category}
                </span>

                <h2>{detail.name}</h2>

                <div className="details-rating">
                  ⭐ {detail.rating} / 5
                </div>

                <p className="details-description">
                  {detail.description}
                </p>

                <h3 className="details-price">
                  ₹{detail.price}
                </h3>

                <div className="details-buttons">

                  <button
                    className="details-cart-btn"
                    onClick={handlecart}
                  >
                    🛒 Add to Cart
                  </button>

                  <button
                    className="details-wishlist-btn"
                    onClick={handlewishlist}
                  >
                    ❤️ Add to Wishlist
                  </button>

                </div>

                <button
                  className="details-back-btn"
                  onClick={() => navigate("/user/products")}
                >
                  ← Back to Products
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
