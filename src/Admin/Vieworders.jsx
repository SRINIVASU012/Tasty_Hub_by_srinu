import { useSelector } from "react-redux";
import "./Vieworders.css"
export default function Vieworders() {
  var selector = useSelector((state) => state.order.order);

  return (
    <>
      <div className="admin-orders-container">
        <h2 className="orders-title">Manage Customer Orders</h2>
        <p className="orders-subtitle">
          View all orders placed by your customers
        </p>

        {selector.length === 0 ? (
          <h4 className="text-center text-muted mt-5">No Orders Available</h4>
        ) : (
          <div className="row g-4">
            {selector.map((obj) => (
              <div className="col-md-6 col-xl-4" key={obj.orderid}>
                <div className="admin-order-card">
                  <div className="order-card-header">
                    <h5>{obj.name}</h5>
                    <span>#{obj.orderid}</span>
                  </div>

                  <div className="order-card-body">
                    <h6>Customer Information</h6>

                    <p>
                      <b>Username:</b> {obj.username}
                    </p>
                    <p>
                      <b>Phone:</b> {obj.phone}
                    </p>
                    <p>
                      <b>Email:</b> {obj.email}
                    </p>
                    <p>
                      <b>Address:</b> {obj.address}
                    </p>

                    <hr />

                    <h6>Order Information</h6>

                    <p>
                      <b>Price:</b> ₹{obj.price}
                    </p>
                    <p>
                      <b>Quantity:</b> {obj.quantity}
                    </p>
                    <p>
                      <b>Order Date:</b> {obj.orderdate}
                    </p>

                    <div className="order-total">
                      Total Amount: ₹{obj.price * obj.quantity}
                    </div>

                    <div className="order-status">
                      <b>Status:</b>
                      <span>{obj.orderstatus}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
