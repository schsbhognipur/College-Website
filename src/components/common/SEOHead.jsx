import { Helmet } from 'react-helmet-async';

export default function SEOHead({ title, description, canonical, image }) {
  const siteName = 'Sanskriti College of Higher Studies';
  const fullTitle = title ? `${title} | SCHS` : `${siteName} | Pharmacy College, Bhognipur`;
  const desc = description || 'PCI Approved, AKTU Affiliated Pharmacy College in Bhognipur, Kanpur Dehat, UP. B.Pharma & D.Pharma admissions open.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
}
