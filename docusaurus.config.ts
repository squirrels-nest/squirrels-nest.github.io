import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Squirrels',
  tagline: 'Create REST APIs for Data Analytics',
  favicon: 'img/squirrels.ico',

  // Set the production url of your site here
  url: 'https://squirrels-nest.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'squirrels-nest', // Usually your GitHub org/user name.
  projectName: 'squirrels-nest.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          lastVersion: 'current',
          versions: {
            current: {
              label: '0.2.x',
              path: ''
            }
          }
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-ETDDKNQF7K',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/squirrels.jpg',
    metadata: [
      {name: 'keywords', content: 'squirrels, data, api, dynamic, dynamic data, dynamic data api, data engineering, data analytics, analytics, blog, documentation, home page'}
    ],
    navbar: {
      title: 'Squirrels',
      logo: {
        alt: 'Squirrels Logo',
        src: 'img/squirrels_large.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/squirrels-nest/squirrels',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Tutorial',
              to: '/docs/tutorial',
            },
            {
              label: 'CLI References',
              to: '/docs/category/cli-references',
            },
            {
              label: 'Framework Topics',
              to: '/docs/category/framework-topics',
            },
            {
              label: 'Client Usage',
              to: '/docs/category/client-usage',
            },
            {
              label: 'Python APIs',
              to: '/docs/category/python-apis',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/KqUkZX3G',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/squirrels-nest/squirrels',
            },
            {
              label: 'PyPI',
              href: 'https://pypi.org/project/squirrels/'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Squirrels, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
