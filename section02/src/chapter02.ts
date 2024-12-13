// 배열 타입
let numArr: Number[] = [1, 2, 3];
let strArr: String[] = ["hello", "hi"];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소의 타입이 다양할 경우
let multArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: Number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 타입
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];
let users: [string, number][] = [
  ["김철수", 1],
  ["이영희", 2],
  ["김기영", 3],
  ["박민지", 4],
];
