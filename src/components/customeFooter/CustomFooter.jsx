// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebook } from "@fortawesome/free-brands-svg-icons";

// internal imports
import "./customFooter.css";

// component

const CustomFooter = () => {
  return (
    <>
      <footer>
        <p className="copyright-text">© 2024 All Rights</p>
        <section className="footer-links">
          <a
            className="social-link"
            target="_blank"
            href="https://www.linkedin.com/company/i-womanuk/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
          </a>
          <a
            className="social-link"
            target="_blank"
            href="https://www.facebook.com/iwoman2024"
          >
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />{" "}
          </a>
        </section>
      </footer>
    </>
  );
};

export default CustomFooter;
