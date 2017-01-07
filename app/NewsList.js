/**
 * Created by TT on 2017/1/7.
 */
import React,{Component} from 'react';
import {View,Text,ListView} from 'react-native';
import Row from './RowItem';

export default class NewsList extends Component{
  ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
  constructor(props){
    super(props);

    this.state = {data:[]};
    this.getMoviesFromApi();
  }
  render(){
    return (
      <ListView dataSource={this.ds.cloneWithRows(this.state.data)}
                renderRow={data => this.getRow(data)}
      />
    );
  }
  getMoviesFromApi() {
    return fetch('http://v.juhe.cn/toutiao/index?type=top&key=005ac3f4ccb5946a16cd3e9165555f88')
      .then((response) => response.json())
      .then((result) => {
        if(result.error_code === 0){
          var dataArr = result.result;
          this.setState(dataArr);
        }else{
          alert('请求错误:'+result.error_code);
        }
      })
      .catch((error) => {
        alert(error);
        console.error(error);
      });
  }
  getRow(news){
    return (
      <Row news={news}/>
    );
  }
}
