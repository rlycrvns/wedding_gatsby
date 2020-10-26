import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Baron Cravens Wedding`,
    siteUrl: 'https://rileyandjessica.com',
    description: 'Jessica Baron and Riley Cravens are to be wed on September 5, 2021 at Scholl\'s Valley Lodge in Portland, OR'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'jepvh1pd',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};