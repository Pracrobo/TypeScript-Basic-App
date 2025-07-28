/**
 * 사용자 정의 타입 가드
 *
 *
 */
type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// function warning(animal: Animal) {
//   // 서로소 유니온 타입으로 못만드는 상황이라 가정
//   if ("isBark" in animal) {
//     // 강아지
//   } else if ("isScratch" in animal) {
//     // 고양이
//   }
// }
// 이때 사용하는게 사용자 정의 타입 가드 : 매개변수명 is 타입
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}
// 사용자 정의 타입 가드
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
  // animal 타입 좁히기
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log("강아지입니다.");
  } else if (isCat(animal)) {
    console.log("고양이입니다.");
  }
}
