import { Link, Outlet, useNavigate } from "react-router-dom";
import "../styles/navigation.css";
import { useState } from "react"

const Navigation = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const toggleMenu=() => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false);
}

  return (
    <>
      <nav className="navbar">
      <button className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span className="burger"></span>
                <span className="burger"></span>
                <span className="burger"></span>
      </button>
      <ul className={`menu ${menuOpen ? "open" : "close"}`}>
          <li>
            <Link to="/profile" onClick={closeMenu}>Profile</Link>
          </li>
          <li>
            <Link to="/all-deliveries" onClick={closeMenu}>All Deliveries</Link>
          </li>
          <li>
            <Link to="/my-deliveries" onClick={closeMenu}>My Deliveries</Link>
          </li>
          <li>
            <Link to="/delivery-history" onClick={closeMenu}>Delivery History</Link>
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
