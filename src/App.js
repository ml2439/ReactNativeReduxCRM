import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import Login from './Login';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCA85bJDhP7zLSl4TdWWUV9Qw8QOsXmI4A",
      authDomain: "crmlinkedin-f2f87.firebaseapp.com",
      databaseURL: "https://crmlinkedin-f2f87.firebaseio.com",
      projectId: "crmlinkedin-f2f87",
      storageBucket: "crmlinkedin-f2f87.appspot.com",
      messagingSenderId: "421112550030"
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
