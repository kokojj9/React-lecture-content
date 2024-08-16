import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]); 컨텍스트 api로 옮김
  // 빈배열을 초기값으로 넣으면 never[]타입을 갖는데
  // 이럴 경우 어떠한 값도 배열에 들어올 수 없음
  // 제네릭을 설정해 줄 수 있음

  // const addTodohandler = (text: string) => {
  //   const newTodo = new Todo(text);

  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // };

  // const removeTodoHandler = (id: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter((todo) => todo.id !== id);
  //   });
  // }; 컨텍스트 api로 옮김

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
      {/*타입을 명시했기 때문에 밑줄이 생김*/}
    </TodosContextProvider>
  );
}

export default App;
