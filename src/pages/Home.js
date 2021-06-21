import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
import {Link} from '@react-navigation/native';
import Main from './Main';
import Top from './Top';
import My from './My';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default class Home extends Component {
  /* goToLogin = () => {
    this.props.navigation.navigate('Login');
  }; */
  render() {
    /* return (
      <View>
        <Text> Home </Text>
        <Button onPress={this.goToLogin} title="To Login" />
        <Link to="/Login">点我跳转到登录</Link>
      </View>
    ); */
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#42BD55', //选中时候文本的颜色
        }}>
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            tabBarLabel: '首页', //tab对应的文本
            //tab对应的icon focused代表是否选中 size代表图标大小
            tabBarIcon: ({focused, size}) =>
              focused ? (
                <Image
                  style={{width: size, height: size}}
                  source={require('../assets/imgs/ic_tab_home_active.png')}
                />
              ) : (
                <Image
                  style={{width: size, height: size}}
                  source={require('../assets/imgs/ic_tab_home_normal.png')}
                />
              ),
          }}
        />
        <Tab.Screen
          name="Top"
          component={Top}
          options={{
            tabBarLabel: '排行榜',
            tabBarIcon: ({focused, size}) =>
              focused ? (
                <Image
                  style={{width: size, height: size}}
                  source={require('../assets/imgs/ic_tab_shiji_active.png')}
                />
              ) : (
                <Image
                  style={{width: size, height: size}}
                  source={require('../assets/imgs/ic_tab_shiji_normal.png')}
                />
              ),
          }}
        />
        <Tab.Screen
          name="My"
          component={My}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({focused, size}) =>
              focused ? (
                <Image
                  style={{width: size, height: size}}
                  source={require('../assets/imgs/ic_tab_profile_active.png')}
                />
              ) : (
                <Image
                  style={{width: size, height: size}}
                  source={require('../assets/imgs/ic_tab_profile_normal.png')}
                />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
