// 배열
let numArr: number[] = [1, 2, 3];
// 배열의 타입 정의
let strArr: string[] = ["hello", "im", "Pracrobo"];

let boolArr: Array<boolean> = [true, false, true];
// Array<type> : 제네릭 문법

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];
// ( type1 | type2 ) : union 타입

// 다차원 배열의 타입 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

let doubleArr2: (number | string)[][] = [
  [1, 2, 3],
  ["hello", "stranger"],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// 길이와 타입이 고정된 것
//tup1= [1,2,3];  (X)
// tup1= ["1","2"] (x)

let tup2: [number, string, boolean] = [1, "2", true];
// 길이가 다르거나 타입이 다르면 안됨

tup1.push(1); // 배열 메서드는 길이제한이 안생겨서
tup1.pop(); // 제거

const users: [string, number][] = [
  ["Pracrobo", 1],
  ["Stanger", 2],
  ["김씨", 3],
  ["노씨", 4],
  //  [5, "최씨"], // 오류발생을 알 수 있음
];
