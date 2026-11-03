import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Udash from "./User/Udash";
import Home from "./User/Home";
import Adash from "./Admin/Adash";
import Viewproduct from "./Admin/Viewproduct";
import Products from "./User/products";
import ProductDetails from "./User/productdetails";
import Cart from "./User/cart";
import Wishlist from "./User/wishlist";
import Orders from "./User/order";
import Addproduct from "./Admin/Addproduct";
import Updateproduct from "./Admin/updateproduct";
import Vieworders from "./Admin/Vieworders";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/admin" element={<Adash></Adash>}>
            <Route
              path="viewproducts"
              element={<Viewproduct></Viewproduct>}
            ></Route>
            <Route path="addproduct" element={<Addproduct></Addproduct>}></Route>
            <Route path="updateproduct/:id" element={<Updateproduct></Updateproduct>}></Route>
            <Route path="vieworders" element={<Vieworders></Vieworders>}></Route>
          </Route>
          <Route path="/user" element={<Udash></Udash>}>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="products" element={<Products></Products>}></Route>
            <Route
              path="productdetails/:id"
              element={<ProductDetails></ProductDetails>}
            ></Route>
            <Route path="cart" element={<Cart></Cart>}></Route>
            <Route path="wishlist" element={<Wishlist></Wishlist>}></Route>
            <Route path="order" element={<Orders></Orders>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
