
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getcartbyuser } from "../store/cartslice";
import "./Udash.css";

export default function Udash() {
  const navigate = useNavigate();
  var dispatch = useDispatch();

  var username = localStorage.getItem("userlogin");

  var selector = useSelector((state) => state.cart.mycard);

  useEffect(() => {
    dispatch(getcartbyuser(username));
  }, [dispatch, username]);

  var cartcount = selector.reduce(
    (total, obj) => total + obj.quantity,
    0
  );

  const remove = () => {
    localStorage.removeItem("userlogin");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg tasty-navbar">
        <div className="container-fluid px-4">

          <Link className="navbar-brand tasty-brand" to="/user/home">
            🍔 Tasty<span>Hub</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#tastyMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="tastyMenu">
            <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

              <NavLink className="tasty-link" to="/user/home">
                Home
              </NavLink>

              <NavLink className="tasty-link" to="/user/products">
                Products
              </NavLink>

              <NavLink className="tasty-link" to="/user/cart">
                🛒 Cart
                <span className="cart-count"> {cartcount}</span>
              </NavLink>

              <NavLink className="tasty-link" to="/user/wishlist">
                ❤️ Wishlist
              </NavLink>

              <NavLink className="tasty-link" to="/user/order">
                Orders
              </NavLink>

              <button className="logout-btn" onClick={remove}>
                Logout ↗
              </button>

            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
