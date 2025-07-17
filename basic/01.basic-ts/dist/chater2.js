// 배열
let numArr = [1, 2, 3];
// 배열의 타입 정의
let strArr = ["hello", "im", "Pracrobo"];
let boolArr = [true, false, true];
// Array<type> : 제네릭 문법
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
// ( type1 | type2 ) : union 타입
// 다차원 배열의 타입 정의하는 방법
let doubleArr = [
  [1, 2, 3],
  [4, 5],
];
let doubleArr2 = [
  [1, 2, 3],
  ["hello", "stranger"],
];
// 튜플
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
// 길이와 타입이 고정된 것
//tup1= [1,2,3];  (X)
// tup1= ["1","2"] (x)
let tup2 = [1, "2", true]; // 이렇게 배열로 작성된다.
export {};
// 길이가 다르거나 타입이 다르면 안됨
