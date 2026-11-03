import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateproduct } from "../store/productslice";
import "./Updateproduct.css";

export default function Updateproduct() {
  var { id } = useParams();

  var selector = useSelector((state) => state.product.products);

  var dispatch = useDispatch();
  var navigate = useNavigate();

  var dummy = selector.find((obj) => obj.id == id);

  var [name, setname] = useState(dummy?.name || "");
  var [category, setcategory] = useState(dummy?.category || "");
  var [price, setprice] = useState(dummy?.price || "");
  var [rating, setrating] = useState(dummy?.rating || "");
  var [image, setimage] = useState(dummy?.image || "");
  var [description, setdescription] = useState(dummy?.description || "");

  function updatenow(e) {
    e.preventDefault();

    var obj = {
      id: Number(id),
      name: name,
      category: category,
      price: Number(price),
      rating: Number(rating),
      image: image,
      description: description,
    };

    dispatch(updateproduct(obj));

    alert("Product Updated Successfully!");

    navigate("/admin/viewproducts");
  }

  return (
    <>
     
<div className="update-product-container">

    <div className="update-product-card">

        <h2>Update Product</h2>
        <p>Edit your food product details</p>

        <form onSubmit={updatenow}>

            <label>Product Name</label>
            <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
            />

            <label>Category</label>
            <input
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                required
            />

            <label>Price</label>
            <input
                type="number"
                className="form-control"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                required
            />

            <label>Rating</label>
            <input
                type="number"
                className="form-control"
                value={rating}
                onChange={(e) => setrating(e.target.value)}
                min="0"
                max="5"
                step="0.1"
                required
            />

            <label>Image URL</label>
            <input
                type="text"
                className="form-control"
                value={image}
                onChange={(e) => setimage(e.target.value)}
                required
            />

            <label>Description</label>
            <textarea
                className="form-control"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                rows="3"
                required
            />

            <button type="submit" className="update-product-btn">
                Update Product
            </button>

        </form>

    </div>

</div>

    </>
  );
}
