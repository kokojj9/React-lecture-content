import React, { useContext, useRef } from "react";

import { TodosContext } from "../store/todos-context";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  // React.FC의 제네릭을 함수로 표현하기 위한 문법이지 실제 함수가 생성된 것이 아니다
  // () => 반환형을 입력하면 된다.
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault(); // 데이터 타입을 정의했기때문에 preventDefault를 사용할 수 있음

    const enteredText = todoTextInputRef.current!.value;
    // 레퍼런스값이 아직 정의되지않았기 때문에 ?를 자동으로 붙혀줌
    // ! 도 사용할 수 있는데 기본값은 null이지만 실행 시점에서
    // 절대 null이 아닐경우 100% 확신할때 사용 할 수 있음
    // null일수도있는 값에 대해서는 ?로 먼저 접근해보고 나중에 !로 수정할 수 있음
    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
