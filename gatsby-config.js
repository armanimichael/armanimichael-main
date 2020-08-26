module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Mike',
    sitename: 'Gatsby Starter Mike',
    siteUrl: 'localhost:8000',
    description:
      'Gatsby Starter with TypeScript support, js styling with styled-components and MDX posts',
    author: '',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
          anonymize: true,
        },
        environments: ['production', 'development'],
      },
    },
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
        short_name: 'mike-starter',
        start_url: '/',
        background_color: '#232946',
        theme_color: '#232946',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
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
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 950,
              quality: 100,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
        ],
      },
    },
  ],
};
