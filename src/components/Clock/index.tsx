import React from "react";
import * as S from "./styles";

interface ClockProps {
  date: Date;
}

const Clock: React.FC<ClockProps> = ({ date }) => {
  var m = date.getMonth() + 1;
  var d = date.getDate();
  return (
    <>
      <S.Text>
        정답입니다!
        <br />
        {m}월 {d}일에 다음 스토리가 열립니다.
      </S.Text>
      <S.HiddenMessage></S.HiddenMessage>
    </>
  );
};

export default Clock;
