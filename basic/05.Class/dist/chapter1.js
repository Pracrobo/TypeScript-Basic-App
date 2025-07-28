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
    name = "";
    age;
    position; // Property 'name' has no initializer and is not definitely assigned in the constructor. undefined가 들어갈것임
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    //메서드
    work() {
        console.log("일함");
    }
}
const employeeA = new Employee("robo", 30, "개발자");
console.log(employeeA);
export {};
