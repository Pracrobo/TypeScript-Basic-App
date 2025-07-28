/**
 * 타입스크립트 클래스
 */

const employee = {
  name: "robo",
  age: 30,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  //필드 기본값 넣어주기 or 생성자 만들기
  name: string = "";
  age: number;
  position: string; // Property 'name' has no initializer and is not definitely assigned in the constructor. undefined가 들어갈것임
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log("일함");
  }
}

const employeeA = new Employee("robo", 30, "개발자"); //constructor Employee(name: string, age: number, position: string): Employee 타입으로도 정의된다.
console.log(employeeA);
// $ tsx src/chapter1.ts
// Employee { name: 'robo', age: 30, position: '개발자' }

class ExecutiveOfficer extends Employee {
  officeNumber: number;
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position); // 생략하면 오류가 된다.
    this.officeNumber = officeNumber;
  }
  work() {
    console.log("회의함");
  }
}
const employeeB = new ExecutiveOfficer("robo-a", 40, "임원", 1);
console.log(employeeB);
employeeB.work();
//ExecutiveOfficer {
//   name: 'robo-a',
//   age: 40,
//   position: '임원',
//   officeNumber: 1
// }
// 회의함

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
