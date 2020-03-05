import React from "react";
import * as S from "./styles";

import TextInput from "../../components/TextInput";
import Clock from "../Clock";

import img1 from "../../assets/1.png";
import img1_2 from "../../assets/1-2.png";
import img2 from "../../assets/2.png";
import img2_2 from "../../assets/2-2.png";
import img3_2 from "../../assets/3-2.png";
import img4_2 from "../../assets/4-2.png";
import img5_2 from "../../assets/5-2.png";
import img6_2 from "../../assets/6-2.png";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.png";

const Quiz: React.FC = () => {
  return (
    <>
      {window.location.pathname === `/start` && (
        <>
          <S.Number>1</S.Number>
          <S.Text>
            8명의 사람이 서울 어느 곳의 파티룸에 들어선다.
            <br />
            <br />
            파티룸은 이미 이 사람들을 환영할 준비를 마친 상태였다.
            <br />
            <br />
            사방에 달린 화려한 종이 장식, 색색의 풍선들, 테이블 위에 차려진
            먹음직스러운 음식들.
            <br />
            <br />
            그러나, 정작 이 많은 것들을 준비해둔 사람의 이름은 모르는
            상황이었다.
            <br />
            <br />
            "일단 와 보긴 했는데, 다들 누가 초대장을 보낸건지, 왜 모이라고 한
            건지도 모르겠다는 거죠?"
            <br />
            <br />
            렝고가 조금 답답하다는 듯 입을 열었다.
            <br />
            <br />
            "갑자기? 나를? 굳이? 싶었지만 마침 일정도 비었고 왠지 파티니까 술도
            있을 것 같아서 온거거든여, 저는. 근데 없네여. 집에 가고 싶다."
            <br />
            <br />
            이미 한 잔 걸치고 온 것 같은 얼굴의 톡기가 대답했다.
            <br />
            <br />
            “그 총은 뭐에요?”
            <br />
            <br />
            군인이였던 노넥이 낯선 총을 보고 물어봤다.
            <br />
            <br />
            “아 이거 M4인데 급하게 탈영해서 오느라 그냥 들고 왔어요”
            <br />
            <br />
            군복을 입은 마뷜이 말했다.
            <br />
            <br />
            “아니 그걸 가져오면 어떡해요!? 거기다가 탈영을 했다고!?”
            <br />
            <br />
            머판이 당황하며 말을 붙였다.
            <br />
            <br />
            “거실에서 초대장을 받았는데 탈영할 수도 있죠. 머판님은 그 정도
            성의도 못 보여주시나요?”
            <br />
            <br />
            마가가 뻔뻔하게 말했다.
            <br />
            <br />
            “wut”
            <br />
            <br />
            “일단 들어가죠”
            <br />
            <br />
            유세라가 안경을 아니 선글라스를 치켜세우며 말했다.
            <br />
            <br />
            “와 그 선글라스 뭐에요?”
            <br />
            <br />
            신기하다는듯이 볍씨가 물었다.
            <br />
            <br />
            “이거 도수 있는 선글라스에요”
            <br />
            <br />
            “ㅋㅋㅋㅋㅋ 개이상해”
            <br />
            <br />
            “비켜 내가 1빠로 들어간다”
            <br />
            <br />
            노넥이 서둘러서 앞서 들어가며 외쳤다.
            <br />
            <br />
            “아니 그래서 진짜 탈영한거에요? 저건 진짜 총인거고?”
            <br />
            <br />
            <br />
            <br />
            파티룸의 한 가운데는 테이블과 8명이 둘러앉을 수 있는 의자가 있었다.
            <br />
            <br />
            각자 자리를 잡고 앉으며 마저 이야기를 이어갔다.
            <br />
            <br />
            “그래서 일단 초대장을 받고 모이긴 했는데 저흰 뭘 하면 되는거죠?”
            <br />
            <br />
            렝고가 먼저 입을 열었다.
            <br />
            <br />
            “초대한 사람의 의중을 모르는 이상 섣불리 무언가를 건드려선
            안될듯요.”
            <br />
            <br />
            마가가 말했다.
            <br />
            <br />
            “이거 맛있게 생겼다. 먹어도 대나?”
            <br />
            <br />
            마가님의 말을 듣지 못한것같은 볍씨가 테이블에 놓인 음식을 보고
            입맛을 다셧다.
            <br />
            <br />
            “그러고 보니 저는 초대장에 문제를 만들어오라고 적혀 있었는데 님들도
            그렇게 적혀 있었나요?”
            <br />
            <br />
            거실인들에게 물어보는 노넥과 모두 그렇다고 대답하는 거실인들.
            <br />
            <br />
            <br />
            <br />
            [초대장]
            <br />
            당신을 거실 파티에 초대합니다.
            <br />
            참가하기 위해선, 수수께끼를 하나 만들어야 합니다.
            <br />
            같이 첨부된 종이를 읽고 주어진 단어를
            <br />
            답으로 하는 수수께끼를 만들어주십시오.
            <br />
            <br />
            <br />
            (첨부된 답이 적힌 종이는 이후 파기할 것)
            <br />
            <br />
            <br />
            <br />
            “그러면 각자 만들어온 문제를 확인해볼까요?”
            <br />
            <br />
            렝고가 초대장을 꺼내 읽으며 말했다.
            <br />
            <br />
            “어!? 렝고님 초대장 뒷면에 저거 뭐에요?”
            <br />
            <br />
            톡기가 놀라며 말했다.
            <br />
            <br />
            ※미궁의 모든 문제의 답은 소문자 영단어입니다.
          </S.Text>
          <img src={img1_2} style={{ width: "30rem" }} />
          <S.TextInputContainer>
            Answer
            <br />
            <br />
            <TextInput answer="lenggo" index={0} goTo="vksaj" />
          </S.TextInputContainer>
        </>
      )}
      {new Date() >= new Date("03/04/2020 00:00:00") &&
        window.location.pathname === `/vksaj` && (
          <>
            <S.Number>1</S.Number>
            <S.Text>
              “어? 이거 저한테만 있는거였어요?”
              <br />
              <br />
              모두들 렝고의 말에 뒷면을 살펴보지만 뒷면에 무언가가 적혀 있는
              초대장은 렝고의 것 뿐이었다.
              <br />
              <br />
              “오군의 초대장에만 문제가 있는 이유가 뭘까요?”
              <br />
              <br />
              “렝고님 먼저 문제 내라고 표시해놓은거 아니에요?”
              <br />
              <br />
              여전히 군복을 입고있는 마뷜이 말했다.
              <br />
              <br />
              “그거 괜찮다. 그걸로 바로 ㄱ ”
              <br />
              <br />
              노넥이 말했다.
              <br />
              <br />
              “잠깐! 잠깐만요!”
              <br />
              <br />
              마가는 별모양 뱃지를 테이블 위에서 밀어 던져서 렝고에게 건냈다.
              <br />
              <br />
              <img src={image1} alt="" />
              <br />
              <br />
              “뭐야 이거 이거 뱅이잖아요? 이걸 왜 가져왔어요?”
              <br />
              <br />
              렝고가 어이없다는듯이 물어봤다.
              <br />
              <br />
              “테이블 위에 있던건데 문제를 내는 사람이 이걸 차고 있으면
              어떨까요? 테이블탑에서 게임할 때 쓰는 턴 마커 처럼요.”
              <br />
              <br />
              마가가 말했다.
              <br />
              <br />
              “굳이? 너무 번거로운거 아니에요? 대체 왜 뱅은 없고 보안관만
              있는거야? 어이가 없군.”
              <br />
              <br />
              머판이 아쉬운듯이 말했다.
              <br />
              <br />
              “그냥 형식적으로 뭔가 막 갖춰져있으면 재밌잖아요.”
              <br />
              <br />
              “그렇지! 그게 제일 중요하지!”
              <br />
              <br />
              노넥이 격하게 찬성했다.
              <br />
              <br />
              렝고는 딱히 거부할 이유가 없는 듯 하여 뒷편의 옷핀을 사용해 뱃지를
              옷에 달았다.
              <br />
              <br />
              그 뒤, 주머니에서 작은 종이 쪽지를 꺼내며 문제를 내기 시작했다.
              <br />
              <br />
              “제 문제는 이거에요!”
              <br />
              <br />
            </S.Text>
            <img src={img1} />
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput answer="sun" index={1} goTo="flddot" />
            </S.TextInputContainer>
          </>
        )}
      {new Date() >= new Date("03/06/2020 00:00:00") &&
        window.location.pathname === `/flddot` && (
          <>
            <S.Number>2</S.Number>
            <S.Text>
              모두들 렝고의 문제를 풀어보았지만 특별히 무슨 일이 일어나지는
              않았다.
              <br />
              <br />
              “문제를 푼다고 뭔가 진행이 되는 그런 방식은 아닌것같아요.”
              <br />
              <br />
              “애초에 지금 저분 문제를 푸는 게 진행이 맞긴 해요?”
              <br />
              <br />
              “그럼 그냥 나머지 문제들도 다 풀어버리면 안됩니까?”
              <br />
              <br />
              “근데 그러다가 괜히 망칠 수 있으니까, 뭔가 나오기 전까지 일단
              문제는 내버려 두자구요.”
              <br />
              <br />
              아무런 설명도 진행도 없는 탓에 모두의 의견이 분분했다.
              <br />
              <br />
              “됐고! 방탈출의 기본은 수색이지! 일단 여기 뭐가있나 좀 뒤져봅시다
              삿삳히 아니 삿.. 샅 샅 샅 히”
              <br />
              <br />
              샅샅히의 발음을 강조하는 노넥의 말에 모두가 동의하여 다들 파티룸을
              살펴보기로 한다.
              <br />
              <br />
              군데군데 놓인 상자들을 열어보기도 하고, 테이블 위를 살펴보기도
              하며
              <br />
              <br />
              모두들 무언가 단서가 될만한 것을 찾아보는데 열중하던 그 때.
              <br />
              <br />
              “그러고 보니 저 풍선 살펴본사람 있어요?”
              <br />
              <br />
              노넥이 떠 있는 풍선들을 가리키며 소리쳤다.
              <br />
              <br />
              <img src={image2} alt="" />
              <br />
              <br />
              풍선들에는 각자 번호가 적혀 있었다.
              <br />
              <br />
              그 중에서도 노넥이 가리킨 것은 숫자 9가 적힌 풍선이었다.
              <br />
              <br />
              “풍선 안에 뭐가 들어있어요!”
              <br />
              <br />
              그 말을 듣고 살펴보자 확실히 풍선 안에 무언가 희끗희끗 비치는 것이
              보였다.
              <br />
              <br />
              “헐 누가 저거 좀 터뜨려 봐요!!”
              <br />
              <br />
              풍선에 달린 끈을 잡아당겨 내린 뒤 터뜨려보자 그 안에는 쪽지가
              들어있었다.
              <br />
              <br />
            </S.Text>
            <img src={img2_2} />
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput answer="marga" index={2} goTo="garam" />
            </S.TextInputContainer>
          </>
        )}
      {new Date() < new Date("03/06/2020 00:00:00") &&
        window.location.pathname === `/flddot` && (
          <>
            <Clock date={new Date("03/06/2020 00:00:00")} />
          </>
        )}

      {new Date() >= new Date("03/06/2020 00:00:00") &&
        window.location.pathname === `/garam` && (
          <>
            <S.Number>2</S.Number>
            <S.Text>
            	풍선의 내용물은 마가를 가리키고 있었다.
	            <br />
              	<br />
				“이런게 왜 풍선안에 있는거죠?”
				<br />
              	<br />
				“마가님이 정답인 문제라니 수상한데?”
				<br />
              	<br />
				“아니, 제가 넣어놓은게 아니라구요. 오히려 저도 궁금하거든요. 어째서 제 이름이 나오는데요?”
				<br />
              	<br />
				마가도 당황한듯이 변명을 하고 있었다.
				<br />
              	<br />
				“누가 준비한건진 몰라도 거기에 마가님 적혀 이름이 있다는건 연관이 있다는거 아니에요!?”
				<br />
              	<br />
				“그렇게치면 초대장 뒤에 이름이 적혀 있던 오군도 충분히 수상한거 아니에요?”
				<br />
              	<br />
				마가는 자신만 당할 수 없다며 앞서 문제를 냈던 렝고를 걸고 넘어졌다.
				<br />
              	<br />
				“흠 그것도 그렇군”
				<br />
              	<br />
				“마가님이 문제 낼 차례라는 거 아니에요?”
				<br />
              	<br />
				“이상하긴 하지만 왠지 그러라는것 같네요”
				<br />
              	<br />
				“그럼 이거부터 받고 내세요”
				<br />
              	<br />
				렝고는 달고 있던 뱃지를 떼서 마가한테 건내줬다.
				<br />
              	<br />
				마가는 뱃지를 받아 자신의 옷에 옮겨 달았다.
				<br />
              	<br />
				“네 알겠습니다. 그럼 제가 준비한 문제나 보시죠.”
				<br />
              	<br />
				그리고 주머니에서 펜을 꺼낸 뒤 자신의 초대장 뒷면에 그림을 그리기 시작했다.
				<br />
              	<br />
            </S.Text>
            <img src={img2} />
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput answer="blood" index={2} goTo="plooq" />
            </S.TextInputContainer>
          </>
        )}
      {new Date() >= new Date("03/08/2020 00:00:00") &&
        window.location.pathname === `/plooq` && (
          <>
            <S.Number>3</S.Number>
            <S.Text></S.Text>
            <img src={img3_2} />
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput answer="marvil" index={3} goTo="marvil" />
            </S.TextInputContainer>
          </>
        )}
      {new Date() < new Date("03/08/2020 00:00:00") &&
        window.location.pathname === `/plooq` && (
          <>
            <Clock date={new Date("03/08/2020 00:00:00")} />
          </>
        )}
      {new Date() >= new Date("03/10/2020 00:00:00") &&
        window.location.pathname === `/marvil` && (
          <>
            <S.Number>4</S.Number>
            <S.Text></S.Text>
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput answer="bus" index={3} goTo="bus" />
            </S.TextInputContainer>
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
              <TextInput answer="yusera" index={3} goTo="yusera" />
            </S.TextInputContainer>
          </>
        )}
      {new Date() < new Date("03/10/2020 00:00:00") &&
        window.location.pathname === `/bus` && (
          <>
            <Clock date={new Date("03/10/2020 00:00:00")} />
          </>
        )}
    </>
  );
};

export default Quiz;
