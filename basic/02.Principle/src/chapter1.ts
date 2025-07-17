/**
 * Unknown 타입
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
}

/**
 * never 타입
 * 모든 집합의 부분 집합 : 공집합
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
  // let never1 : never = 10; // 오류
}

/**
 * void 타입
 *
 */

function voidExam() {
  function voidFunc(): void {
    console.log("h1");
    return undefined; // 가능 밑에 변수랑 같은 맥락
  }
  let voidVar: void = undefined; // 가능
}

/**
 * any 타입
 */

function anyExam() {
  // 타입 계층도를 무시함
  // never의 subtype만 빼고
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  anyVar = unknownVar;
  undefinedVar = anyVar;
}
