# [TypeScript](https://www.typescriptlang.org/ko/)

- 자바스크립트의 확장판

ex)

```ts
let a: number = 1;
let b: number = 2;
console.log(a + b);
```

- 타입 관련 기능들이 추가된 언어(Types by Inference)
- JS의 문법 등을 사용할 수 있음

- JS는 자유롭고 유연한 문법인 대신 버그 발생 가능성이 높다.

vs Node.js 구동기(런타임)

- 웹서버, 모바일 앱, 데스크탑 앱 등을 만들때 씀
- JavaScript의 문제점이 버그 발생 가능성이 높기 때문에 프로그램의 안정성을 떨어뜨림
- 안정성을 추가한 언어를 추가하자 ! => 타입스크립트 등장 배경

## JS의 단점과 TS

JS + 안정성 = TypeScript

JS는 도대체 어떤 한계점이 있을까?
타입 시스템 = 모든 프로그래밍 언어는 타입 시스템이 존재한다.

Number, Boolean, String ...
어떻게 검사, 언제 검사할지, 값을 어떤 기준으로 타입을 규정할지?

타입 시스템 = 정적 타입 시스템(실행 전 변수의 타입을 고정적으로 결정/ C, Java) + 동적 타입 시스템(유동적으로 변수 타입을 결정함/ Python, JavaScript)

```js
let a = "hello";
a = 1234;
a.toUpperCase();
// 실행되지만, Type Error 발생
```

-> 실행 전에 에러를 발견하는게 좋아 왜냐면 복잡한 코드에서 예상치 못한 에러로 인해 뒤늦게 발생되는 것들이 있기 때문에 안좋음

- 정적 타입 시스템 = 모든 변수 의 타입을 다 지정해줘야 함

```java
String a = "Hello";
int b = 123;

int c = a * b;
```

> > > type error를 에디터상에서 빨간줄로 나온다.

단점 / 정적타입시스템 : 타이핑 양이 매우 증가한다.

TS : 동적 타입 시스템 + 정적 타입 시스템(코드 실행 전에 타입을 검사함)

```ts
let a: number = 1;
a.toUpperCase();

---
let a = 1;
a.toUpperCase();
```

- Types by Inference 타입 추론이라는 것도 있다.

= 점진적 타입 시스템(Gradual Type System)

## Reference

- [TypeScript Doc](https://www.typescriptlang.org/ko/docs/)
- [TypeScript 교재](https://ts.winterlood.com/)
- [TypeScript 참고서](https://joshua1988.github.io/ts/intro.html#%EC%B1%85%EC%9C%BC%EB%A1%9C-%EB%8D%94-%EC%9E%90%EC%84%B8%ED%9E%88-%EB%B0%B0%EC%9A%B8-%EC%88%98-%EC%9E%88%EC%96%B4%EC%9A%94-%F0%9F%8E%81)
