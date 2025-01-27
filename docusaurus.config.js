// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer')
const lightTheme = themes.github
const darkTheme = themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Hive',
  tagline:
    'The place where we meet to learn, grow, and create safety all around us. Join us on a never ending learning journey where you determine your own goals and capacity for growth. ',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://healinghivebee.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/hivehealing',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HealingHiveBee', // Usually your GitHub org/user name.
  projectName: 'hivehealing', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'The Hive',
        logo: {
          alt: 'Hive',
          src: 'img/logo.png'
        },
        items: [
          { to: '/', label: 'Home', position: 'left', exact: true },
          { to: '/about', label: 'About', position: 'left' },
          // { to: "/services", label: "Services", position: "left" },
          // { to: '/blog', label: 'Blog', position: 'left' },
          // { to: '/events', label: 'Events', position: 'left' },
          {
            href: 'https://opencollective.com/thehive',
            label: 'Donate',
            position: 'left'
          },
          {
            href: 'https://discord.gg/G8PKwbWYeR',
            label: 'Discord',
            position: 'right'
          }
        ]
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme
      }
    })
}

module.exports = config
