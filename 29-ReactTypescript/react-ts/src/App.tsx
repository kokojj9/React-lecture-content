import Todos from "./components/Todo";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  return (
    <div>
      <Todos items={todos} />
      {/*타입을 명시했기 때문에 밑줄이 생김*/}
    </div>
  );
}

export default App;
