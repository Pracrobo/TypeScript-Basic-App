/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

// value => number: toFixed
// value => string: toUpperCase
// string union 타입보다 더 좁은 number 타입임이 보장
// value => Date: getTime
// value => Person: name은 age살 입니다.

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed()); //value: number
  } else if (typeof value === "string") {
    console.log(value.toLowerCase()); // value: string
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age} 살 입니다.`);
  }
}
