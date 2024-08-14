function add(a, b) { // 타입 표기는 사라지고
    return a + b;
}
var result = add(2, 5); // var로 바뀌어있음 구버전 브라우저에서도 동작하도록
// 설정으로 바꿔줄 수 있음
console.log(result);
// 타입스크립트는 자바스크립트의 슈퍼셋으로 브라우저에서는 실행되지 않음
// 컴파일 단계에서 타입스크립트 코드는 사라짐
// 컴파일 단계에서 오류를 찾아줌
// npm install typescript
// npx tsc with-typescript.ts
