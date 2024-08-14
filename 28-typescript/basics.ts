// 기본 자료형 : number, string, boolean, (null, undefind) 거의 안씀
// 복잡한 자료형 : arrays, objects
// Function types, parameters

// 기본
let age: number = 24; // 타입을 대문자로 시작하면 자바스크립트의 Number객체가 지정됨
age = 12;

let userName: string;

userName = "ji";

let isInstructor: boolean;

isInstructor = true;

//복잡
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

//type aliases에 대해
type Person = {
  //자료형을 지정할 수 있음
  // 타입스크립트의 코드이기 때문에 컴파일단계에서 지워짐
  name: string;
  age: number;
}; // 객체를 지정하는 방법 해당 타입의 속성 외엔 대입할 수 없음

let person: Person;

person = {
  name: "ji",
  age: 32,
};

let people: Person[]; //객체 배열로도 가능

// 타입 추론
let course: string | number = "React - The Complete Guide"; // union 타입
course = 123123; // 타입을 입력하지 않았는데 밑줄 발생 union타입으로 지정하니 밑줄 사라짐
// 타입스크립트의 기능 -> 타입을 추론해줌

// Function & types
function add(a: number, b: number): number {
  // 반환형을 명시적으로 지정해줄 수 있음
  //정보를 보면 함수 자체에도 :number가 붙어있는걸 알 수 있음
  return a + b; // 반환형을 숫자라고 추론한것임
}

function print(value: any) {
  // print라는 내장 함수가있어서 충돌이 일어나게됨 원래라면 함수명을 바꿔줘야함
  // void는 함수에만 있는 특별한 자료형
  console.log(value);
}
