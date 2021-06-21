export default function reducer(
  state = {
    list: [],
    start: 0,
    total: 1,
    refreshing: false,
  },
  action,
) {
  switch (action.type) {
    case 'setData':
      return {
        ...state,
        ...action.payload,
      };
    case 'changeRefreshing':
      return {
        ...state,
        refreshing: action.payload,
      };
    default:
      return state; //设置默认值
  }
}
