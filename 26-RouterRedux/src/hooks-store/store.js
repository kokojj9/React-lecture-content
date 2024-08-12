import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

//useState는 state를 업데이트 했을 때, 이것을 사용하는 모든 컴포넌트를 재랜더링하게됨
export const useStore = () => {
  const setState = useState(globalState)[1]; // set함수만 필요해서 이렇게 설정함

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState); // 함수에 대한 포인터를 listeners로 push

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (useActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...useActions };
};
