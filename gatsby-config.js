module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: { typekit: { id: 'ubr3lbn' } },
    },
  ],
};
