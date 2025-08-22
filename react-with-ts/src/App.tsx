import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  useReducer,
} from "react";
import "./App.css";
import Editor from "./components/Editor";
import { Todo } from "./types/types";
import TodoItem from "./components/TodoItem";

type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | { type: "DELETE"; id: number };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id);
    }
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null); // React.Context<null> 로 추론, 그러니 <> 로 감싸준다.
// React.Context<Todo[] | null>
//  function createContext<T>(
// If you thought this should be optional, see
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
// defaultValue: T,
// ): Context<T>;

export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

// Editor 컴포넌트의 dispatch 커스텀 훅 null에 옵셔널 체이닝 해주기를 하지 말고 이렇게 커스텀 훅으로 정의
export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("TodoDispatchContext에 문제가 있다.");
  return dispatch;
}

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, dispatch] = useReducer(reducer, []);

  // 초기값으로 전달한 이 인수의 타입에 따라서 state변수와 state 변화함수의 타입을 자동으로 추론
  // -> 제네릭 함수
  //  function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  // convenience overload when first argument is omitted
  // /**
  //  * Returns a stateful value, and a function to update it.
  //  *
  //  * @version 16.8.0
  //  * @see {@link https://react.dev/reference/react/useState}
  //  */
  // function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
  // /**
  //  * An alternative to `useState`.
  //  *
  //  * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
  //  * multiple sub-values. It also lets you optimize performance for components that trigger deep
  //  * updates because you can pass `dispatch` down instead of callbacks.
  //  *
  //  * @version 16.8.0
  //  * @see {@link https://react.dev/reference/react/useReducer}
  //  */

  // setText("hello"); // 문자열

  const idRef = useRef(0); // const idRef: React.RefObject<number>

  const onClickAdd = (text: string) => {
    // setTodos([...todos, { id: idRef.current++, content: text }]);
    dispatch({ type: "CREATE", data: { id: idRef.current++, content: text } });
  };
  const onClickDelete = (id: number) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    dispatch({ type: "DELETE", id: id });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelete }}>
          {/* <Editor onClickAdd={onClickAdd}></Editor> */}
          {/* <div>child</div> */}
          {/* Type '{ onClickAdd: (text: string) => void; }' is not assignable to type 'IntrinsicAttributes'.
            Property 'onClickAdd' does not exist on type 'IntrinsicAttributes'. */}
          <Editor></Editor>
          <div>
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} /> //onClickDelete={onClickDelete} />
              // <div key={todo.id}>{todo.content}</div>
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
