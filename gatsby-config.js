module.exports = {
  siteMetadata: {
    title: 'Armani Michael',
    sitename: 'Armani Michael',
    siteUrl: 'https://armanimichael.com',
    description:
      'Software Developer based in Italy. Read more about programming and Web Development on my Blog - I mostly write about Web Development and ReactJS, but you can find other topics too.',
    author: '',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/configs/`,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-mike',
        short_name: 'armani-michael',
        start_url: '/',
        background_color: '#0f0e17',
        theme_color: '#a7a9be',
        display: 'fullscreen',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
        pure: true,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000,
        production: false,
        disable: true,
      },
    },
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        createLinkInHead: true,
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }
        `,
        serialize: ({ site, allSitePage }) => {
          const setPreferences = pathLink => {
            const configs = {
              '/': {
                priority: 1,
                changefreq: 'yearly',
              },
              '/blog/': {
                priority: 1,
                changefreq: 'weekly',
              },
            };

            const isBlogPost = /^\/blog\/./.test(pathLink);
            if (!configs[pathLink]) {
              if (isBlogPost) {
                return {
                  priority: 0.7,
                  changefreq: 'monthly',
                };
              } else {
                return {
                  priority: 0.7,
                  changefreq: 'yearly',
                };
              }
            }

            return configs[pathLink];
          };

          return allSitePage.edges.map(({ node: { path } }) => {
            return {
              url: site.siteMetadata.siteUrl + path,
              changefreq: setPreferences(path).changefreq,
              priority: setPreferences(path).priority,
            };
          });
        },
      },
    },
  ],
};
