// Hero configuration on the gallery page

const hero = {
  // If the entire hero section should be enabled or not
  enabled: true,
  padding: 'pt-12 md:pt-20',

  // Hero title with HTML support
  title: {
    enabled: true, // If the title should be enabled or not
    text: `<span class="fancy">Wedding Registry</span>`,
  },

  // Hero subtitle with HTML support
  subtitle: {
    enabled: true, // If the subtitle should be enabled or not
    text: `<span class="fancy">We are so grateful you choose to celebrate with us. This is of course optional.</span>`,
  },
};

export default hero;
