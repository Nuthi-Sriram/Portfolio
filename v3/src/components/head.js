import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import { socialMedia, additionalProfiles } from '@config';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
            twitterUsername
          }
        }
      }
    `,
  );

  const { defaultTitle, defaultDescription, siteUrl, defaultImage, twitterUsername } =
    site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  // Tells search engines that this site, the social accounts and the author
  // pages all describe one person. Deliberately carries no email address.
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sriram Nuthi',
    url: siteUrl,
    image: `${siteUrl}${defaultImage}`,
    jobTitle: 'Software Engineer',
    description: defaultDescription,
    worksFor: {
      '@type': 'Organization',
      name: 'Veeva Systems',
      url: 'https://www.veeva.com/',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University of Southern California',
      url: 'https://www.usc.edu/',
    },
    knowsAbout: [
      'Backend Engineering',
      'Distributed Systems',
      'Storage Systems',
      'Machine Learning',
    ],
    sameAs: [...socialMedia.map(({ url }) => url), ...additionalProfiles],
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />

      <link rel="canonical" href={seo.url} />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" />

      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
