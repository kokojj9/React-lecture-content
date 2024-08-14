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

let person: {
  name: string;
  age: number;
}; // 객체를 지정하는 방법 해당 타입의 속성 외엔 대입할 수 없음

person = {
  name: "ji",
  age: 32,
};

let people: {
  name: string;
  age: number;
}[]; //객체 배열로도 가능

// 타입 추론
let course = 'React - The Complete Guide';
course = 123123; // 타입을 입력하지 않았는데 밑줄 발생
// 타입스크립트의 기능 -> 타입을 추론해줌
