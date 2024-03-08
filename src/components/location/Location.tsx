import './location.css';
const Location = () => {
  return (
    <section className="location-container">
      <div className="location-content">
        <h2>Visit Our Pet Store</h2>
        <p>We are located at the following address:</p>
        <address>
          <strong>Your Pet Store Name</strong>
          <br />
          123 Main Street
          <br />
          Cityville, State 12345
          <br />
          Country
        </address>
        <p>Feel free to drop by and explore our wide range of pet products!</p>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8522.350593518808!2d7.417177829910941!3d36.45558629713413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f05df8d8143d61%3A0xc096416ffaa6da99!2sGuelma!5e0!3m2!1sen!2sdz!4v1709912265500!5m2!1sen!2sdz"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
