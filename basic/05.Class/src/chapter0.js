/**
 * 클래스
 */
let studentA = {
  name: "Kim",
  grade: "A",
  age: 30,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // Pascal
  // field
  name;
  grade;
  age; // 세미콜론 정의
  // 생성자
  constructor(name, grade, age) {
    //객체의 property의 값을 매개변수 값으로 설정
    this.name = name;
    this.grade = grade;
    this.age = age;
  } // , 안찍음
  //메서드
  study() {
    console.log("열심히 공부 함");
  }
  introduce() {
    console.log(`안녕하세요! ${this.name}입니다`);
  }
}
/// 클래스를 이용해 만든 객체 : 인스턴스
let studentB = new Student("Pracrobo", "A", 30); // new 새 객체 클래스 이름 생성자 호출
console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper {
  name;
  grade;
  age;
  favoriteSkill;
  constructor(name, grade, age, favoriteSkill) {
    this.name = name;
    this.grade = grade;
    this.age = age;
    this.favoriteSkill = favoriteSkill;
  }
  study() {
    console.log("열심히 공부 함");
  }
  introduce() {
    console.log(`안녕하세요! ${this.name}입니다`);
  }
  programming() {
    console.log(`${this.name}은 ${this.favoriteSkill}으로 프로그래밍함`);
  }
}

const studentDeveloper = new StudentDeveloper("홍길동", "B", 28, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();

class JuniorDeveloper extends Student {
  favoriteSkill;
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }
  programming() {
    console.log(`${this.favoriteSkill}으로 프로그래밍함`);
  }
}

const juniorDeveloper = new JuniorDeveloper("Bohn", "A", 34, "Node.js");
console.log(juniorDeveloper.name);
juniorDeveloper.programming();
