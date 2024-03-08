import Seo from '../components/Seo';

import Hero from '../components/Hero';
import Products from '../components/products/Products';
import Reviews from '../components/reviews/Reviews';
import Location from '../components/location/Location';

const Home = () => {
  return (
    <>
      <main>
        <Seo
          title="Petopia: Your Ultimate Destination for Quality Pet Supplies and Loving Companions"
          description="Embark on a journey of pet bliss at Petopia – your ultimate destination for top-tier pet supplies and heartwarming companions. From premium food and chic accessories to engaging toys and professional grooming services, we cater to the diverse needs of your furry friends. Explore our extensive lineup of pets for adoption, each seeking a caring home. Visit Petopia today and immerse yourself in the joy of creating lasting memories with your beloved pets"
        />

        <Hero />
        <Products />
        <Reviews />
        <Location />
      </main>
    </>
  );
};

export default Home;
