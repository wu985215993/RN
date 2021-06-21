/* 
  核心概念
  store 数据仓库 ， 一个项目只有一个store
  action 通知对象，每次ixugai数据必须通过dispat派发通知对象
  reducer 计算者 规定了数据修改的规则
  function reducer(state={},action){
    switch(action.type){
      default: return state //设置默认值
    }
  }
*/

import {createStore} from 'redux';
import reducer from './reducers/index';
export default createStore(reducer);
