const {Navigation} = require('react-native-navigation');
const {registerScreen} = require('./src/utils/registerScreen');

registerScreen();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'tabBar',
            },
          },
        ],
      },
    },
  });
});
