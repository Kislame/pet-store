import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <section className="footer-content">
          <p>at Petopia we got everything you need to take care of your pet.</p>
          <p style={{ fontSize: 16 }}>
            &copy; Petopia {new Date().getFullYear()}
          </p>
        </section>
        <section className="footer-links">
          <div className="contact">
            <h3>Contact Us:</h3>
            <ul>
              <li>
                <a href="#">facebook</a>
              </li>
              <li>
                <a href="#">instagram</a>
              </li>
              <li>
                <a href="#">tik tok</a>
              </li>
              <li>
                <a href="#">twitter</a>
              </li>
            </ul>
          </div>
          <div className="about">
            <h3>About Us:</h3>
            <ul>
              <li>adress</li>
              <li>company</li>
              <li>phone number</li>
              <li>branches</li>
            </ul>
          </div>
          <div className="services">
            <h3>Services:</h3>
            <ul>
              <li>Adoption Services</li>
              <li>Pet Care</li>
              <li>Fast Delivery</li>
              <li>Quality pet food</li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
