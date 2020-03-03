import React, { useState } from "react";
import * as S from "./styles";

import icon from "../../assets/icon-0316.png";
import iconLock from "../../assets/icon-lock.png";

import Cookies from "universal-cookie";

interface Button16Props {
  startDate: Date;
}

const Button16: React.FC<Button16Props> = ({ startDate }) => {
  const cookies = new Cookies();
  const [state, setState] = useState(cookies.get("cookie"));
  return (
    <>
      {new Date() < startDate && state >= 6 && (
        <>
          <S.Container>
            <S.IconNone src={icon} alt="" />
            <S.Text style={{ color: "gray" }}>
              <br />
            </S.Text>
          </S.Container>
        </>
      )}
      {/* 아직 안 열렸는데 전에꺼 풀었음 */}
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

export default Button16;
