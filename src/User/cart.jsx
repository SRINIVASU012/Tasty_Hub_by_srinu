
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getcartbyuser, removefromcart } from "../store/cartslice";
import { addtoorder } from "../store/orderslice";
import "./cart.css";

export default function Cart() {
  var selector = useSelector((state) => state.cart.mycard);
  var dispatch = useDispatch();
  var navigate = useNavigate();

  var username = localStorage.getItem("userlogin");

  var [dummy, setdummy] = useState(null);
  var [phones, setphone] = useState("");
  var [emails, setemail] = useState("");
  var [addresss, setaddress] = useState("");

  useEffect(() => {
    dispatch(getcartbyuser(username));
  }, [dispatch, username]);

  var total = selector.reduce(
    (sum, obj) => sum + obj.price * obj.quantity,
    0
  );

  function placeorder() {
    if (!phones || !emails || !addresss) {
      alert("Please fill all details");
      return;
    }

    var obj = {
      ...dummy,
      orderid: Date.now(),
      username: username,
      phone: phones,
      email: emails,
      address: addresss,
      orderdate: new Date().toLocaleDateString(),
      orderstatus: "Order Placed",
    };

    dispatch(addtoorder(obj));
    dispatch(removefromcart({ id: dummy.id, username: username }));

    setdummy(null);
    setphone("");
    setemail("");
    setaddress("");

    var modalElement = document.getElementById("ordermodal");
    var modal = window.bootstrap.Modal.getInstance(modalElement);

    if (modal) {
      modal.hide();
    }

    setTimeout(() => {
      navigate("/user/order");
    }, 300);
  }

  return (
    <>
      <div className="tasty-cart-page">
        <div className="container py-5">

          <div className="tasty-cart-heading">
            <h2>My <span>Cart</span></h2>
            <p>Review your favourite foods before ordering</p>
          </div>

          {selector.length === 0 ? (
            <div className="tasty-empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <h3>Your Cart is Empty!</h3>
              <p>Looks like you haven't added any delicious food yet.</p>

              <button
                onClick={() => navigate("/user/products")}
              >
                Explore Foods →
              </button>
            </div>
          ) : (
            <>
              <div className="row g-4">
                {selector.map((obj) => (
                  <div className="col-12 col-md-6 col-lg-4" key={obj.id}>
                    <div className="tasty-cart-card">

                      <div className="tasty-cart-image">
                        <img src={obj.image} alt={obj.name} />
                      </div>

                      <div className="tasty-cart-body">
                        <h5>{obj.name}</h5>

                        <p className="cart-category">
                          {obj.category}
                        </p>

                        <div className="cart-price-row">
                          <span>Price</span>
                          <strong>₹{obj.price}</strong>
                        </div>

                        <div className="cart-price-row">
                          <span>Quantity</span>
                          <strong>{obj.quantity}</strong>
                        </div>

                        <div className="cart-subtotal">
                          <span>Subtotal</span>
                          <h5>
                            ₹{obj.price * obj.quantity}
                          </h5>
                        </div>

                        <div className="cart-buttons">
                          <button
                            className="cart-buy-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#ordermodal"
                            onClick={() => setdummy(obj)}
                          >
                            Buy Now
                          </button>

                          <button
                            className="cart-remove-btn"
                            onClick={() =>
                              dispatch(
                                removefromcart({
                                  id: obj.id,
                                  username: username,
                                })
                              )
                            }
                          >
                            Remove
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="tasty-cart-total">
                <div>
                  <p>Total Amount</p>
                  <h2>₹{total}</h2>
                </div>

                <button
                  onClick={() => navigate("/user/products")}
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}

        </div>
      </div>

      {/* Delivery Details Modal */}
      <div
        className="modal fade"
        id="ordermodal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content tasty-order-modal">

            <div className="modal-header">
              <h5 className="modal-title">
                Delivery Details
              </h5>

              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              {dummy && (
                <>
                  <h6 className="modal-product-name">
                    Product: {dummy.name}
                  </h6>

                  <div className="mb-3">
                    <label className="form-label">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      className="form-control tasty-modal-input"
                      value={phones}
                      onChange={(e) => setphone(e.target.value)}
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>

                    <input
                      type="email"
                      className="form-control tasty-modal-input"
                      value={emails}
                      onChange={(e) => setemail(e.target.value)}
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Delivery Address
                    </label>

                    <textarea
                      className="form-control tasty-modal-input"
                      rows="3"
                      value={addresss}
                      onChange={(e) => setaddress(e.target.value)}
                      placeholder="Enter delivery address"
                    ></textarea>
                  </div>
                </>
              )}
            </div>

            <div className="modal-footer">
              <button
                className="cart-modal-close"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                className="cart-modal-order"
                onClick={placeorder}
                disabled={!dummy}
              >
                Place Order
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
