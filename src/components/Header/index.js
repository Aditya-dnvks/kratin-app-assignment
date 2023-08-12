import { Link, withRouter } from "react-router-dom";
import {
  FaUser,
  FaTasks,
  FaHome,
  FaUtensils,
  FaHospital,
} from "react-icons/fa";
import "./index.css";

const Header = (props) => (
  <nav className="nav-header">
    <div className="nav-content">
      <Link to="/">
        <img
          className="website-logo"
          src="https://www.kratin.co.in/images/kratin.png"
          alt="website logo"
        />
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/todo" className="nav-link">
            Todo
          </Link>
        </li>
        <li>
          <Link to="/diet-plan" className="nav-link">
            Diet Plan
          </Link>
        </li>
        <li>
          <Link to="/health-profile" className="nav-link">
            Health Profile
          </Link>
        </li>
        <li>
          <Link to="/consult-doctor" className="nav-link">
            Consult Doctor
          </Link>
        </li>
      </ul>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <Link to="/">
          <li className="nav-menu-item-mobile">
            <FaHome className="nav-mobile-icons" />
          </li>
        </Link>
        <Link to="/todo">
          <li className="nav-menu-item-mobile">
            <FaTasks className="nav-mobile-icons" />
          </li>
        </Link>
        <Link to="/diet-plan">
          <li className="nav-menu-item-mobile">
            <FaUtensils className="nav-mobile-icons" />
          </li>
        </Link>
        <Link to="/diet-plan">
          <li className="nav-menu-item-mobile">
            <FaUser className="nav-mobile-icons" />
          </li>
        </Link>
        <Link to="/diet-plan">
          <li className="nav-menu-item-mobile">
            <FaHospital className="nav-mobile-icons" />
          </li>
        </Link>
      </ul>
    </div>
  </nav>
);
export default withRouter(Header);
