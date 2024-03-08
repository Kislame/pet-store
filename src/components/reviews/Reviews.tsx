import './reviews.css';
const Reviews = () => {
  return (
    <section className="reviews-wrapper ">
      <h2>Reviews</h2>
      <div className="reviews">
        <article>
          <div className="article-img-wrapper">
            <img src="/assets/images/person-1-op.jpeg" alt="review one" />
          </div>
          <Star />

          <blockquote>
            <p>
              {' '}
              My experience with this pet food has been incredible. The quality
              of ingredients....
            </p>
            <cite className="cite">Posted by John Doe on March 6, 202</cite>
          </blockquote>
        </article>
        <article>
          <div className="article-img-wrapper">
            <img src="/assets/images/person-2-op.jpeg" alt="review one" />
          </div>
          <Star />
          <blockquote>
            <p>
              {' '}
              My experience with this pet food has been incredible. The quality
              of ingredients....
            </p>
            <span></span>
            <cite>Posted by Rebeca on March 6, 202</cite>
          </blockquote>
        </article>
        <article>
          <div className="article-img-wrapper">
            <img src="/assets/images/person-3-op.jpeg" alt="review one" />
          </div>
          <Star />
          <blockquote>
            <p>
              {' '}
              My experience with this pet food has been incredible. The quality
              of ingredients....
            </p>
            <cite>Posted by Molly on March 6, 202</cite>
          </blockquote>
        </article>
      </div>
    </section>
  );
};

export default Reviews;

const Star = () => {
  return (
    <>
      <img className="star" src="./assets/star.svg" alt="star" />
      <img className="star" src="./assets/star.svg" alt="star" />
      <img className="star" src="./assets/star.svg" alt="star" />
      <img className="star" src="./assets/star.svg" alt="star" />
      <img className="star" src="./assets/star.svg" alt="star" />
    </>
  );
};
