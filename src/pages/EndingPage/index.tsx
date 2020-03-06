import React from "react";
import * as S from "./styles";

import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";
import gif3 from "../../assets/gif3.gif";
import gif4 from "../../assets/gif4.gif";
import gif5 from "../../assets/gif5.gif";
import gif6 from "../../assets/gif6.gif";
import gif7 from "../../assets/gif7.gif";
import gif8 from "../../assets/gif8.gif";
import gif9 from "../../assets/gif9.gif";
import big1 from "../../assets/big1.png";

const EndingPage: React.FC = () => {
  const onClickButton = e => {
    window.location.href = `/ending2`;
  };
  return (
    <>
      <S.Main>
        <S.Space>노넥생일축하</S.Space>
        <img src={gif1} style={{ width: "30rem" }} />
        <S.Space>노넥생일축하</S.Space>
        <img src={gif2} style={{ width: "20rem" }} />
        <img src={gif3} style={{ width: "30rem" }} />
        <S.Space>노넥생일축하</S.Space>
        <img src={gif4} style={{ width: "10rem" }} />
        <img src={gif5} style={{ width: "20rem" }} />
        <S.Space>노넥생일축하</S.Space>
        <img src={gif6} style={{ width: "20rem" }} />
        <S.Space>노넥생일축하</S.Space>
        <img src={gif7} style={{ width: "30rem" }} />
        <S.Space>노넥생일축하</S.Space>
        <img src={big1} style={{ width: "30rem" }} />
        <S.Space>노넥생일축하</S.Space>
        <img src={gif8} style={{ width: "20rem" }} />
        <S.Space>노넥생일축하</S.Space>
        <img src={gif9} style={{ width: "30rem" }} />
        <S.Button onClick={onClickButton}>축하해주기!!</S.Button>
        <S.Space />
      </S.Main>
    </>
  );
};

export default EndingPage;
