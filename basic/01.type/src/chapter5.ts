// enum타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0, ///자동으로 0부터 들어가기도 해서, 또는 10부터 시작하고 싶으면 10 넣고
  USER = 1, // 나머지는 놔둬도 되고, 중간부터 10 이렇게 써도 된다.
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}
// enum은 컴파일시 안사라진다.

const user1 = { name: "Pracrobo", role: Role.ADMIN, language: Language.korean }; // 관리자
const user2 = { name: "Kim", role: Role.USER }; //일반 유저
const user3 = { name: "Lee", role: Role.GUEST }; // 게스트

console.log(user1, user2, user3);

// 숫자형 Enum
// 문자열도 할당 가능
