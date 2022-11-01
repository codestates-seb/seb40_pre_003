import { createStore } from 'redux';

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT = 'LOGOUT';

//액션객체생성자 -> 디스패치 함수에 전달인자로 담길 예정
//로그인되면, 로그인된 id를 함께 담을 예정..
export const loginAction = (res) => {
  return {
    type: LOGIN_USER,
    payload: res,
  };
};

//로그아웃은 보관하고 있던 id를 날리는 것
export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

//리듀서에 넣을 초기값 -> 내가 관리할 state 객체의 모습
const initialstate = {
  isLogin: false,
};

//리듀서함수 -> 디스패치가 호출하면 state를 바꿈
const loginReducer = (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        isLogin: true,
        id: action.payload, //로그인되면, 로그인된 id를 함께 담을 예정..
      };
    case LOGOUT:
      return {
        isLogin: false,
      };
    default:
      return state;
  }
};

//리듀서가 1개인데, combineReducers가 필요한가?
// const combinedReducer = combineReducers({
//     loginReducer,
// })

const store = createStore(loginReducer);
export default store;
