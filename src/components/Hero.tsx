import './hero.css';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-intro ">
        <h1>Welcome to Petopia - Where Every Pet's Dream Comes True!</h1>
        <p>
          At Petopia, we believe in creating a haven for your beloved
          companions, where their happiness and well-being take center stage.
          Our passion for pets drives us to curate an extensive selection of
          top-quality products, ensuring your furry, feathery, or scaly friends
          receive the care and love they deserve. From premium pet food to
          stylish accessories, Petopia is your one-stop destination for all
          things pet-related.
        </p>
        <a className="btn-link btn-grad" href="#">
          Explore Our Products
        </a>
      </div>
      <div className="hero-img">
        <img
          src="./assets/images/dog-op.jpeg"
          alt="dog wearing pajams"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
