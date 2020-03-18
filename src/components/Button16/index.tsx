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
      {state >= 6 && (
        <>
          <S.Container>
            <S.IconNone src={icon} alt="" />
            <S.Text style={{ color: "gray" }}>
              <br />
            </S.Text>
          </S.Container>
        </>
      )}
      {state < 6 && (
        <>
          <S.Container>
            <S.Icon src={iconLock} alt="" />
            <S.Text style={{ color: "gray" }}>-</S.Text>
          </S.Container>
        </>
      )}
    </>
  );
};

export default Button16;
