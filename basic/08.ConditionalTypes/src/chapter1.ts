/**
 * 분산적인 조건부 타입
 * distributive conditional typs
 *  T extends X
 *  [T] extends [X]
 *   * T 에 union type을 넣으면 분산적인 동작이 일어나지 않는다.
 */

// type StringNumberSwitch<T> = T extends number ? string : number;
type StringNumberSwitch<T> = [T] extends [number] ? string : number; // 분산 안되게 하고 싶으면

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; // let c: string | number
//  StringNumberSwitch<number> |
//  StringNumberSwitch<string>

let d: StringNumberSwitch<boolean | number | string>;
// [T] extends [number] -> d : boolean, number, string의 합집합이 number -> 거짓 = let d: number

// 1 단계 분리
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number>  |
// StringNumberSwitch<string>

/// 2단계
// number |
// string |
// number

// 결과
// number |  string

/**
 * 실용적 예제
 * T extends U : T가 U의 subType인지
 */

type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>;

// 1단계
// 분산
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2 단계
// number |
// never |
// boolean

// 결과
// number | ( never )| boolean
// never (공집합) 사라짐: union 합집합

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;

// 1 딘계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never
// string
// never

// 결과
// string
