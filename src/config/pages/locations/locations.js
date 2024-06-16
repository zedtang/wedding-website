// Configuration for the locations component on the home page

const locations = {
  // Show or hide the locations component
  enabled: true,

  // Small highlight text at the top of the component
  highlight: null,

  // Main title text
  title: "Grand Island Mansion",
  // Subtitle text
  subtitle: null,

  // Location cards to display
  locations: [
    {
      name: 'Venue',
      address: {
        enabled: true,
        line1: '13415 Grand Island Road',
        city: 'Walnut Grove',
        state: 'CA',
        postcode: '95690',
        country: 'United States',
      },
      description: 'Grand Island Mansion',
      image: {
        alt: 'venue location',
        height: '140',
        src: 'https://i.imgur.com/JRGDoUG.jpeg',
      },
      buttons: [
        {
          text: 'Directions',
          link: 'https://maps.app.goo.gl/sQCc5s8kCfEb15oaA', // google maps link
          target: '_blank', // opens in new tab
          size: 'large',
          icon: 'directions',
        },
        {
          text: 'Details',
          link: '/venue', // internal link
          target: '_self', // opens in same tab
          size: 'large',
          icon: 'link',
        },
      ],
    },
  ],
};

export default locations;
