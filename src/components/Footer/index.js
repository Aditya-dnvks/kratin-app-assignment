import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./index.css";

const Footer = () => (
  <div className="footer-container">
    <div>
      <p>&copy; 2023 Kratin Elderly Care Website. All rights reserved.</p>
    </div>
    <div className="copyrights">
      <ul className="footer-links">
        <li>
          <Link to="/" className="footer-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/todo" className="footer-link">
            Todo
          </Link>
        </li>
        <li>
          <Link to="/diet-plan" className="footer-link">
            Diet Plan
          </Link>
        </li>
        <li>
          <Link to="/health-profile" className="footer-link">
            Health Profile
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <ul className="footer-links">
        <li className="footer-link">About Us</li>
        <li className="footer-link">Contact Us</li>
        <li className="footer-link">Customer Care</li>
      </ul>
    </div>
    <ul className="social-icons">
      <li>
        {" "}
        <FaInstagram className="icons" />
      </li>
      <li>
        {" "}
        <FaFacebook className="icons" />
      </li>
      <li>
        {" "}
        <FaTwitter className="icons" />
      </li>
    </ul>
  </div>
);
export default Footer;
