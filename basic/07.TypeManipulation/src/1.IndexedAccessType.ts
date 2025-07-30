/**
 * 인덱스드 액세스 타입
 * 객체, 배열, 튜플에 사용 가능
 * index를 이용해 접근 : 객체['속성명'] or ['숫자']
 * 여기서 속성명이나 숫자는 타입 시스템에서 타입 레벨에서의 위치나 이름을 가리키는 타입이다.
 * */

interface Post {
  id: number;
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    // 함수가 여러개이고 프로퍼티가 여러개라면 일일이 추가하는게 힘들 수 있다.
    age: number;
  };
}

type PostList = {
  id: number;
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: Post["author"]) {
  // Post['author']['id'] 특정 타입만 더 뽑을 수 있음
  // 객체타입만 추출하는 것 string literal type : index, indexed access type
  console.log(`${author.name} - ${author.id}`);
}

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

const post2: PostList[number] = {
  //  number, 어떠한 숫자 타입  -> 인덱스 값을 추출해온다
  id: 2,
  title: "게시글 제목2",
  content: " 게시글 본문2",
  author: {
    id: 1,
    name: "Kim",
    age: 30,
  },
};

const post: Post = {
  id: 1,
  title: "게시글 제목",
  content: " 게시글 본문",
  author: {
    id: 1,
    name: "Kim",
    age: 30,
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean]; // 튜플타입 길이고정
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3];

type TupNum = Tup[number]; //최적의 공통 타입을 뽑아온다. type TupNum = string | number | boolean
