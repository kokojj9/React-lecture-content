import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};
//컴포넌트 밖에서 선언(전역에서 사용가능)되었는데 만약 안에서 선언되었다면
// 이 훅을 사용하는 모든 컴포넌트는 각각의 값을 사용하게 됐을 것

//useState는 state를 업데이트 했을 때, 이것을 사용하는 모든 컴포넌트를 재랜더링하게됨
export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1]; // set함수만 필요해서 이렇게 설정함

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) { // useState에서 찜하기를 눌렀을때 다른 컴포넌트가 재랜더링 되지 않기 위해
      listeners.push(setState); // 함수에 대한 포인터를 listeners로 push
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (useActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...useActions };
};
