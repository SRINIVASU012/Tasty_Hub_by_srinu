import { useState } from "react";
import { useDispatch} from "react-redux";
import { addproduct } from "../store/productslice";
import { useNavigate } from "react-router-dom";
import "./Addproduct.css";
export default function Addproduct() {
  var dispatch = useDispatch();
  var navigate = useNavigate();


  var [name, setname] = useState("");
  var [category, setcategory] = useState("");
  var [price, setprice] = useState("");
  var [rating, setrating] = useState("");
  var [image, setimage] = useState("");
  var [description, setdescription] = useState("");

  function addnow(e) {
    e.preventDefault();

    var obj = {
      id: Date.now(),
      name: name,
      category: category,
      price: Number(price),
      rating: Number(rating),
      image: image,
      description: description,
    };

    dispatch(addproduct(obj));

    alert("Product added successfully!");

    setname("");
    setcategory("");
    setprice("");
    setrating("");
    setimage("");
    setdescription("");

    navigate("/admin/viewproducts");
  }

  return (
    <>
      
<div className="add-product-container">

    <div className="add-product-card">

        <h2>Add New Product</h2>
        <p>Enter the food product details below</p>

        <form onSubmit={addnow}>

            <label>Product Name</label>
            <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Enter product name"
                required
            />

            <label>Category</label>
            <input
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                placeholder="Enter category"
                required
            />

            <label>Price</label>
            <input
                type="number"
                className="form-control"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                placeholder="Enter price"
                required
            />

            <label>Rating</label>
            <input
                type="number"
                className="form-control"
                value={rating}
                onChange={(e) => setrating(e.target.value)}
                placeholder="Enter rating"
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
                placeholder="Paste image URL"
                required
            />

            <label>Description</label>
            <textarea
                className="form-control"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                placeholder="Enter product description"
                rows="3"
                required
            />

            <button type="submit" className="add-product-btn">
                Add Product
            </button>

        </form>

    </div>

</div>

    </>
  );
}
