/**
 * 첫번째 사례
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}
const [a, b] = swap(1, 2);
const [c, d] = swap("1", 2); // string type으로 발생

/**
 * 두번째 사례
 *
 */
// 튜플 [T, ...unknown[]]
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  // 호출전이라 unknown 타입이 된다. [] 로 제너럴 타입에 써준다
  return data[0]; // unknown인덱스 형식에 배열을 쓰면 안됨
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, "Hello", "mynameis"]); //let str: string | number union 타입으로 된다.

let str2 = returnFirstValue([2, "Stirng", "string2"]); //let str: number으로 잘 추론 된다.

/**
 * 세번째 사례
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");

let var3 = getLength({ length: 10 });
