import React from "react";

import TodoItem from "./TodoItem";
import Todo from "../models/todo";
import classes from'./Todos.module.css'


// 함수 컴포넌트 제네릭을 설정 FC는 React에 포함된 타입임
// 함수형 컴포넌트로 동작한다는 것을 명시적으로 만들어줌
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  // 리액트는 다른 방법을 제공합니다
  // 리액트와 타입스크립트가 제공하는 방법이라고 할 수도 있고요
  // 바로 제네릭 타입을 이용하는 겁니다, 아마 기억하실 거예요
  // 제네릭 타입을 이용해서, 정확히 말하자면
  // 함수형 컴포넌트를 바로
  // 제네릭 함수로 변환해서 이용하는 겁니다
  // 이 말이 의미하는 바는
  // 우리가 만든 함수형 컴포넌트에서
  // 몇 가지 설정을 추가하여
  // 리액트 함수형 컴포넌트로 동작하도록 만들어
  // children 같은 기본 props를 사용할 수 있도록 하는 겁니다
  // 그런 다음 새로운 props를 추가로 정의합니다
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
