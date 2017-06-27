import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import Login from './Login';
import Loader from './Loader';
import PeopleList from './PeopleList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  }
})

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCA85bJDhP7zLSl4TdWWUV9Qw8QOsXmI4A",
      authDomain: "crmlinkedin-f2f87.firebaseapp.com",
      databaseURL: "https://crmlinkedin-f2f87.firebaseio.com",
      projectId: "crmlinkedin-f2f87",
      storageBucket: "crmlinkedin-f2f87.appspot.com",
      messagingSenderId: "421112550030"
    });

    firebase.auth().onAuthStateChanged( user => {
      if(user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  renderInitialView() {
    switch(this.state.loggedIn) {
      case true:
        return <PeopleList />
      case false:
        return <Login />
      default:
        return <Loader size="large" />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderInitialView()}
      </View>
    );
  }
}
