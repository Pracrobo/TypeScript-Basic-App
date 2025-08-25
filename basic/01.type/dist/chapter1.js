// number
let num1 = 123;
let num2 = -123;
let num3 = Infinity;
let num4 = -Infinity;
let num5 = NaN;
// : 타입 - 타입주석, 타입 annotation
//String
let str1 = "hello";
let str2 = "hello";
let str3 = `hello`;
let str4 = `hello ${num1}`;
// boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let nude1 = undefined;
// let numA: number = null; // 허용 안됨
// tsconfig.json 에 "strictNullChecks" : false 로 꺼버리면 null값 엄격하게 검사 안함
// 리터럴 타입(값 타입)
let numA = 10;
export {};
//numA = 12; // 값으로만 타입을 정의했기 때문에 이건 정의 될 수 없음
// number, string, boolean 세가지 다 리터럴 타입에 쓸 수 있다.
