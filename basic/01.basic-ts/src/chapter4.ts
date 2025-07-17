// 타입 별칭
type User = {
  id: number;
  name: string;
  birth: string;
  bio: string;
  location: string;
  extra?: string;
};

// 타입 별칭, 같은 스코프 내에 중복 안됨
function func() {
  type User = {}; // 이건 가능
}

let user: User = {
  id: 1,
  name: "Pracrobo",
  birth: "1996",
  bio: "안녕하세요",
  location: "서울",
};

let user2: User = {
  id: 2,
  name: "seoseo",
  birth: "1994",
  bio: "안녕하세요",
  location: "서울",
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
};
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
