const TodoItem: React.FC<{text: string}> = (props) => {
  return <li>{props.text}</li>;
};
// 아직 children속성밖에없기애 text에 밑줄이 생김 -> 제네릭 설정

export default TodoItem;
