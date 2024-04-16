import { Link, Outlet, useNavigate } from "react-router-dom";
import "../styles/navigation.css";
import { useState } from "react";

const Navigation = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    setMenuOpen(false);
  };

  const toggleMenu=() => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <nav className="navbar">
      <button className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span className="burger"></span>
                <span className="burger"></span>
                <span className="burger"></span>
      </button>
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/all-deliveries">All Deliveries</Link>
          </li>
          <li>
            <Link to="/my-deliveries">My Deliveries</Link>
          </li>
          <li>
            <Link to="/delivery-history">Delivery History</Link>
          </li>
          <li>
            <Link to="#" onClick={handleLogout}>
              {" "}
              Logout{" "}
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
