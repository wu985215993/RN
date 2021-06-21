/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
/* 
  View默认是一个flex盒子，主轴方向在垂直方向
*/
export default function FlexDemo() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
      }}>
      <View style={[styles.box, {backgroundColor: 'red'}]}>
        <Text>A</Text>
      </View>
      <View style={[styles.box, {backgroundColor: 'green'}]}>
        <Text>B</Text>
      </View>
      <View style={[styles.box, {backgroundColor: 'yellow'}]}>
        <Text>C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
  },
});
