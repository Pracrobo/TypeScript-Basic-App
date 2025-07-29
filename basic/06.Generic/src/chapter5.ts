/**
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    reject("~~ 때문에 실패"); // (parameter) reject: (reason?: any) => void
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); // 20 'response' is of type 'unknown'
});

promise.catch((err) => {
  //any type
  if (typeof err === "string") {
    console.log(err);
  }
  // 상황에 맞게 처리
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost() {
  // :Promise<Post> <추천>: 협업 관점에서 가독성이 좋아서 반환값타입을 직접 정의
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  post.id; //(parameter) post: unknown
  // promise Post 타입으로 정의
});
