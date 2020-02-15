import React, { useState } from "react";
import * as S from "./styles";

const TextInput: React.FC = () => {
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onClickButton = e => {
    window.location.href = `/${text}`;
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
