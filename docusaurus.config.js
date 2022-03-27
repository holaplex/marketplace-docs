// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Holaplex',
  tagline: 'Let us power your Marketplace',
  url: 'https://holaplex.com',
  baseUrl: '/', // '/marketplace-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'holaplex', // Usually your GitHub org/user name.
  projectName: 'marketplace-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsible: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      colorMode: {
        // "light" | "dark"
        defaultMode: 'dark',
  
        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,
  
        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: false
      },
      navbar: {
        title: 'Holaplex',
        logo: {
          alt: 'Holaplex Wave Logo',
          src: 'img/wave.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            label: 'Create A Marketplace',
            href: 'https://holaplex.com',
            position: 'right'
          },
          {
            href: 'https://github.com/holaplex/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'Blog',
                href: 'https://medium.com/holaplex',
              },
              {
                label: 'About Holaplex',
                href: 'https://www.holaplex.com/about',
              },
              {
                label: 'Terms Of Service',
                href: 'https://docs.google.com/document/d/1jskpoCdDm7DU2IbeXwRhhl5LGiNhonAx2HsmfJlDsEs/',
              },
              {
                label: 'Privacy Policy',
                href: 'https://docs.google.com/document/d/12uQU7LbLUd0bY7Nz13-F9cua5Wk8mnRNBlyDzF6gRmo/',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/holaplex',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/holaplex',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/holaplex/marketplace',
              },
              {
                label: 'Docs',
                href: '/',
              },
              {
                label: 'FAQ',
                href: 'https://holaplex-support.zendesk.com/hc/en-us/sections/4407417107475-FAQ',
              },
              {
                label: 'Setting Up A Store',
                href: 'https://holaplex-support.zendesk.com/hc/en-us/sections/4407782141971-Set-Up-A-Store',
              },
              {
                label: 'Minting NFTs',
                href: 'https://holaplex-support.zendesk.com/hc/en-us/sections/4407791450515-Minting-NFTs',
              },
              {
                label: 'Selling NFTs',
                href: 'https://holaplex-support.zendesk.com/hc/en-us/sections/4407792008979-Selling-NFTs',
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Holaplex.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
