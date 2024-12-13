// 1. 합집합 - Union 타입
// -> 기본 타입
let a: string | number | boolean;
a = 1;
a = "string";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

// -> 객체 타입
type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 오류 발생
// let union4: Union1 = {
//   name: "",
// };

// 2. 교집합 - Intersection 타입
let variable: number & string;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};
