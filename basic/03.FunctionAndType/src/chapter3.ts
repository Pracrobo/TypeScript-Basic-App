// 함수 오버로딩
// 함수를 중복으로 선언하는데 매개변수의 개수가 다르면 함수 오버로딩
// javascript 지원 X, typescript 지원 O

/**
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 Func
 * -> 모든 매개변수의 타입 number
 * -> 매개변수 1개 : 이 매개변수에 20을 곱한 값 출력
 * -> 매개변수 3개 : 이 매개변수들을 다 더한 값을 출력
 */
//version들이 다른 것을 알려주는 선언식만 써놓은 것을 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 함수 실제 구현부 = 구현 시그니처 : 오버로드 시그니처를 만들어두면 version에 따라 맞춰서 오류가 발생하지 않는다.
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
} // 버전1 에서 오류가 나는데 오버로드 시그니처가 해당 구현 시그니처와 호환되지 않는다. -> 버전 1이 존재 의미가 없어져서

// func(); // 오류
func(1);
// func(1, 2); // 오류
func(1, 2, 3);
