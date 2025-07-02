import '../styles/components/Navbar.css';
import { Link } from 'react-router-dom';

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
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="goChopCart">
          <h4>Cart Logo</h4>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
