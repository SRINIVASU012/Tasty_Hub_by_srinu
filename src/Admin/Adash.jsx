
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./Adash.css";

export default function Adash() {

    var location = useLocation();
    var navigate = useNavigate();

    var logout = () => {
        localStorage.removeItem("adminlogin");
        navigate("/");
    };

    return (
        <>
            <nav className="admin-navbar">
                <div className="admin-logo">
                    Tasty<span>Hub</span>
                    <small> Admin</small>
                </div>

                <ul className="admin-menu">
                    <li>
                        <Link className={location.pathname === "/admin/viewproducts" ? "active" : ""}
                            to="/admin/viewproducts">
                            View Products
                        </Link>
                    </li>

                    <li>
                        <Link className={location.pathname === "/admin/addproduct" ? "active" : ""}
                            to="/admin/addproduct">
                            Add Product
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/vieworders"
                            className={location.pathname === "/admin/vieworders" ? "active" : ""}>
                            View Orders
                        </Link>
                    </li>

                    <li>
                        <button onClick={logout} className="admin-logout">
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>

            <div className="admin-content">
                <Outlet />
            </div>
        </>
    );
}
