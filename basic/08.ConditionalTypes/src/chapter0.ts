/**
 * 조건부 타입
 */

type A = number extends string ? string : number; // number
// 참이면 string, 거짓이면 number
type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // number
// ObjA : Super type

// 활용 : Generic이랑 함께 사용하는게 좋음
/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;
let varA: StringNumberSwitch<number>; // let varA: string
let varB: StringNumberSwitch<string>; // let varB: number
// 1_ 유니온타입으로 정의헸을때
function removeSpaces(text: string | undefined | null) {
  if (typeof text === "string") {
    return text.replaceAll(" ", ""); // 첫번째 인자를 두번째 인자로 모두 바꾸는 함수
    // string 메서드 불가여서 조건부로 해야한다. 타입 좁히기로
  } else {
    return undefined;
  }
}

let result0 = removeSpaces("hi im Pracrobo");
// 근데 remveSpace 자체가 undefined , null이 되어서 밑에 toUpperCase()같은걸 못쓴다.
// result0.toUpperCase();
//result0' is possibly 'undefined'.ts(18048)
// let result0: string | undefined

// 2_ 그래서 제네릭과 조건부 타입을 함께 사용해서 as any 로 타입을 정의해준다.
function removeSpaces2<T>(text: T): T extends string ? string : undefined {
  // 함수내부에서 unknown 이 된다.
  if (typeof text === "string") {
    // String 형식은 'T extends  string ? string : undefined' 형식에 할당할 수 없다고 뜬다. Property 'replaceAll' does not exist on type 'T'
    return text.replaceAll(" ", "") as any; // 그래서 any로 바꿔야 하는데 이게 이 함수 자체가 unknown로 된다. 그럼 의미가 없어지므로 오버로딩을 쓴다.
    // 오버로드 시그니처 만든다.
  } else {
    return undefined as any;
  }
}

let result1 = removeSpaces2("hi im Pracrobo");
let result2 = removeSpaces2(undefined);
result1.toUpperCase();

// 3_ 오버로드 시그니처 만들기 - 타입 정의를 좀더 완벽하게 해준다
function removeSpaces3<T>(text: T): T extends string ? string : undefined;
function removeSpaces3(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result3 = removeSpaces3("hi im Pracrobo");
let result4 = removeSpaces3(undefined);
result3.toUpperCase();
