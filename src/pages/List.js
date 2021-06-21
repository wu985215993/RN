import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import MovieItem from '../components/MovieItem';
import {getMoviesApi} from '../apis/movies';
export default class List extends Component {
  state = {
    list: [],
    start: 0,
    total: 1,
    refreshing: false,
  };
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    if (!(this.state.list.length < this.state.total)) return; //如果数据获取完了则不再发送接口了
    return getMoviesApi({start: this.state.start, count: 15}).then((res) => {
      /* const list = [...this.state.list, ...res.rows];
      const restLen = 3 - (list.length % 3);
      const rowsArr = res.rows;
      for (let i = 1; i <= restLen; i++) {
        rowsArr.push({});
      } */
      this.setState({
        list: [...this.state.list, ...res.rows],
        start: res.start + res.count,
        total: res.total,
      });
    });
  };
  renderItem = ({item}) => {
    return <MovieItem {...item} />;
  };
  onEndReached = () => {
    //请求下一页的数据 如果数据请求完了，则不再发送接口了
    this.getData();
  };
  ListFooterComponent = () => {
    return (
      <View
        style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          {this.state.list.length < this.state.total
            ? '正在加载更多'
            : '我是有底线的'}
        </Text>
      </View>
    );
  };
  onRefresh = async () => {
    //重置数据
    await this.setState({
      list: [],
      start: 0,
      total: 1,
      refreshing: true,
    });
    //获取首页数据
    await this.getData();
    this.setState({
      refreshing: false,
    });
  };
  render() {
    const {list} = this.state;
    return (
      <View>
        <FlatList
          data={list}
          renderItem={this.renderItem}
          numColumns={3} //每一行3列
          columnWrapperStyle={{
            justifyContent: 'space-around',
          }}
          onEndReachedThreshold={0.2}
          onEndReached={this.onEndReached} //下拉到地不适合会触发的函数
          ListFooterComponent={this.ListFooterComponent} //尾部组件返回JSX
          onRefresh={this.onRefresh} //下拉刷新的回调函数
          refreshing={this.state.refreshing}
        />
      </View>
    );
  }
}
