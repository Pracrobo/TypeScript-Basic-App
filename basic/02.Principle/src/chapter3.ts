/**
 * 대수타입
 * 여러개의 타입을 합성해서 새롭게 만들어낸 타입을 의미
 * 합집합 타입과 교집합 타입이 존재
 */

/**
 * 합집합 (Union 타입)
 *
 */

let a: string | number | boolean | undefined | null;
a = 1;
a = "hello";
let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;
/**
 * 별칭으로 정의해도 된다.
 */

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  language: "",
  color: "",
};
/**
 * 혼합도 가능, 같은 프로퍼티인 name만 단독은 안됨
 */

// let union4: Union1 = {
//   name: "",
// };
// 아무것도 충족되지 않는 union4는 오류가 발생

/**
 * 2. 교집합 타입 : Intersection 타입 , AND 로 연결
 */
let variable: number & string;
//'variable' is declared but its value is never read.
// never 타입 : 불가능, 공집합
// 웬만하면 거의 다 never 타입이다

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};

// 프로퍼티가 하나라도 빠지면 오류
