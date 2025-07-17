// 객체 Object - 객체 리터럴 타입으로 정의해줘야 한다. {프로퍼티 하나하나당 타입을 지정}
let user = {
    id: 1,
    name: "Pracrobo",
};
//Object로 한다면 user.id; // 오류발생, 프로퍼티에 id 속성이 없다.
// 객체다 라는 정보외에 아무것도 모르기 때문에
let dog = {
    name: "바둑이",
    color: "black",
};
// 구조를 기준으로 타입을 정의 - 구조적 타입 시스템
// property based TS
// 이름만을 가지고 타입을 정하는 것은 명목적 타입 시스템, TS는 구조적 타입 시스템
user = {
    name: "홍길동",
};
// ?는 프로퍼티가 있어도 되고 없어도 된다.
// 선택적 프로퍼티 Optional Property
let config = {
    apiKey: "MY API KEY",
};
export {};
// 값을 변경 못하게 하려면 readonly를 타입에 적어준다.
