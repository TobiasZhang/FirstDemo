/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import {aaa} from './app/FlexboxDemo'

export default class FirstDemo extends Component {
  btnOnClick(e){
    alert(1);
    console.log('hehehehe----console');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <TouchableHighlight
          style={{height:80,borderWidth:1,borderColor:'black'}}
          onPress={e => this.btnOnClick(e)}>
          <Text>gogoggo</Text>
        </TouchableHighlight>
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
import Input from './app/InputModule'
import Row from './app/RowItem'
import News from './app/NewsList'
class MyApp extends Component{
  render(){
    return (
      <Row title="标题"
           author_name="作者"
           date="2011-01-01 19:11"
           thumbnail_pic_s = "./app/images/doge.jpg"
      />
    );
  }
}
AppRegistry.registerComponent('FirstDemo', () => News);
