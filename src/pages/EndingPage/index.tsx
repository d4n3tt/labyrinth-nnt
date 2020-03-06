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

const EndingPage: React.FC = () => {
  return (
    <>
      <S.Main>
        <img src={gif1} style={{ width: "30rem" }} />
        <br />
        <img src={gif2} style={{ width: "20rem" }} />
        <img src={gif3} style={{ width: "50rem" }} />
        <br />
        <img src={gif4} style={{ width: "20rem" }} />
        <img src={gif5} style={{ width: "50rem" }} />
        <br />
        <img src={gif6} style={{ width: "20rem" }} />
        <br />
        <img src={gif7} style={{ width: "50rem" }} />
        <img src={gif8} style={{ width: "20rem" }} />
        <br />
        <img src={gif9} style={{ width: "50rem" }} />
      </S.Main>
    </>
  );
};

export default EndingPage;
