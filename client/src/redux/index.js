import { combineReducers, createStore } from 'redux';

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT = 'LOGOUT';
const QUESTION = 'QUESTION';

// 일반 검색 type
const SEARCH_GEN = 'SEARCH_GEN';
// 태그 검색 type
const SEARCH_TAG = 'SEARCH_TAG';

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

// 현재 조회한 question 데이터
export const questionAction = (res) => {
  return {
    type: QUESTION,
    payload: res,
  };
};

// search한 데이터
export const searchGenAction = (res) => {
  return {
    type: SEARCH_GEN,
    payload: res,
  };
};
export const searchTagAction = (res) => {
  return {
    type: SEARCH_TAG,
    payload: res,
  };
};

// // 질문 작성 데이터 (Title)
// export const askTitleAction = (res) => {
//   return {
//     type: 'TITLE',
//     payload: res,
//   };
// };
// 질문 작성 데이터 (Title)
export const askTitleAction = (res) => {
  return {
    type: 'TITLE',
    payload: res,
  };
};

// 질문 작성 데이터 (Body)
export const askBodyAction = (res) => {
  return {
    type: 'BODY',
    payload: res,
  };
};

// 질문 작성 데이터 (Tags)
export const askTagsAction = (res) => {
  return {
    type: 'TAGS',
    payload: res,
  };
};

//리듀서에 넣을 초기값 -> 내가 관리할 state 객체의 모습
const initialstate = {
  isLogin: false,
  question: null,
  searchGen: '',
  searchTag: '',
  ask: {
    title: null,
    body: null,
    tags: [],
  },
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

const questionReducer = (state = initialstate, action) => {
  switch (action.type) {
    case QUESTION:
      // console.log('action.payload:', action.payload);
      return {
        question: action.payload,
      };
    default:
      return state;
  }
};

const searchReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SEARCH_GEN:
      console.log(
        'redux -> case Search_gen -> action.payload: ',
        action.payload
      );
      return {
        searchGen: action.payload,
      };
    case SEARCH_TAG:
      console.log(
        'redux -> case Search_tag -> action.payload: ',
        action.payload
      );
      return {
        searchTag: action.payload,
      };
    default:
      return state;
  }
};
const askReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'TITLE':
      return {
        ...state,
        title: action.payload,
      };
    case 'BODY':
      return {
        ...state,
        body: action.payload,
      };
    case 'TAGS':
      // console.log('TAGS:', action.payload);
      return {
        ...state,
        tags: action.payload,
      };
    default:
      return state;
  }
};

//리듀서가 1개인데, combineReducers가 필요한가?
const combinedReducer = combineReducers({
  loginReducer,
  questionReducer,
  searchReducer,
  askReducer,
});

// const store = createStore(loginReducer);
const store = createStore(combinedReducer);

export default store;
