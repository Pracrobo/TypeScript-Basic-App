/**
 * 타입 단언
 * type assertion
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // 타입 단언
person.name = "";
person.age = 30;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "white",
  breed: "진도", //초과 프로퍼티 검사 발동
} as Dog; // 별칭으로 단언하고 정의하지 않아도 추론될 수 있다.

/**
 * 타입 단언의 규칙
 * 값 as 단언 < 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 한다.
 */

let num1 = 10 as never;
// never 가 모든 타입의 sub 타입이므로
let num2 = 10 as unknown;

//let num3 = 10 as string; // number 와 string이 아예 겹치는 부분이 없기 때문에 오류발생
//Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

let num3 = 10 as unknown as string; // 이렇게 한번 단언하고 그다음 또 단언하는 것 : 다중 단언
// 좋은 방법은 아니다.

/**
 * const 단언
 */

let num4 = 10 as const;

// 객체타입과 사용할때 readonly로 만들 수 있다.
let cat = {
  name: "야옹이",
  color: "cheeze",
} as const;
/**
 * let cat: {
    readonly name: "야옹이";
    readonly color: "cheeze";
}
 */

/**
 * Non Null 단언
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "Pracrobo",
};

const len: number = post.author!.length;
// ? : 옵셔널 체이닝 null, undefined 일 때
// Type 'number | undefined' is not assignable to type 'number'.
// Type 'undefined' is not assignable to type 'number'.
// ! : non null 단언
