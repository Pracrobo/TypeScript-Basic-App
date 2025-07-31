import { useState } from "react";
// ReactElement } from "react";

interface Props {
  onClickAdd: (text: string) => void;
  //   children: ReactElement;
}

export default function Editor(props: Props) {
  const [text, setText] = useState(""); // React.Dispatch<React.SetStateAction<undefined>>
  // useState() : 빈값으로 두면 undefined로 추론 그래서 ""라도 넣기

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    props.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput}></input>
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
