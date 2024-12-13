/**
 * 접근 제어자
 * access modifiter
 * => public, private, proteced
 */

class Employee {
  // 필드

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public positon: string
  ) {}

  //메서드
  work() {
    console.log(`${this.name} 일하는 중`);
  }
}

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

  // 메서드
  func() {
    this.age;
    // this.name;
  }
}

const employee = new Employee("홍길동", 28, "developer");
// employee.name = "김영희";
// employee.age = 30;
employee.positon = "디자이너";

console.log(employee);
