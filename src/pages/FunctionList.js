import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import MovieItem from '../components/MovieItem';
import {getMoviesApi} from '../apis/movies';
import {useSelector, useDispatch} from 'react-redux';
export default function FunctionList() {
  const {list, start, total, refreshing} = useSelector(({movies}) => {
    return {
      ...movies,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!list.length && start === 0 && total === 1) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, start, total]);
  function getData() {
    if (!(list.length < total)) return; //如果数据获取完了则不再发送接口了
    return getMoviesApi({start: start, count: 15}).then((res) => {
      dispatch({
        type: 'setData',
        payload: {
          list: [...list, ...res.rows],
          start: res.start + res.count,
          total: res.total,
          refreshing: false,
        },
      });
    });
  }
  function renderItem({item}) {
    return <MovieItem {...item} />;
  }
  function onEndReached() {
    //请求下一页的数据 如果数据请求完了，则不再发送接口了
    getData();
  }
  function ListFooterComponent() {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{list.length < total ? '正在加载更多' : '我是有底线的'}</Text>
      </View>
    );
  }
  function onRefresh() {
    //重置数据
    dispatch({
      type: 'setData',
      payload: {
        list: [],
        start: 0,
        total: 1,
        refreshing: false,
      },
    });
    getData();
  }
  return (
    <View>
      <FlatList
        data={list}
        renderItem={renderItem}
        numColumns={3} //每一行3列
        // eslint-disable-next-line react-native/no-inline-styles
        columnWrapperStyle={{
          justifyContent: 'space-around',
        }}
        onEndReachedThreshold={0.2}
        onEndReached={onEndReached} //下拉到地不适合会触发的函数
        ListFooterComponent={ListFooterComponent} //尾部组件返回JSX
        onRefresh={onRefresh} //下拉刷新的回调函数
        refreshing={refreshing}
      />
    </View>
  );
}
