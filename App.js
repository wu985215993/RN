/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'; //必须放在第一行
import React from 'react';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Reg from './src/pages/Reg';
import List from './src/pages/List';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
// const App: () => React$Node = () => {
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '首页',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#fff', //标题文本颜色
            },
            headerStyle: {
              backgroundColor: 'green', //标题背景颜色
              elevation: 0, //去除阴影
            },
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Reg" component={Reg} />
        <Stack.Screen
          name="List"
          component={List}
          options={{
            title: '列表',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
