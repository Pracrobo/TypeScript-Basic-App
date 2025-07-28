# 인터페이스

- 타입에 이름을 지어주는 또 다른 문법
- 상호간에 약속된 규칙
- 객체의 구조를 정의하는데 특화된 문법(상속, 합침 등의 특수한 기능을 제공한다)

```ts
type A = {
  a: string;
  b: number;
};

interface A {
  a: string;
  b: number;
}
```

## vs Type Alias

- interface : extends, declaration merging

## method overloading

- 호출 시그니처 타입 정의 방식을 사용해야 한다.
