import '../styles/components/Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="goChopLogo">
          <h4>Logo</h4>
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/productListing">Product</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="goChopCart">
          <FaShoppingCart className="cart-icon" />
        </div>
      </nav>
      <div className="promotional-banner">
        <p>Free delivery on orders over 500 CFA!</p>
      </div>
    </div>
  );
}

export default Navbar;
