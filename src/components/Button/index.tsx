import React, { useState } from "react";
import * as S from "./styles";

import iconNone from "../../assets/icon-none.png";
import iconNone2 from "../../assets/icon-none2.png";
import iconLock from "../../assets/icon-lock.png";

import Cookies from "universal-cookie";

interface ButtonProps {
  startDate: Date;
  iconUrl: string;
  dateText: String;
  afterText: String;
  code: String;
  index: Number;
}

const Button: React.FC<ButtonProps> = ({
  startDate,
  iconUrl,
  dateText,
  afterText,
  code,
  index
}) => {
  const onClickButton = e => {
    window.location.href = `/${code}`;
  };
  const cookies = new Cookies();
  const [state, setState] = useState(cookies.get("cookie"));
  return (
    <>
      {index <= state && state >= 6 && (
        <>
          <S.Container>
            <S.Icon src={iconUrl} alt="" onClick={onClickButton} />
            <S.Text>{afterText}</S.Text>
          </S.Container>
        </>
      )}
      {/* 다 푼 것 (1차엔딩 이후) */}
      {index <= state && state < 6 && (
        <>
          <S.Container>
            <S.Icon src={iconUrl} alt="" onClick={onClickButton} />
            <S.Text>{dateText}</S.Text>
          </S.Container>
        </>
      )}
      {/* 다 푼 것 */}
      {new Date() >= startDate && index == Number(state) + 1 && (
        <>
          <S.Container>
            <S.Icon src={iconNone2} alt="" onClick={onClickButton} />
            <S.Text>{dateText}</S.Text>
          </S.Container>
        </>
      )}
      {/* 열렸는데 못 푼 것 (풀 수 있는) */}
      {new Date() >= startDate && index > Number(state) + 1 && (
        <>
          <S.Container>
            <S.Icon src={iconNone} alt="" />
            <S.Text>{dateText}</S.Text>
          </S.Container>
        </>
      )}
      {/* 열렸는데 못 푼 것 (풀 수 없는) */}
      {new Date() < startDate && index == Number(state) + 1 && (
        <>
          <S.Container>
            <S.Icon src={iconLock} alt="" />
            <S.Text style={{ color: "gray" }}>{dateText}</S.Text>
          </S.Container>
        </>
      )}
      {/* 아직 안 열렸는데 전에꺼 풀었음 */}
      {new Date() < startDate && index > Number(state) + 1 && (
        <>
          <S.Container>
            <S.Icon src={iconLock} alt="" />
            <S.Text style={{ color: "gray" }}>-</S.Text>
          </S.Container>
        </>
      )}
      {/* 아직 안 열림 */}
    </>
  );
};

export default Button;
