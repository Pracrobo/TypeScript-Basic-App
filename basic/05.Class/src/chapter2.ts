/** 접근제어자
 * access modifier
 * -> public private protected
 *
 */
class Employee {
  public name: string;
  protected age: number;
  private position: string;
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log(`${this.position} 일함`);
  }
}
const employee = new Employee("robo", 30, "developer");
// employee.age = 27; // Property 'age' is protected and only accessible within class 'Employee' and its subclasses.
employee.name = "홍길동";

// employee.position = "designer"; // 변경 불가 , Property 'position' is private and only accessible within class 'Employee'

class ExecutiveOfficer extends Employee {
  constructor(
    // 생성자에도 만들 수 있음 -> 필드를 자동 생성, 필드 생성할 이유 없음
    public name: string,
    age: number,
    position: string,
    // private position: string, // Class 'ExecutiveOfficer' incorrectly extends base class 'Employee'.
    //   Types have separate declarations of a private property 'position'.
    protected officeNumber: number
  ) {
    super(name, age, position); // 생략하면 오류가 된다.
    this.officeNumber = officeNumber;
  }
  work() {
    // console.log(`${this.position} 회의함`); private 이라 불가 파생 클래스도 불가
    console.log(`${this.age} 인데 임원이다.`);
  }
}

const officer = new ExecutiveOfficer("robo", 35, "cto", 1);
console.log(officer);
officer.work();
// officer.age = 32; // 불가, protected는 클래스(파생 클래스 포함) 내부에서만 사용 기능
