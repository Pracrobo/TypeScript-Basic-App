/**
 * Mapped Types
 * - Partial, Required, Readonly
 */
/**
 * Partial : 부분적인 , 일부분의
 * 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 *
 */
// 직접 구현
type Partial<T> = {
  // keyof T : union
  [key in keyof T]?: T[key]; //indexed Access Type
  // key in keyof T : Mapped Type : key in a|b|c|
};

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}
const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안..",
};
// 모든 프로퍼티 -> 선택적 프로퍼티

/**
 * Required <T> : 필수의 , 필수적인
 * 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 *
 */
// 직접 구현
type Required<T> = {
  [key in keyof T]-?: T[key]; // -?로 필수 프로퍼티로 만들기
};

const withThumbnailPost: Required<Post> = {
  title: "한입 ts 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

/**
 * Readonly<T>: 읽기 전용 수정 불가
 * 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */
// 직접 구현
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};

// readonlyPost.content = ""; // 불가
