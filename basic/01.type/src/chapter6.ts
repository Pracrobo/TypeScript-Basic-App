//any
// 특정 변수의 타입을 확실히 모를 때
// 가능한 많이 안쓰는게 좋다.
let anyVar: any = 10; // 타입 추론으로 인해 number로 정해짐
anyVar = "hello"; // 오류 발생 -> any로 정하면 된다.
anyVar = {};
anyVar = () => {};

//anyVar.toUpperCase(); // 마지막에 함수이기 때문에 오류
//anyVar.toFixed();

let num: number = 10;
num = anyVar;
// 모든 타입의 변수에 값을 넣을 수도 있다.
//tsx로 실행하면

//unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

//반대로는 안된다.
// num = unknownVar;
// unknownVar.toUpperCase(); // 안됨

if (typeof unknownVar === "number") {
  num = unknownVar;
}
// 타입 정제를 해야만 가능하다
