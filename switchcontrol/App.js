/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Switch from './app/component/Switch'

export default class App extends Component {

  callbackAfterSwitchUpdate(){
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Push Notifcations
        </Text>
        <View style={{position:'absolute',right:10}}>
        <Switch isOn={1} callbackAfterSwitchUpdate={this.callbackAfterSwitchUpdate.bind(this)} extraParam={'switch1'}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems:'center'
  },
  welcome: {
    justifyContent:'center',
    alignItems: 'center',
    fontSize: 16,
    margin: 10,
  },
});
