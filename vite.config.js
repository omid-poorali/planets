import path from 'node:path';

import { partytownVite } from '@builder.io/partytown/utils';
import legacy from '@vitejs/plugin-legacy';

export default {
  server: {
    host: 'localhost',
    port: 3000
  },
  plugins: [
    legacy(),
    partytownVite({
      dest: path.join(import.meta.dirname, 'dist', '~partytown')
    })
  ]
};
