/**
 * Created by TT on 2017/1/7.
 */
import React, { Component } from 'react';
import { StyleSheet, Text,View,TextInput,ScrollView,Image,ListView } from 'react-native';

class MyTextInput extends Component{
  constructor(props){
    super(props);
    this.state = {text:''};
  }
  render(){
    return (
      <View style={{padding: 10}}>
        <TextInput
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🎂').join('-')}
        </Text>
      </View>
    );
  }

}
class MyScrollView extends Component{
  flag = false;
  constructor(props){
    super(props);
    this.state = {imagePath:require("./images/ponys.jpg")}
  }
  onClick1(){
    if(this.flag){
      this.setState({imagePath:require("./images/ponys.jpg")});
    }else
      this.setState({imagePath:require("./images/doge.jpg")});
    this.flag=!this.flag;
  }
  render() {
    return(
      <ScrollView>
        <Text onPress={e=>this.onClick1(e)} style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Text style={{fontSize:96}}>If you like</Text>
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />

        <Text style={{fontSize:96}}>What&apos; s the best</Text>
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Text style={{fontSize:96}}>Framework around?</Text>
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Image source={this.state.imagePath} />
        <Text style={{fontSize:80}}>React Native</Text>
      </ScrollView>
    );
  }
}

export default class MyListView extends Component{
  ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
  constructor(props){
    super(props);

    this.state = {data:ds.cloneWithRows([
      'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
    ])};
  }
  render(){
    return (
      <ListView dataSource={this.ds.cloneWithRows(this.state.data)}
                renderRow={data => <Text style={{fontSize:20}}>{data}</Text>}
      />
    );
  }
}

