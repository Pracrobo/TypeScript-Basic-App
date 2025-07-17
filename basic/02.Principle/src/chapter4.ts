/**
 * 타입 추론
 * 점진적 타입 시스템
 * 모든 상황에 다 정의해주진 않는다.
 * ex) 함수에 매개변수 type을 정해주지 않으면 오류 발생
 *
 *
 * 타입 넓히기 범용적으로 범위를 넓히는
 */

let a = 10;
let b = "hello";

/**
 * 변수의 초기값을 기준으로 타입을 추론한다.
 */

let c = {
  id: 1,
  name: "Pracrobo",
  profile: {
    bio: "Hello, World",
  },
  urls: ["https://github.com/Pracrobo"],
};

let { id, name, profile } = c;

function func(message = "hello") {
  return "hello";
}

let d;
// any 타입으로
d = 10;
d.toFixed();
//d.toUpperCase(); //Property 'toUpperCase' does not exist on type 'number'

d = "hello";
// d.toFixed();// Property 'toFixed' does not exist on type 'string'.
d.toUpperCase();

/**
 * 암묵적 any 타입, 타입의 진화
 */

/**
 * const 키워드로 변수 사용
 */

const num = 10; //const num: 10
// 리터럴 타입으로 지정 상수이기 때문에
const str = "hello"; //const str: "hello"

let arr = [1, "string"];
// let arr: (string | number)[]
