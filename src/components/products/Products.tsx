import { useState } from 'react';
import './products.css';
type productProp = {
  title: string;
  description: string;
  svg: string;
};

const Products = () => {
  const [data] = useState<productProp[]>([
    {
      title: 'Quality Pet Food',
      description:
        'Give your furry friend the best with our premium quality pet food. Specially formulated for optimal nutrition and taste.',
      svg: './assets/food.svg',
    },

    {
      title: 'Toys and Accessories ',
      description:
        'Keep your pet entertained and happy with our wide range of toys and accessories. From squeaky toys to comfy beds',
      svg: './assets/toys.svg',
    },
    {
      title: 'Pet Care Essentials ',
      description:
        'Explore Our Wide Collection from beds and options to let your pet relax!',
      svg: './assets/care.svg',
    },
    {
      title: 'Fast Delivery',
      description: 'We take pride in our fast services',
      svg: './assets/delivery.svg',
    },
  ]);
  return (
    <section className="products-wrapper">
      <h2>Our Services</h2>
      <div className="products">
        {data.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Products;

const Product = ({ title, description, svg }: productProp) => {
  return (
    <section className="product">
      <div>
        <img src={svg} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
};
