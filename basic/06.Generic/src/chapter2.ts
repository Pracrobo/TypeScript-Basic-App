/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2, 4, 6]
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
map(arr, (it) => it * 2);
map(["hi", "hello"], (it) => it.toUpperCase());
// T : String
// U : number 타입이 콜백함수에 의해서 그때 할당됨
map(["hi", "hello"], (it) => parseInt(it)); // callback함수도 string으로 되기 때문에 오류가 발생

/**
 * forEach 메서드
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(["123", "456"], (it) => {
  it;
});
