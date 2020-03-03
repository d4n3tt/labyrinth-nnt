import React, { useState } from "react";
import * as S from "./styles";

import icon from "../../assets/icon-0316.png";
import iconLock from "../../assets/icon-lock.png";
import iconNone from "../../assets/icon-none.png";
import iconNone2 from "../../assets/icon-none2.png";

import Cookies from "universal-cookie";

interface Button16Props {
  startDate: Date;
  code: String;
  dateText: String;
}

const Button18: React.FC<Button16Props> = ({ startDate, code, dateText }) => {
  const onClickButton = e => {
    window.location.href = `/${code}`;
  };
  const cookies = new Cookies();
  const [state, setState] = useState(cookies.get("cookie"));
  return (
    <>
      {new Date() >= startDate && state == 6 && (
        <>
          <S.Container>
            <S.Icon src={iconNone2} alt="" onClick={onClickButton} />
            <S.Text>{dateText}</S.Text>
          </S.Container>
        </>
      )}
      {/* 18 */}
      {new Date() < startDate && state == 6 && new Date() < startDate && (
        <>
          <S.Container>
            <S.IconNone src={icon} alt="" />
            <S.Text style={{ color: "gray" }}>
              <br />
            </S.Text>
          </S.Container>
        </>
      )}
      {/* 14~18 */}
      {new Date() < startDate && state < 6 && (
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

export default Button18;
