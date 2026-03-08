import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://narayanheartandmaternitycentre.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/nc.png`;
const SITE_NAME = 'Narayan Heart & Maternity Centre';

/**
 * Reusable SEO head component.
 * Generates canonical URL, OG tags, Twitter cards, and geo meta.
 *
 * @param {string}  title       – Page title
 * @param {string}  description – Meta description (≤160 chars ideal)
 * @param {string}  path        – Route path, e.g. "/about" (used for canonical + og:url)
 * @param {string}  [image]     – OG image URL (defaults to clinic logo)
 * @param {string}  [type]      – OG type (defaults to "website")
 * @param {React.ReactNode} [children] – Extra <Helmet> children like JSON-LD scripts
 */
const SeoHead = ({ title, description, path = '/', image, type = 'website', children }) => {
    const canonicalUrl = `${SITE_URL}${path}`;
    const ogImage = image || DEFAULT_OG_IMAGE;

    return (
        <Helmet>
            {/* Core */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Geo */}
            <meta name="geo.region" content="IN-BR" />
            <meta name="geo.placename" content="Patna" />
            <meta name="geo.position" content="25.5945;85.1554" />
            <meta name="ICBM" content="25.5945, 85.1554" />

            {children}
        </Helmet>
    );
};

export default SeoHead;
