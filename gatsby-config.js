module.exports = {
  siteMetadata: {
    title: `techatcore Website`,
    description: `A website for working with any company Individuals for greater support from us.`,
    author: `@tac`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito`,
            variants: [
              "200",
              "300",
              "400",
              "600",
              "700",
              "800",
              "900"
            ]
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,

    
    {
      
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tech.at.core`,
        short_name: `TAC`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },

    
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
          // Setting this parameter is optional
          anonymize: true
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production']
      },
    },
    `gatsby-plugin-offline`
  ],

  
    plugins: [
      // ...
      {
        resolve: 'gatsby-plugin-load-script',
        options: {
          disable: !process.env.SENTRY_DSN, // When do you want to disable it ?
          src: 'https://browser.sentry-cdn.com/5.15.4/bundle.min.js',
          integrity:
            'sha384-Nrg+xiw+qRl3grVrxJtWazjeZmUwoSt0FAVsbthlJ5OMpx0G08bqIq3b/v0hPjhB',
          crossorigin: 'anonymous',
          onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`,
        },
      },
    ],

    plugins: [`gatsby-plugin-layout`],
  

    plugins: [
      {
        resolve: `gatsby-plugin-global-styles`,
        options: {
          pathToConfigModule: `src/styles/GlobalStyleComponent`,
          props: {
            theme: `src/styles/theme`,
            other: {
              light: true
            }
          }
        },
      },
    ],

    plugins: [
      {
        resolve: `gatsby-plugin-google-analytics`,
      },

  ],

    plugins: [
      `gatsby-plugin-netlify-cms`,
      
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/blog`,
          name: `blog`,
        },
      },
      
      ],
  

}
