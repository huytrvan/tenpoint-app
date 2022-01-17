const AboutRoutes = TabNavigator({
  aboutApp: {
    screen: AboutApp,
  },
  aboutDev: {
    screen: AboutDev,
  }
});

const Router = StackNavigator(
  {
    home: {
      screen: HomePage,
      navigationOptions: {
        title: 'Start taking notes',
      },
    },
    about: {
      screen: AboutPage,
    }
  },
  {
    mode: 'card',
  }
);