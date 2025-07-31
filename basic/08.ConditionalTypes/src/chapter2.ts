/**
 *  infer :  조건 부 타입 내에서 타입 추론하기
 *  inference ( 추론하다 )
 */

type FuncA = () => string;

type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;
type ReturnType<T> = T extends () => infer R ? R : never;
////                                 --- R ---
// type A :
// () => R  true가 되게 만드려는 값을 R로 추론 : string
// return R  = string

// type B  :
// () => R  true가 되게 만드는 R 은 number
// return R = number

// type C :
// number extends () => R true가 되게 만드는 R은 any도 불가 (super type도 되기엔)
//  return false : never

type A = ReturnType<FuncA>;
// type A = string
// () => string extends () => string;  subtype이냐 true

type B = ReturnType<FuncB>;
// 조건식 서로소 타입이 된다. type B = never;
// 원하던 것은 type A = string , type B = number 가 들어가길 바랬는데 다르게 나옴

type C = ReturnType<number>;
// type C = never

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 요구사항
// 1. T는 Promise 타입
// 2. Promise 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
//number 원함
type PromiseB = PromiseUnpack<Promise<string>>;
// string 원함
