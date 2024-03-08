import { Helmet } from 'react-helmet-async';
type Props = {
  title: string;
  description: string;
  name?: string;
  type?: string;
};

const Seo = (props: Props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
  );
};

export default Seo;
