// unknown 타입
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let f: unknown = undefined;
  let g: unknown = [];
  let h: unknown = {};
  let i: unknown = () => {};

  let unknownValue: unknown;

  // 오류 발생 - unknown 타입은 number 타입에 할당 X
  // let num: number = unknownValue;
  // let str: number = unknownValue;
  // let bool: boolean = unknownValue;
}

// never 타입
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // let num: never = neverFunc;
  // let str: never = neverFunc;
  // let bool: never = neverFunc;
}

// void 타입
function voidExam() {
  function voidFunc(): void {}
  console.log("hello");

  let voidVar: void = undefined;
}

// any 타입
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  anyVar = unknownVar;

  undefinedVar = anyVar;
}
