const NewTodo = () => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault(); // 데이터 타입을 정의했기때문에 preventDefault를 사용할 수 있음
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
