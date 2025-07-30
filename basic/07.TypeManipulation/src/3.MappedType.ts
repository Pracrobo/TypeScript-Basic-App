/**
 * Mapped Type
 * 타입 별칭으로만 써야 한다. interface 불가
 * 기존 객체 타입을 기반으로 속성들을 순회하며 새로운 속성 구조를 가지는 객체타입을
 * 효율적으로 생성하거나 변형할때 사용할 수 있다.
 */

interface User {
  id: number;
  name: string;
  age: number;
}
// 3_ interface로 정의해서 property? : 정의 하기엔 너무 위에 인터페이스랑 똑같음
// ex) interface PartialUser = {
//   id? : number;
//   name? : string;
//   age? : number;
//  }
// 이런식으로 작성 후에 밑에
// function updateUser(user: PartialUser) {
// }
// updateUser({
//   name: "Kim", // 여기 한 군데를 수정하기 위해서 위에 인터페이스 정의까지 많은 부분이 User 객체와 겹치게 된다
// });

// 4_  그래서 해결방법으로, type로 정의해주고 Mapped Type을 선언해준다.
type PartialUser = {
  // 5_key 키워드 in 키워드 프로퍼티는 유니온타입으로
  // 5_대괄호 [] 안은 key가 무엇이 될 수 있는지 정의, : value타입을 가질 것인지 정의
  [key in "id" | "name" | "age"]?: User[key];
};
// 6_ 해석하면 밑에처럼 객체가 된다.
/** {
 *   id : User["id"] >>>  number
 *   name : User["name"] >>> string
 *   age : User["age"] >>> number
 *  }
 */
// 7_ []? >> 선택적 프로퍼티가 된다.
/**
 * type PartialUser = {
        id?: number | undefined;
        name?: string | undefined;
        age?: number | undefined;
    }
 */

type BooleanUser = {
  [key in keyof User]?: boolean;
};
//'BooleanUser' is declared but never used.ts(6196)
// type BooleanUser = {
//     id?: boolean | undefined;
//     name?: boolean | undefined;
//     age?: boolean | undefined;
// }

// 모든 property가 readonly라면
type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};
// user 정보 서버 저장되어 있다고 가정
// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadOnlyUser {
  // 기능 ...
  return {
    id: 1,
    name: "robo",
    age: 30,
  };
}

const user = fetchUser();
// user.id  =1; // 수정할 수 없게 된다. readonly

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // 수정하는 기능 ...
}
// 2_ User객체로 타입으로 정의되어서 하나의 파라미터만 바꾸기가 애매함
updateUser({
  //   id: 1,
  name: "Kim", // 1_ 여기만 수정한다고 했을떄 값을 다 보낼 필요가 있을까?
  //   age: 30,
});
