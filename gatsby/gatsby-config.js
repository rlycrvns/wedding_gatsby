import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Jessica and Riley 9/5/2021`,
    siteUrl: 'https://rileyandjessica.com',
    description:
      "Jessica Baron and Riley Cravens are to be wed on September 5, 2021 at Scholl's Valley Lodge in Portland, OR",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'uuf1jx5a',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
