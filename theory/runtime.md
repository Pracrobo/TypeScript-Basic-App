# 동작 원리

대다수의 프로그래밍 언어의 동작

- 사람에 더 친화적 <> 컴퓨터(기계어)
  컴퓨터가 이해하기 쉬운 형태로 변환: 컴파일(Complie)

컴파일러 Compiler => ByteCode

AST(추상문법트리) : 공백제거, 트리형태로 만듦

JS 코드 -> AST -> Byte code

## TS 동작은?

TS 코드 -> AST -> 타입 검사 -> 컴파일 종료(타입 검사 실패) or JS 로 변환 후 컴파일 종료(안전한 타입 코드) -> AST -> ByteCode -> 실행

## 설치

1. json 패키지

```bash
npm install @types/node
```

2. typescript 런타임(tsc)

```bash
npm install typescript -g
```

- 런타임 확인

```bash
tsc -v
```

3. 실행(tsc로)

```bash
tsc src/index.ts
```

그러면 src/index.js도 생긴다.

4. tsx로 실행하기(TypeScript Execute)

```bash
npm install ts-node -g
ts-node src/index.ts
```

- ts-node => tsx로 변경(23.12)
  - node 20.x버전에서 동작안함

```bash
npm install -g tsx
tsx src/index.ts
```
