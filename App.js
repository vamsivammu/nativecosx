/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackActions,createStackNavigator,createAppContainer,createDrawerNavigator} from 'react-navigation'
import HomeScreen from './Screens/homescreen'
import SignInScreen from './Screens/signin'
import SelectZone from './Screens/selectzone'
import UpdateProfile from './Screens/updateprofile'
import UpdateProfileEmp from './Screens/updateprofileemp'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const DrawNavigator = createDrawerNavigator({
  Signup:HomeScreen,
SignIn:SignInScreen,
Zone:SelectZone,
UpdateProfile:UpdateProfile,
UpdateProfileEmp:UpdateProfileEmp,
    initialRouteName:'UpdateProfile'
  
})

const AppNavigator = createStackNavigator({
  Signup:HomeScreen,
  SignIn:SignInScreen,
  Zone:SelectZone,
  UpdateProfile:UpdateProfile,
  UpdateProfileEmp:UpdateProfileEmp,
      initialRouteName:'UpdateProfile'
})

const AppContainer  = createAppContainer(DrawNavigator)
// type Props = {};
export default class App extends Component {
 
  constructor(props){
    super(props)
  }
  render() {
    let navigationopts = {
      title:"Home",
      headerRight:(<Text>GIGX</Text>)
  }
    return <AppContainer navigationOptions={navigationopts}  />;
  }
}
