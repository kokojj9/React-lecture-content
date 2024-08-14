import Todos from "./components/Todo";

function App() {
  return (
    <div>
      <Todos items={["Learn React", "Learn TypeScript"]} />{" "}
      {/*타입을 명시했기 때문에 밑줄이 생김*/}
    </div>
  );
}

export default App;
