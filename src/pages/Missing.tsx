import { Link } from 'react-router-dom';
const Missing = () => {
  return (
    <section>
      <h1>Oops, Page Not Found</h1>
      <Link to="/">Go To Home</Link>
    </section>
  );
};

export default Missing;
