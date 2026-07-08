import { Helmet } from "react-helmet-async";

export default function Seo({ title, description }) {
  const siteName = "Reactiva";

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
