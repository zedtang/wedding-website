// Hero configuration on the homepage

const hero = {
  // If the entire hero section should be enabled or not
  enabled: true,

  // Hero title with HTML support
  title: {
    enabled: true, // If the title should be enabled or not
    text: `<span class="extra-fancy extra-fancy-double-spaced">Jiaheng</span><span class="extra-fancy extra-fancy-spaced"> & </span><span class="extra-fancy extra-fancy-double-spaced">Flora &nbsp;</span>`,
  },

  // Hero subtitle with HTML support
  subtitle: {
    enabled: true, // If the subtitle should be enabled or not
    text: `<span class="fancy">We are <s>getting</s> married!</span>`,
  },

  // First CTA block
  simpleButton: {
    // Enable or disable first CTA
    enabled: false,
    // CTA text
    text: 'Get template',
    // Target html <a> tag
    target: '_blank',
    // Rel html <a> tag
    rel: 'noopener',
    // CTA icon
    icon: 'tabler:download',
  },

  // First CTA block
  callToAction: {
    // Enable or disable first CTA
    enabled: false,
    // CTA text
    text: 'Get template',
    // CTA link
    href: 'https://github.com/zedtang/wedding-website',
    // Target html <a> tag
    target: '_blank',
    // Rel html <a> tag
    rel: 'noopener',
    // CTA icon
    icon: 'tabler:download',
  },

  // Second CTA block (optional)
  callToAction2: {
    // Enable or disable second CTA
    enabled: false,
    // CTA text
    text: 'Learn more',
    // CTA link
    href: '#features',
    // Target html <a> tag
    target: '_blank',
    // Rel html <a> tag
    rel: 'noopener',
    icon: 'tabler:book',
  },

  // Hero image
  image: {
    // If the image should be enabled or not
    enabled: true,
    // Image source
    src: import('~/assets/images/hero.png'),
    // Image alt text
    alt: 'Jiaheng and Flora',
  },
};

export default hero;
