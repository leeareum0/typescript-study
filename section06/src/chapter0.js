/**
 * 클래스
 */

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 중");
  }

  introduce() {
    console.log(`안녕하세요 저는 ${this.name} 입니다.`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// Student 인스턴스
// let studentA = new Student("홍길동", "A", 28);
// console.log(studentA);
// studentA.study();
// studentA.introduce();

class StudentDev extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 합니다.`);
  }
}

const studentDev = new StudentDev("홍길동", "B", 28, "TypeScript");
console.log(studentDev);
studentDev.programming();
