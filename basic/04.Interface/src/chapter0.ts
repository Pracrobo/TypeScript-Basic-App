/**
 * 인터페이스
 * 이름 정의할때 IPerson 이런식으로 정의하는 경우도 있음(선택적) - 헝가리안 표기법 (JavaScript에서는 snake_case, camelCase, ParscalCase)
 * 이런건 팀 내 컨벤션에 따라 다르다
 */
interface Person {
  readonly name: string;
  age?: number;
  sayHi: () => void; // or
  sayHello(): void; // 호출 시그니처 메서드명(): 반환값;
  sayHello(a: number, b: number): void; // 호출 시그니처  - 오버로드 시그니처로 만들 수 있음
  //   (): void; // 밑에 type Func랑 똑같은것
}
// 함수타입 정의하는 것
// type Func = {
//   (): void;
// };

// const func: Func = () => {};

// 타입 별칭에 정의해야한다
// type Type1 = number | string | Person; // 유니온 타입
// type Type2 = number & string & Person; // 인터섹션 타입

// type 주석에  Person | number 이렇게 정의하던가
const person: Person = {
  name: "Pracrobo",
  //   age: 30,
  sayHi: function () {
    console.log("Hi");
  }, // 메서드
  sayHello: function () {
    console.log("Hello");
  },
};

// person.name = "홍길동";
person.sayHi();
person.sayHello(1, 2);
