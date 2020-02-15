import React from "react";
import * as S from "./styles";

import TextInput from "../../components/TextInput";
import Clock from "../Clock";

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";

const Quiz: React.FC = () => {
  return (
    <>
      {new Date() >= new Date("01/04/2020 00:00:00") &&
        window.location.pathname === `/storycode` && (
          <>
            <S.Number>1</S.Number>
            <S.Text>
              [초대장]
              <br />
              당신을 파티에 초대합니다.
              <br />
              <br />
              <br />
              <br />
              보낸 사람도, 목적도 알 수 없는 초대장.
              <br />
              이런 초대장을 받고 서울의 모 파티룸에 모인 것은 8명의
              사람들이었다.
              <br />
              <br />
              "일단 와 보긴 했는데, 다들 누가 초대장을 보낸건지, 왜 모이라고 한
              건지도 모르겠다는 거죠?"
              <br />
              <br />
              렝고가 조금 답답하다는 듯 입을 열었다.
              <br />
              <br />
              "갑자기? 나를? 굳이? 싶었지만 마침 일정도 비었고 왠지 파티니까
              술도 있을 것 같아서 온거거든여, 저는. 근데 없네여. 집에 가고
              싶다."
              <br />
              <br />
              이미 한 잔 걸치고 온 것 같은 얼굴의 톡기가 대답했다.
              <br />
              <br />
              "뭐 이왕 이렇게 모인 거, 통성명이나 할까요?"
              <br />
              <br />
              .<br />
              .<br />
              <br />
              조금씩 이야기를 나누며 시간이 흐른 후에도 여전히 파티의 목적은
              오리무중이었다.
              <br />
              <br />
              "더 기다려 보죠. 그 동안 퀴즈라도 하나 풀면서 기다릴까요?"
              <br />
              <br />
              레오가 종이에 그림을 슥슥 그리며 말했다.
              <br />
              <br />
              <br />
              <br />
            </S.Text>
            <img src={img1} />
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput />
            </S.TextInputContainer>
          </>
        )}

      {new Date() >= new Date("03/06/2020 00:00:00") &&
        window.location.pathname === `/sun` && (
          <>
            <S.Number>2</S.Number>
            <S.Text>
              모두가 정답을 맞히고 다시 정적이 흐르던 중, 주변의 소품을
              만지작거리던 마뷜이 무언가를 발견한 듯 보였다.
              <br />
              <br />
              "이건 뭐지...?"
              <br />
              <br />
              <br />
              <div style={{ fontStyle: "italic" }}>
                ♪<br />
                쿵짝 쿵짝 쿵짜짜 쿵짝
                <br />
                네 박자 속에
                <br />
                사랑도 있고
                <br />
                이별도 있고
                <br />
                눈물도 있네
                <br />♪<br />
              </div>
              <br />
              <br />
              "깜짝이야!"
              <br />
              <br />
              "그냥 카세트 플레이어네요."
              <br />
              <br />
              "저 이 노래 알아요, 네 박자! 맞죠?"
              <br />
              <br />
              렝고가 아는 체를 했다.
              <br />
              <br />
              "박자라고 하니 생각나는 문제가 있는데, 맞혀보시겠어요?"
              <br />
              <br />
              마가가 말했다.
              <br />
              <br />
              <br />
              <br />
            </S.Text>
            <img src={img2} />
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput />
            </S.TextInputContainer>
          </>
        )}
      {new Date() < new Date("03/06/2020 00:00:00") &&
        window.location.pathname === `/sun` && (
          <>
            <Clock
              date={new Date("03/06/2020 00:00:00")}
              string="이 메세지는 당신을 위해 숨겨졌습니다."
            />
          </>
        )}

      {new Date() >= new Date("03/08/2020 00:00:00") &&
        window.location.pathname === `/blood` && (
          <>
            <S.Number>3</S.Number>
            <S.Text>
              "재밌는 문제였어요!"
              <br />
              <br />
              볍씨가 웃으며 말했다.
              <br />
              <br />
              "뭐야, 냉장고 안에 먹을 게 있었잖아?"
              <br />
              <br />
              머판이 우스꽝스러운 얼굴이 그려진 분홍색 바나나를 집어들었다.
              <br />
              <br />
              "어디 보자. 뭐야, 술은 없네. 배고프니 이거라도 먹어야지."
              <br />
              <br />
              톡기가 머핀을 꺼내며 말했다.
              <br />
              냉장고 속 음식들을 테이블 위에 올려놓으니 제법 다과회 느낌이 났다.
              <br />
              <br />
              "배도 채웠으니 다른 문제도 풀어보실래요?"
              <br />
              마뷜이 말했다.
              <br />
              <br />
              <br />
              <br />
            </S.Text>
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput />
            </S.TextInputContainer>
          </>
        )}
      {new Date() < new Date("03/08/2020 00:00:00") &&
        window.location.pathname === `/blood` && (
          <>
            <Clock
              date={new Date("03/06/2020 00:00:00")}
              string="이 메세지는 당신이 해독함으로써 탄생했습니다."
            />
          </>
        )}

      {new Date() >= new Date("03/10/2020 00:00:00") &&
        window.location.pathname === `/bus` && (
          <>
            <S.Number>4</S.Number>
            <S.Text></S.Text>
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput />
            </S.TextInputContainer>
          </>
        )}
      {new Date() < new Date("03/10/2020 00:00:00") &&
        window.location.pathname === `/bus` && (
          <>
            <Clock
              date={new Date("03/10/2020 00:00:00")}
              string="머핀이라니 맛있겠군요."
            />
          </>
        )}
    </>
  );
};

export default Quiz;
