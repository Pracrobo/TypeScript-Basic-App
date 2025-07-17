// enum타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
// enum은 컴파일시 안사라진다.
const user1 = { name: "Pracrobo", role: Role.ADMIN, language: Language.korean }; // 관리자
const user2 = { name: "Kim", role: Role.USER }; //일반 유저
const user3 = { name: "Lee", role: Role.GUEST }; // 게스트
console.log(user1, user2, user3);
export {};
// 숫자형 Enum
// 문자열도 할당 가능
