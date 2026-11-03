import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteproduct } from "../store/productslice";
import "./Viewproduct.css";
export default function Viewproduct() {
  var selector = useSelector((state) => state.product.products);
  var navigate = useNavigate();
  var dispatch=useDispatch();
  return (
    <>
     
<div className="container-fluid admin-products">

    <h2 className="admin-page-title">Manage Products</h2>
    <p className="admin-page-subtitle">View, edit and delete your food products</p>

    <div className="row g-4">

        {selector.map((obj) => (
            <div className="col-md-6 col-lg-4" key={obj.id}>

                <div className="admin-product-card">

                    <img src={obj.image} alt={obj.name} />

                    <div className="admin-product-body">

                        <h5>{obj.name}</h5>

                        <p className="admin-category">{obj.category}</p>

                        <h4>₹{obj.price}</h4>

                        <p>⭐ {obj.rating}</p>

                        <p className="admin-description">
                            {obj.description}
                        </p>

                        <div className="admin-product-actions">

                            <button
                                className="edit-btn"
                                onClick={() => navigate(`/admin/updateproduct/${obj.id}`)}
                            >
                                Edit
                            </button>

                            <button
                                className="delete-btn"
                                onClick={() => {
                                    if (window.confirm("Are you sure you want to delete this product?")) {
                                        dispatch(deleteproduct(obj.id));
                                    }
                                }}
                            >
                                Delete
                            </button>

                        </div>

                    </div>
                </div>

            </div>
        ))}

    </div>

    {selector.length === 0 && (
        <h5 className="text-center mt-5">No Products Available</h5>
    )}

</div>

    </>
  );
}
