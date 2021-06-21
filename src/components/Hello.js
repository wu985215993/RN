/* 引入核心依赖 */

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
/* 
  View 相当于 div
  Text 相当于span   文本必须放到Text中，否则会报错
  文本的样式必须加在Text标签上面，并且Text的样式是可以继承
  标签的样式 这个style属性可以接受一个样式对象，也可以接收一个数组，数组里面可以有多个样式对象
  StyleSheet 可以统一管理样式
  StyleSheet.creat({//key样式名:value（样式对象）})
  
      style属性={[]}
*/

//创建组件并导出
export default class Hello extends React.Component {
  state = {
    text: 'Hello world',
  };
  changeText = () => {
    this.setState({
      text: '新的文本',
    });
  };
  render() {
    const {text} = this.state;
    return (
      <View>
        <Text style={[styles.text, {fontStyle: 'italic'}]}>{text}</Text>
        <Button title="点我修改text" onPress={this.changeText} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 30,
  },
});
