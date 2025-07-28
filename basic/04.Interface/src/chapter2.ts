/** 선언 합침
 *
 */
//  타입 별칭 두번 정의 : 에러
// type Person  = {
//     name: string;
// }

// type Person = {
//     age: number;
// }

interface Person {
  name: string;
}
interface Person {
  //   name: number; // 동일한 프로퍼티 다르게 타입 정의하면 충돌 , 충돌 허용 안됨
  // 동일한 타입으로만 선언해야 한다.
  // 라이브러리의 타입이 부실할 때 module 보강이라는 작업을 할때 사용한다.
  age: number;
}
// 동일한 이름으로 두개 인터페이스 정의해도됨: 선언 합침
// declaration merging

const person: Person = {
  name: "",
  age: 27,
};
// 객체 타입으로 정의된다.
// 확장
interface Developer extends Person {
  name: "hello";
}

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}
// 모듈 보강 Module Augmentation
// 라이브러리는 보통 node_modules 에 정의되서 거기서 불러와서 해야하므로 조금 단계가 있다.
interface Lib {
  c: string;
}
const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello", // 새로운 프로퍼티 추가한다면,
  // 선언 합침 사용하기
};
