
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  removefromwishlist,
  getwishlistbyuser
} from "../store/wishlistslice";
import { addtocart } from "../store/cartslice";
import "./wishlist.css";

export default function Wishlist() {
  var dispatch = useDispatch();
  var navigate = useNavigate();

  var username = localStorage.getItem("userlogin");

  var mywishlist = useSelector(
    (state) => state.wishlist.mywishlist
  );

  useEffect(() => {
    dispatch(getwishlistbyuser(username));
  }, [dispatch, username]);

  var removewishlist = (obj) => {
    dispatch(removefromwishlist(obj));
  };

  var handlecart = (obj) => {
    var cartobj = {
      ...obj,
      username: username,
      quantity: 1
    };

    dispatch(addtocart(cartobj));
    navigate("/user/cart");
  };

  return (
    <div className="tasty-wishlist-page">
      <div className="container py-5">

        <div className="wishlist-heading">
          <h2>My <span>Wishlist</span> ❤️</h2>
          <p>Your favourite foods, all in one place</p>
        </div>

        {mywishlist.length === 0 ? (
          <div className="wishlist-empty">
            <div className="wishlist-empty-icon">❤️</div>
            <h3>Your Wishlist is Empty!</h3>
            <p>Save your favourite foods here and order them anytime.</p>

            <button onClick={() => navigate("/user/products")}>
              Explore Foods →
            </button>
          </div>
        ) : (
          <div className="row g-4">
            {mywishlist.map((obj) => (
              <div className="col-12 col-sm-6 col-lg-4" key={obj.id}>
                <div className="wishlist-card">

                  <div className="wishlist-image">
                    <img src={obj.image} alt={obj.name} />
                    <span>❤️ Wishlist</span>
                  </div>

                  <div className="wishlist-card-body">
                    <h5>{obj.name}</h5>

                    <p>{obj.category}</p>

                    <div className="wishlist-price">
                      <h5>₹{obj.price}</h5>
                      <span>⭐ {obj.rating}</span>
                    </div>

                    <div className="wishlist-buttons">
                      <button
                        className="wishlist-cart-btn"
                        onClick={() => handlecart(obj)}
                      >
                        🛒 Add to Cart
                      </button>

                      <button
                        className="wishlist-remove-btn"
                        onClick={() => removewishlist(obj)}
                      >
                        Remove
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
