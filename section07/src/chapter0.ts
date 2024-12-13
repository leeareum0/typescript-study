/**
 * 제네릭
 */

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
// num.toUpperCase();

if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);
let str = func("string");
