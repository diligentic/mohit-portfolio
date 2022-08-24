const about = require('./about.json');

require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID, DETERMINISTIC } = process.env;

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-typescript',
  'gatsby-plugin-styled-components',
  `gatsby-plugin-sharp`,
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-code-buttons`,
          options: {
            // buttonText: `copy`,
            tooltipText: 'copy',
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {},
        },
        'gatsby-remark-autolink-headers',
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 590,
          },
        },
      ],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages/`,
    },
  },
  {
    resolve: 'gatsby-plugin-launchdarkly',
    options: {
      clientSideID: '6080444a696f830bd41354af',
      options: {
        bootstrap: 'localstorage',
      },
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `${about.name} Portfolio`,
      short_name: about.name,
      start_url: '/',
      background_color: about.colors.background,
      theme_color: about.colors.primary,
      display: 'minimal-ui',
      icon: 'media/icon.png',
    },
  },
  'gatsby-plugin-offline',
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    },
  },
  {
    resolve: 'gatsby-source-medium',
    options: {
      username: about.mediumUser || '@medium',
    },
  },
];

if (ANALYTICS_ID) {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: ANALYTICS_ID,
    },
  });
}

module.exports = {
  plugins,
  siteMetadata: {
    isMediumUserDefined: !!about.mediumUser,
    deterministic: !!DETERMINISTIC,
    title: 'Writings by Mohit',
    author: 'Mohit Singh',
    description: "Mohit's portfolio site.",
    siteUrl: 'https://Mohit-singh.dev',
    social: {
      twitter: '',
    },
  },
  pathPrefix: '/',
};
