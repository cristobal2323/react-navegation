/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/home';
import Login from './src/screens/login';
import About from './src/screens/about';
import Profile from './src/profile/components/name';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      path: 'home/',
      navigationOptions: {
        title: 'Esta es la Home',
      },
    },
    Login,
    About,
    Profile,
  },
  {
    initialRouteName: 'Login',
    initialRouteKey: 'login',
    initialRouteParams: {
      nombre: 'Cristobal Maturana',
    },
    navigationOptions: {
      title: 'Un titulo generico',
    },
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
