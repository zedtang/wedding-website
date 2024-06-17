// Configuration for the note component

import { SITE } from '~/config/site/config.js';

const note = {
  // If the note component should be enabled or not
  enabled: true,

  // Note text with HTML support
  text: `<span class="fancy">See you there~</span>`,

  // Optional note icon (prefix to the text)
  icon: {
    enabled: true,
    name: 'tabler:heart',
  },
};

export default note;
