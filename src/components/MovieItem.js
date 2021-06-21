import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
export default function MovieItem({average, movieImg, stars, title}) {
  function renderStars() {
    const arr = []; //JSX数组里面每个元素是一个Image 根据stars来生成JSX数组
    for (let i = 0; i < stars[0]; i++) {
      arr.push(
        <Image
          key={i}
          source={require('../assets/imgs/rating_star_xsmall_on.png')}
          style={styles.star}
        />,
      );
    }
    if (stars[1] === '5') {
      arr.push(
        <Image
          key={50}
          source={require('../assets/imgs/rating_star_xsmall_half.png')}
          style={styles.star}
        />,
      );
    }
    const len = arr.length;
    for (let i = 5; i > len; i--) {
      arr.push(
        <Image
          key={i}
          source={require('../assets/imgs/rating_star_xsmall_off.png')}
          style={styles.star}
        />,
      );
    }
    return arr;
  }
  return movieImg ? (
    <View style={{width: 100}}>
      <Image source={{uri: movieImg}} style={{width: 100, height: 200}} />
      <Text>{title}</Text>
      <View style={styles.starAndScore}>
        <View style={{flexDirection: 'row'}}>{renderStars()}</View>
        <Text>{average}</Text>
      </View>
    </View>
  ) : (
    <View style={{width: 100}}></View>
  );
}

const styles = StyleSheet.create({
  star: {
    width: 13,
    height: 13,
  },
  starAndScore: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
