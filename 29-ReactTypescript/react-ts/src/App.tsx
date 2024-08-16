import NewTodo from "./components/NewTodo";
import Todos from "./components/Todo";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  const addTodohandler = (text: string) => {

  };

  return (
    <div>
      <NewTodo onAddTodo={addTodohandler} />
      <Todos items={todos} />
      {/*타입을 명시했기 때문에 밑줄이 생김*/}
    </div>
  );
}

export default App;
