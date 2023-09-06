// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Hive",
  tagline:
    "The place where we meet to learn, grow, and create safety all around us. Join us on a never ending learning journey where you determine your own goals and capacity for growth. ",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://maggie44.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/hivehealing",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "maggie44", // Usually your GitHub org/user name.
  projectName: "hivehealing", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Hive Healing",
        logo: {
          alt: "Hive",
          src: "img/logo.png",
        },
        items: [
          { to: "/about", label: "About", position: "left" },
          { to: "blog", label: "Blog", position: "left" },
          { to: "/services", label: "Services", position: "left" },
          { to: "events", label: "Events", position: "left" },
          {
            to: "https://opencollective.com/the-healing-hive",
            label: "Donate",
            position: "left",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
