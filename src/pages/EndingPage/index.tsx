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
import ending from "../../assets/ending.png";

const EndingPage: React.FC = () => {
  const onClickButton = e => {
    window.location.href = `/ending2`;
  };
  return (
    <>
      {window.location.pathname === `/ending` && (
        <>
          <S.Image src={ending} style={{ width: "40rem" }} />
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
            <br />
            <S.Button onClick={onClickButton}>축하해주기!!</S.Button>
            <S.Space />
          </S.Main>
        </>
      )}
      {window.location.pathname === `/ending2` && (
        <>
          <S.Container>
            <S.Text>
              “오늘은 내 생일! 해피 버스 데이, 나!”
              <br />
              <br />
              화려한 연출을 보며 일동은 어이없다는 표정을 지었다.
              <br />
              <br />
              “사실 이 파티는 저의 생일을 자축하기위해 꾸며진 파티였습니다!”
              <br />
              <br />
              <br />
              <br />
              말 그대로였다.
              <br />
              <br />
              이 파티를 계획한 것은 노넥이었으며, 모두를 초대하고 순서대로
              문제를 풀게 시키고
              <br />
              <br />
              최고로 고조된 상황에서 자신을 위한 파티를 시작하게 할 속셈이었던
              것이다.
              <br />
              <br />
              이미 몇몇 사람은 다 알고 있었다는 듯이 말을 꺼냈다.
              <br />
              <br />
              “생일 축하해요 노넥님”
              <br />
              <br />
              “정말 생일 축하해요 노넥님! 저는 생일도 기억하고있었다구요!”
              <br />
              <br />
              자신에게 하는말이다.
              <br />
              <br />
              “축하해.”
              <br />
              <br />
              얼떨떨한 기분으로 다른 사람들도 축하를 시작했다.
              <br />
              <br />
              “(대충 생일 축하한다는 대사) x4”
              <br />
              <br />
              <br />
              <br />
              한 명만 빼고
              <br />
              <br />
              “...뭐임?”
              <br />
              <br />
              다름 아닌 이 파티의 피해자였다.
              <br />
              <br />
              미안한데 이 파티는 당신을 위한 파티가 아니었어요.
              <br />
              <br />
              “생일축하합니다생일축하합니다사랑하는나님의생일축하합니다와 끝
              됐다 먹자”
              <br />
              <br />
              그렇게 모두가 행복하게 파티를 즐겼다고 한다.
              <br />
              <br />
              한 명만 빼고
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </S.Text>
          </S.Container>
        </>
      )}
    </>
  );
};

export default EndingPage;
