import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Main: {
          path: 'main',
          screens: {
            Home: 'home',
            Sources: 'sources',
          },
        },
        ContentModal: 'content',
      },
    },
  },
};
