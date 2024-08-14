function add(a, b) {
  return a + b;
}

const result = add(2, 5);

console.log(result);

// 타입스크립트는 자바스크립트의 슈퍼셋으로 브라우저에서는 실행되지 않음
// 컴파일 단계에서 타입스크립트 코드는 사라짐
// 컴파일 단계에서 오류를 찾아줌
// npm install typescript
// npx tsc with-typescript.ts