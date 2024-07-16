// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter.js";
import authReducer from './auth.js';
// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   // redux를 사용할때에는 기존의 state를 절대 변경해서는 안됨!!
//   // 깊은 복사를 하거나 새 객체를 반환해야함!
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//       // 이 속성을 넣지않으면 버튼을 누를때 객체에서 사라져 undefind가 되어
//       // false값으로 읽히기 때문에 카운트가 사라지게됨
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

const store = configureStore({
  // 여러 리듀서를 병합해줄 수 있음
  // reducer: { counter: counterSlice.reducer } // 이런식으로
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
