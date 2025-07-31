/**
 * 조건부 타입 기반의 유틸리티 타입들
 * Exclude<T, U>
 * Extract<T, U>
 * ReturnType<T>
 */

/**
 * Exclude<T,U> : 제외하다 추방하다
 * T에서 U를 제거하는 타입
 */
// 직접 구현
type Exclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude <string, boolean>
// Exclude <boolean, boolean>

// 2단계
// string |
// never

// 최종적으로 string | never -> string
type A = Exclude<string | boolean, boolean>; // type A = string

/***
 * Extract<T, U>
 * T에서 U를 추출하는 타입
 */
// 직접 구현
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>; // type B = boolean

/**
 * ReturnType<T>
 * 함수의 반환값 타입을 추출하는 타입
 */
// 직접 구현
// 함수타입만 , any가 반환값인, args : any -> subtype만 갖게 됨
// ex) 결과 () => string = T
// () => string  extends ()=> R:string
// T extends (...args : any) infer R ? R : any
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;
function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>; // A 의 반환값인 string

type ReturnB = ReturnType<typeof funcB>; // B의 반환값인 number
