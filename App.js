/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { AccessToken, LoginManager, LoginButton } from 'react-native-fbsdk'
import firebase from 'react-native-firebase';

export default class App extends Component {

  // onLoginFacebook= () => {
  //   LoginManager 
  //       .logInWithReadPermissions(['public_profile', 'email'])
  //       .then(( result) => {
  //         if(result.isCancelled){
  //           return Promise.reject(new Error('The user cancelled the request'));
  //         }
  //         console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`)
  //         return AccessToken.getCurrentAccessToken();
  //       })
  //       .then( data => {
  //         const credential = fireba
  //       })
  //       .then( currentUser => {

  //       })
  //       .catch((error) =>{

  //       });
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'red'}}>Test react native</Text>
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
