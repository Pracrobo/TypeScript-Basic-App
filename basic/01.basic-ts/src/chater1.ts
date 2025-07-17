// number
let num1: number = 123;
let num2: number = -123;
let num3: number = Infinity;
let num4: number = -Infinity;
let num5: number = NaN;
// : 타입 - 타입주석, 타입 annotation

//String
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let nude1: undefined = undefined;

// let numA: number = null; // 허용 안됨
// tsconfig.json 에 "strictNullChecks" : false 로 꺼버리면 null값 엄격하게 검사 안함

// 리터럴 타입(값 타입)
let numA: 10 = 10;
//numA = 12; // 값으로만 타입을 정의했기때문에 이건 정의 될 수 없음
// number, string, boolean 세가지 다 리터럴 타입에 쓸 수 있다.
