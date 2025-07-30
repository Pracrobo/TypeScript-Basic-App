/**
 * keyof 연산자 : 객체타입에 사용하는 연산자
 */

interface Person {
  name: string;
  age: number;
}

// function getPropertyKey(person: Person, key: "name" | "age") {
//   // property 에 유니온타입으로 하는건 비효율적 작업이다.
//   return person[key];}

function getPropertyKey(person: Person, key: keyof Person) {
  // keyof 뒤에 타입이 와야한다.
  // keyof: 타입에만 사용가능, 모든 객체 타입의 프로퍼티 타입을 유니온으로 추출
  return person[key];
}

const person: Person = {
  name: "Kim",
  age: 30,
};

getPropertyKey(person, "name"); // Kim

// typeof person == "object"; // keyof 연산자와 함께 쓸 수 있다.
// string 값으로 반환하는데  keyof 와 함께 쓰면,

type Job = typeof job;
// TypeScript 가 추론하는 타입을 뽑아줌
// type Job = {
//     id: number;
//     titie: string;
//     location: string;
//  }

function getPropertyKey2(job: Job, key: keyof typeof job) {
  // "id" | "title" | "location"
  return job[key];
}

const job = {
  id: 1,
  titie: "Developer",
  location: "Seoul",
};
