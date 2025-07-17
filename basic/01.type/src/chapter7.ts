//void : 공허 , 아무것도 없다.

function func1(): string {
  return "Hello";
}
// null은 return null로 써야 하고 undefinded는 return undefined 또는 return을 반환해야 한다.
function func2(): void {
  console.log("hello");
}

let a: void;
/// undefined 만 담을 수 있음
a = undefined;
// stringNullChecks :false면
//a = null; 도 가능하다

// never
// 존재하지 않는, 불가능한 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let b: never;
// a에 아무것도 담을 수 없다.
