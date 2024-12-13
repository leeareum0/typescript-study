// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "김철수",
  nickname: "soo",
  birth: "1995.12.6",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "이영희",
  nickname: "hee",
  birth: "1995.11.12",
  bio: "안녕하세요",
  location: "강서구",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  korea: number;
};

// let countryNumberAndStringCodes: CountryNumberCodes = {
//   Korea: "ko",
// };
