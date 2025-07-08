## Compiler Option

```bash
tsc --init
```

> tsconfig.json 파일 생성

- 셋팅 파일
- 기존 셋팅

```json
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true
```

> `tsconfig.json`파일

```json
{
  "include": ["src"]
}
```

- src 밑에 있는 모든 파일 bash에 tsc 입력시 자동 js 파일도 생성

```json
{
  "compilerOptions": {
    "target": "ES5"
  }
}
```

> index.ts

```ts
const func = () => {
  console.log("Hello");
};
```

> index.js

```js
var func = function () {
  console.log("Hello");
};
```

- ES최신문법
  > tsconfig.json

```json
{
  "compilerOptions": {
    "skipLibCheck": true, //이거 무조건 추가해야 "undici-types"에러 발생안함
    "target": "ESNext"
  },
  "include": ["src"]
}
```

> 그외
> 폴더분리 : outDir
> 엄격한 타입 검사 : strict

```json
{
  "compilerOptions": {
    "outDir": "dist", // 코드폴더 분리
    "strict": false // 엄격한 타입 검사 : 매개변수 타입 추론 불가
  }
}
```

> 파일 별로 똑같이 작성했을때 ,Cannot redeclare block-scoped variable 'a' 에러 발생
> -> 모든 파일을 전역모듈로 본다.

1. export / import 키워드로 독립된 모듈로 만들기
2. tsconfig.json > compilerOptions {"moduleDetection": "force"}
   - cmd+shift+p : restart ts
