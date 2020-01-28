/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import Home from './src/screens/home';
import Login from './src/screens/login';
import About from './src/screens/about';
import Profile from './src/screens/profile';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      path: 'home/',
      navigationOptions: {
        title: 'Esta es la Home',
      },
    },
    About,
    Profile,
  },
  {
    initialRouteName: 'Home',
    initialRouteKey: 'home',
    initialRouteParams: {
      nombre: 'Cristobal Maturana',
    },
    mode: 'card',
    defaultNavigationOptions: {
      headerBackTitle: 'Atras',
      headerTitleAllowFontScaling: true,
      title: 'Un titulo generico',
      gestureEnabled: true,
      headerBackImage: () => <Text>{`<=`}</Text>,
      ...TransitionPresets.SlideFromRightIOS,
      cardStyle: {
        borderWidth: 2,
        backgroundColor: 'red',
      },
      //header: () => <Text>Esto es un header</Text>,
    },
  },
);

const Main = createStackNavigator(
  {
    Main: {
      screen: RootStack,
    },
    Login: {
      screen: Login,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const MainContainer = createAppContainer(Main);

export default class App extends React.Component {
  render() {
    return <MainContainer />;
  }
}
