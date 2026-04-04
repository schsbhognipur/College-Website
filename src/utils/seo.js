const SITE_NAME = 'Sanskriti College of Higher Studies';
const BASE_URL = 'https://sanskritipharmacycollege.ac.in';

export function buildSEO({
  title,
  description,
  path = '',
  image = '/og-image.png',
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | PCI Approved Pharmacy College, Bhognipur`;

  return {
    title: fullTitle,
    description:
      description ||
      'Sanskriti College of Higher Studies — PCI Approved, AKTU Affiliated pharmacy college in Bhognipur, Kanpur Dehat, Uttar Pradesh. Offering B.Pharma & D.Pharma programs.',
    canonical: `${BASE_URL}${path}`,
    og: {
      title: fullTitle,
      description,
      image: `${BASE_URL}${image}`,
      url: `${BASE_URL}${path}`,
      type: 'website',
    },
  };
}
