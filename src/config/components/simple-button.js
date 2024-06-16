// Configuration for the site wide simple button
// This component config can be used on any page to display an identical simple button

const simpleButton = {
  // If the simple button should be displayed
  enabled: false,

  // The title of the call to action component
  title: 'Astro + Tailwind CSS',

  // The subtitle of the call to action component (supports HTML)
  subtitle: `Be very surprised by these huge fake numbers you are seeing on this page. <br class="hidden md:inline" />Don't
    waste more time! :P`,

  // Button configuration for the call to action component
  button: {
    // If the button should be displayed
    enabled: true,
    // The text of the button
    text: 'Get template',
    // The icon to the left of the button text
    icon: 'tabler:download',
    // HTML target attribute
    target: '_blank',
    // HTML rel attribute
    rel: 'noopener',
  },
};

export default simpleButton;

