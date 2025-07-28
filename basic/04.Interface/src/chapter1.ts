/**
 * 인터페이스 확장(객체 타입이면 다 확장 가능) - 상속(super type에서 properties 를 받는 것)
 * 기존의 것들을 가지고 더 추가해서 만든다는 뜻
 */
type Animal = {
  name: string;
  color: string;
};
interface Dog extends Animal {
  //   name: "hello"; // 원본타입의 sub type이어야 함 ex) number로 재정의 한다면 불가
  isBark: boolean;
}
const dog: Dog = {
  //   name: "", // 지금 string literal type으로 되어서 에러나는 것
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScrath: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScrath: true,
};
