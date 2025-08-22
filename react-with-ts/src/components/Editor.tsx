import { useState } from "react";
import { useTodoDispatch } from "../App"; // custom hook
// ReactElement } from "react";

interface Props {
  //onClickAdd: (text: string) => void;
  //   children: ReactElement;
}

export default function Editor(props: Props) {
  const [text, setText] = useState(""); // React.Dispatch<React.SetStateAction<undefined>>
  // useState() : 빈값으로 두면 undefined로 추론 그래서 ""라도 넣기

  // const dispatch = useContext(TodoDispatchContext);
  const dispatch = useTodoDispatch();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text); // 옵셔널 체인닝으로 null도 포함 그래서 커스텀 훅을 만들어서 처리하니 App에 가서 useTodoDispatch라는 커스텀 훅을 만들어주고 옵셔널 체이닝을 지운다.
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput}></input>
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
