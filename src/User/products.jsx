import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./products.css";

export default function Products() {
  const products = useSelector((state) => state.product.products);
  const navigate = useNavigate();

  return (
    <div className="tasty-products-page">
      <div className="container py-5">
        <div className="tasty-products-heading">
          <h2>
            Our <span>Delicious Foods</span>
          </h2>
          <p>Explore our menu and choose your favourite food</p>
        </div>

        <div className="row g-4 tasty-products-grid">
          {products.map((item) => (
            <div className="col-12 col-sm-6 col-lg-3" key={item.id}>
              <div className="tasty-product-card">
                <div className="tasty-product-image">
                  <img src={item.image} alt={item.name} />
                  <span>{item.category}</span>
                </div>

                <div className="tasty-product-body">
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>

                  <div className="tasty-product-info">
                    <h5>₹{item.price}</h5>
                    <span>⭐ {item.rating}</span>
                  </div>

                  <button
                    onClick={() => navigate(`/user/productdetails/${item.id}`)}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
