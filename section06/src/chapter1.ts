/**
 * 타입스크립트의 클래스
 */

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, positon: string) {
    this.name = name;
    this.age = age;
    this.position = positon;
  }

  //메서드
  work() {
    console.log("일하는 중");
  }
}

const employeeB = new Employee("홍길동", 28, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 1,
  position: "",
  work() {},
};

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
