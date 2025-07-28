/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 * */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; //number 타입
let b: B = () => 10; // number리터럴 타입이라 다른 값 오류
a = b;
// b = a; // 허용안됨 다운캐스팅이라 안됨

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을때
type C = (value: number) => void;
type D = (value: 10) => void;
let c: C = (value) => {};
let d: D = (value) => {};

// c = d; //upcasting : parameter 로 하는 것은 안된다.
// d = c; // downcasting : parameter 로 하는 것은 된다.

type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};

// supertype
let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};
//animalFunc = dogFunc; // 호환 안됨
dogFunc = animalFunc; // 호환 가능

// 호환 허용안됨
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //   console.log(animal.color); // animal에 속성이 없으니까
};
// 호환 허용됨
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; // 허용안됨
// 할당하려는 타입의 함수의 매개변수가 적어야 한다.
