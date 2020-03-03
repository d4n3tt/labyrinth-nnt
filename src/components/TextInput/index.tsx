import React, { useState } from "react";
import * as S from "./styles";
import Cookies from "universal-cookie";

interface InputProps {
  answer: string;
  index: number;
  goTo: string;
}
const TextInput: React.FC<InputProps> = ({ answer, index, goTo }) => {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onClickButton = e => {
    if (text == answer) {
      const cookies = new Cookies();
      if (cookies.get("cookie") < index) {
        cookies.set("cookie", index);
      }
      window.location.href = `/${goTo}`;
    } else alert("정답이 아닙니다.");
  };

  return (
    <>
      <input onChange={onChange} />
      <br />
      <br />
      <S.Button onClick={onClickButton}>Enter</S.Button>
    </>
  );
};

export default TextInput;
