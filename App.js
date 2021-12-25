import * as React from 'react';
import { createSwitchNavigator, createAppContainer } 

import LoginScreen from './screens/loginScreen';
import PostScreen from './screens/PostScreen';
import LoadingScreen from './screens/loadingScreen';

import firebase from 'firebase';
import { firebaseConfig } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  PostScreen: PostScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return( <AppNavigator />
  )
}

