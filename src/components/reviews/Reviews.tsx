import './reviews.css';
const Reviews = () => {
  return (
    <section className="reviews-wrapper">
      <h2>Reviews</h2>
      <div className="reviews">
        <article>
          <div className="article-img-wrapper">
            <img
              src="https://plus.unsplash.com/premium_photo-1673710478798-bc9781856eca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGh1Z2dpbmclMjBhJTIwZG9nfGVufDB8fDB8fHww"
              alt="review one"
            />
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
            <img
              src="https://plus.unsplash.com/premium_photo-1664357541653-5041b80e2df5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGh1Z2dpbmclMjBhJTIwZG9nfGVufDB8fDB8fHww"
              alt="review one"
            />
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
            <img
              src="https://plus.unsplash.com/premium_photo-1700403545687-33f7e490a7de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGh1Z2dpbmclMjBhJTIwZG9nfGVufDB8fDB8fHww"
              alt="review one"
            />
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
