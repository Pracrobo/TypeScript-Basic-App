/**
 *  제네릭 클래스
 *
 */
class List<T> {
  // field 만들어줘야함
  constructor(private list: T[]) {
    // 접근제어자가 있으면 알아서 해줌
  }
  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]); // 명시적으로 타입을 정해주지 않아도 제네릭 클래스는 그냥 사용 가능하다
stringList.push("hello");
