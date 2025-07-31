import React from "react"; // Module '"c:/Users/user/project/typescript-app/node_modules/@types/react/index"' can only be default-imported using the 'esModuleInterop' flag
import ReactDOM from "react-dom/client"; // 외부패키지 default 가 없을 수도 있어서 esModuleInterop : true로
import "./index.css";
import App from "./App"; //Module './App' was resolved to 'c:/Users/user/project/typescript-app/react-with-ts/src/App.jsx', but '--jsx' is not set.
// 해결법 : "jsx" : "react-jsx"
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
); // null이 아님을 ! 로 단언, 또는 as HTMLElement
//Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Container'.
// Type 'null' is not assignable to type 'Container'.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
