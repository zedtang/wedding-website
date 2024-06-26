// Configuration for the footer component on all pages

// ----------- imports -----------
import { getPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const footerData = {
  // List of links to be displayed in the footer
  links: [
    {
      // The title of the section
      title: 'Details',
      // List of links to be displayed in the section
      links: [
        { text: 'FAQs', href: '/details' },
      ],
    },
    {
      title: 'Invite',
      links: [
        { text: 'RSVP', href: '/rsvp' },
      ],
    },
    {
      title: 'Gallery',
      links: [{ text: 'Photos', href: '/gallery' }],
    },
    {
      title: 'Links',
      links: [{ text: 'Registry', href: '/registry' }],
    },
  ],

  // Secondary links to be displayed in the footer
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],

  // A list of social links to be displayed in the footer
  socialLinks: [{ ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/zedtang/wedding-website' }],

  // The footnote to be displayed in the footer (can contain HTML)
  footNote: `
    Made by <a class="text-sage-800 hover:underline dark:text-gray-200" target="_blank" href="https://github.com/zedtang/wedding-website"> Jiaheng and Flora</a> with ❤️
  `,
};

export default footerData;
