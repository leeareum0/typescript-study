/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  name: string;
  age: number;
}

// 확장
interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "김철수",
  age: 28,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}
interface Lib {
  c: string;
}
const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
