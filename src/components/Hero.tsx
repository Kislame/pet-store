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
          src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="dog wearing pajams"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
