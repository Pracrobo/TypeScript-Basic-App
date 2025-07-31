/**
 * Mapped Types 기반의 Utility Types
 * Pick<T,K>
 * Omit<T, K>
 * Record <V, K>
 */

/**
 * Pick<T, K> : 뽑다, 고르다
 * 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입
 */
// 직접 구현
type Pick<T, K extends keyof T> = {
  // keyof T의 subtype만 들어올 수 있는 K가 된다.
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // True
  [key in K]: T[key]; //Type 'K' is not assignable to type 'string | number | symbol
};

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛글",
  content: "엣 컨텐츠",
};

/**
 * Omit <T, K>  : 생략하다, 빼다
 * 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */
// 직접 구현
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = "title"
// Pick <Post, Exclude <keyof Post, 'title'>>
// Pick <Post, Exclude <"title" | "content" | "tags" | "thumbnailURL", "title">>
// Exclude : 1, 2 타입 1에서 2를 제거한 타입변수 제거
// 결과 : Pick < Post, "content" | "tags" | "thumbnailURL" >
// Pick 은 골라온거니까 content, tags, thumbnailURL만 따온 타입

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V>
 * 객체 타입을 정의할때 사용한다
 */
// 직접 구현
// K에 들어오는 타입은 어떤 객체의 타입의 키를 추출해놓은 유니온타입이다.
// 무슨 객체인지는 모르겠지만 어떤 객체의 키타입이다
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

// 증복이 많아 코드가 아쉽다
type thumbnailLegacy = {
  large: { url: string };
  medium: { url: string };
  small: { url: string };
  watch: { url: string };
};

type Thumbnail = Record<
  "large" | "medium" | "small",
  { url: string; size: number }
>;
