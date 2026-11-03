
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  orderbyusername,
  cancelorder
} from "../store/orderslice";
import "./order.css";

export default function Orders() {
  var dispatch = useDispatch();
  var navigate = useNavigate();

  var username = localStorage.getItem("userlogin");

  var selector = useSelector((state) => state.order.myorder);

  useEffect(() => {
    dispatch(orderbyusername(username));
  }, [dispatch, username]);

  var cancel = (obj) => {
    var confirmcancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (confirmcancel) {
      dispatch(
        cancelorder({
          orderid: obj.orderid,
          username: username,
        })
      );
    }
  };

  return (
    <div className="tasty-orders-page">
      <div className="container py-5">

        <div className="orders-heading">
          <h2>My <span>Orders</span></h2>
          <p>Track and manage your food orders</p>
        </div>

        {selector.length === 0 ? (
          <div className="orders-empty">
            <div className="orders-empty-icon">📦</div>
            <h3>No Orders Found!</h3>
            <p>You haven't placed any orders yet.</p>

            <button onClick={() => navigate("/user/products")}>
              Explore Foods →
            </button>
          </div>
        ) : (
          <div className="row g-4">
            {selector.map((obj, ind) => (
              <div className="col-12 col-lg-6" key={obj.orderid}>
                <div className="order-card">

                  <div className="order-card-header">
                    <div>
                      <span>Order #{ind + 1}</span>
                      <h5>{obj.name}</h5>
                    </div>

                    <span className="order-status">
                      {obj.orderstatus}
                    </span>
                  </div>

                  <div className="order-card-body">

                    <div className="order-detail-row">
                      <span>Order ID</span>
                      <strong>{obj.orderid}</strong>
                    </div>

                    <div className="order-detail-row">
                      <span>Price</span>
                      <strong>₹{obj.price}</strong>
                    </div>

                    <div className="order-detail-row">
                      <span>Quantity</span>
                      <strong>{obj.quantity}</strong>
                    </div>

                    <div className="order-detail-row">
                      <span>Phone</span>
                      <strong>{obj.phone}</strong>
                    </div>

                    <div className="order-detail-row">
                      <span>Email</span>
                      <strong>{obj.email}</strong>
                    </div>

                    <div className="order-address">
                      <span>Delivery Address</span>
                      <p>{obj.address}</p>
                    </div>

                    <div className="order-detail-row">
                      <span>Order Date</span>
                      <strong>{obj.orderdate}</strong>
                    </div>

                    <div className="order-total">
                      <span>Total Amount</span>
                      <h4>₹{obj.price * obj.quantity}</h4>
                    </div>

                    <button
                      className="order-cancel-btn"
                      onClick={() => cancel(obj)}
                    >
                      Cancel Order
                    </button>

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
