import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';

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
        <Text style={styles.welcome}>
          Welcome to my crm!
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
