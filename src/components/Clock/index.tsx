import React from "react";
import * as S from "./styles";

interface Props {
  date: Date;
  string: String;
}

const Clock: React.FC<Props> = ({ date, string }) => {
  var m = date.getMonth() + 1;
  var d = date.getDate();
  return (
    <>
      <S.Text>
        정답입니다.
        <br />
        {m}월 {d}일에 다음 스토리가 열립니다.
      </S.Text>
      <S.HiddenMessage>{string}</S.HiddenMessage>
    </>
  );
};

export default Clock;
