class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}
// 정의된 클래스는 인스턴스화 시켜야함
// 클래스이름을 자료형으로 사용가능 자바와 같음

export default Todo;
