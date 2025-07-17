/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;
num1 = num2; // upcasting
// num2 = num1 // downcasting

/**
 * 객체 타입 간의 호환성
 * 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 *
 */
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "구름",
  color: "white",
  breed: "말티즈",
};

animal = dog;
// dog = animal; // 오류 발생
/**
 * 프로퍼티의 타입에 따라 정해지는 구조적 타입 시스템을 따른다.
 */
