/**
 * 제네릭
 *,함수를 호출할때 타입을 결정
 */
// 제네릭 함수
/// 타입 변수 선언
function func<T>(value: T): T {
  return value;
}

let num = func(10); //let num: any
// num.toUppercased();
// num.toFixed(); // 숫자처럼 쓰려면 타입좁히기로 조건문으로 해야 된다.

let boolean = func(true); // let boolean: unknown
let str = func("String");

let arr = func([1, 2, 3] as [number, number, number]); // let arr: number[]
let arr2 = func<[number, number, number]>([1, 2, 3]); // let arr2: [number, number, number] 튜플 타입으로 변경
