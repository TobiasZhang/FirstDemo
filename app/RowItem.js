/**
 * Created by TT on 2017/1/7.
 */
import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';

export default class RowItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
    var news = this.props.news;
    return (
      <View style={{flexDirection:'row',height:80,alignItems:'center',paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10}}>
        <Image style={{width:95,height:70}} source={{uri:news.thumbnail_pic_s}}/>
        <View style={{flex:1,marginLeft:10,height:70,justifyContent:'space-between'}}>
          <Text style={{fontSize:16,color:'black',marginTop:2}} numberOfLines={2}>{news.title}</Text>
          <View style={{marginBottom:2,flexDirection:'row',justifyContent:'space-between',alignContent:'flex-end'}}>
            <Text style={{fontSize:14}}>{news.author_name}</Text>
            <Text style={{fontSize:12}}>{news.date}</Text>
          </View>
        </View>
      </View>
    );
  }
}