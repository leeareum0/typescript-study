// 객체(object)
// ? - 선택적 프로퍼티로 정의
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "김철수",
};

user = {
  name: "홍길동",
};

// readonly - 읽기전용
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
