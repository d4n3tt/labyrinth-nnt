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
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";

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
              <img src={image1} alt="" style={{ width: "30rem" }} />
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
            <img src={img1} style={{ width: "30rem" }} />
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
            <img src={img2_2} style={{ width: "30rem" }} />
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput answer="marga" index={1} goTo="garam" />
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
              “아니, 제가 넣어놓은게 아니라구요. 오히려 저도 궁금하거든요.
              어째서 제 이름이 나오는데요?”
              <br />
              <br />
              마가도 당황한듯이 변명을 하고 있었다.
              <br />
              <br />
              “누가 준비한건진 몰라도 거기에 마가님 적혀 이름이 있다는건 연관이
              있다는거 아니에요!?”
              <br />
              <br />
              “그렇게치면 초대장 뒤에 이름이 적혀 있던 오군도 충분히 수상한거
              아니에요?”
              <br />
              <br />
              마가는 자신만 당할 수 없다며 앞서 문제를 냈던 렝고를 걸고
              넘어졌다.
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
              그리고 주머니에서 펜을 꺼낸 뒤 자신의 초대장 뒷면에 그림을 그리기
              시작했다.
              <br />
              <br />
            </S.Text>
            <img src={img2} style={{ width: "30rem" }} />
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput answer="blood" index={2} goTo="plooq" />
            </S.TextInputContainer>
          </>
        )}

      {new Date() < new Date("03/08/2020 00:00:00") &&
        window.location.pathname === `/plooq` && (
          <>
            <Clock date={new Date("03/08/2020 00:00:00")} />
          </>
        )}
      {new Date() >= new Date("03/08/2020 00:00:00") &&
        window.location.pathname === `/plooq` && (
          <>
            <S.Number>3</S.Number>
            <S.Text>
              역시나 마가의 문제를 푼다고 해서 무슨 일이 일어나지는 않았다.
              <br />
              <br />
              “...이렇게 하는게 맞는건지 모르겠네요”
              <br />
              <br />
              “특별히 시키는것도 없는데 이것밖에 더 있어요?”
              <br />
              <br />
              “아니 그런게 의도라면 문제 풀 때마다 띵동~ 소리 나면서 스피커에서
              변조된 목소리가 나오며 해설이라도 해 줘야 하는거 아니에요??”
              <br />
              <br />
              “어이 그건 너무 본격적이잖아”
              <br />
              <br />
              “그렇게 해줄정도로 예산이 남아돌진 않았나 보네요”
              <br />
              <br />
              “어차피 이렇게 뭐가뭔지 모를바엔 제발 그냥 다 풀어버리면
              안되는건가요?”
              <br />
              <br />
              “혹시 모르니까 다음사람 이름을 찾아보는게 좋을것같은데요”
              <br />
              <br />
              주최자의 어설픔을 비난하며 각자 떠들고 있던 와중에 갑작스러운
              폭발음이 일어났다.
              <br />
              <br />
              “악 와씨 깜짝이야!”
              <br />
              <br />
              “뭐임? 대체 뭐임??”
              <br />
              <br />
              사방에 화려한 종이조각들이 날리며 떨어지고 있었다.
              <br />
              <br />
              “악 죄송해여”
              <br />
              <br />
              톡기가 조심스럽게 사과하며 말했다.
              <br />
              <br />
              “뭔가 줄같은 게 있길래 땡겼더니 폭죽같은 게 터졌나봐요.”
              <br />
              <br />
              “아이 톡기님도 참! 놀래키기전에 깜빡깜빡을 하셧어야죠!”
              <br />
              <br />
              “깜빡깜빡ㅎㅎ...”
              <br />
              <br />
              “늦었는데요”
              <br />
              <br />
              “저기 뭐 또 있는것 같은데요”
              <br />
              <br />
              렝고가 가리킨 곳에는 흩날리는 꽃보라 사이에 상대적으로 커다란 종이
              한 장이 펄럭거리며 떨어지고 있었다.
              <br />
              <br />
              잡아서 확인해보니 여기에도 문제가 적혀 있었다.
              <br />
              <br />
            </S.Text>
            <img src={img3_2} style={{ width: "30rem" }} />
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput answer="marvil" index={2} goTo="dpqksep" />
            </S.TextInputContainer>
          </>
        )}
      {new Date() >= new Date("03/08/2020 00:00:00") &&
        window.location.pathname === `/dpqksep` && (
          <>
            <S.Number>3</S.Number>
            <S.Text>
              “두번째까지는 긴가민가 했는데 이정도면...”
              <br />
              <br />
              “이 때까지 패턴으로 봐선 마뷜님이 하는게 맞는것같네요”
              <br />
              <br />
              “그럼 마료씨 이거 받으세요.”
              <br />
              <br />
              이전 문제를 냈던 마가가 차고 있던 뱃지를 풀고 마뷜에게 건내주려고
              던졌다.
              <br />
              <br />
              그러나 손이 미끄러진건지 운동신경 부족인지 뱃지는 다른 방향으로
              날아갔고, 그대로 테이블에 있던 다른 물건과 부딪혀 톡기 앞으로
              떨어졌다.
              <br />
              <br />
              “악 내 바나나!!”
              <br />
              <br />
              톡기는 당황하며 뱃지와 떨어진 물건을 주웠다.
              <br />
              <br />
              <img src={image3} alt="" style={{ width: "30rem" }} />
              <br />
              <br />
              그 물건은 얼굴이 그려진 분홍색 바나나 인형이었다.
              <br />
              <br />
              “그..기괴한 바나나는 뭐죠”
              <br />
              <br />
              “아니 기괴하다니요. 제 소중한 바나나인데”
              <br />
              <br />
              “저거 테탑에서 만들었던 바나나 아니에요?”
              <br />
              <br />
              “마자여 아까 쩌기 상자에 있던데.”
              <br />
              <br />
              “다른 바나나들도 있어? 내 캐디같은거”
              <br />
              <br />
              “아니아니 내것만 있던데?”
              <br />
              <br />
              “캐디가 왜 캐디에요?”
              <br />
              <br />
              “아 바바나 캐디시번.. 캐번시디 종이라서요!”
              <br />
              <br />
              “왜 하필 톡기님 바나나만 있는거지? 개꿀잼 몰카인가?”
              <br />
              <br />
              “그럼 톡기님이 문제낼 차례라는거 아니에요? 저거 언제 발견했어요?”
              <br />
              <br />
              “바나나는 바나나지 토끼가 아니잖아요.”
              <br />
              <br />
              “근데 다른사람 바나나는 없잖아요”
              <br />
              <br />
              바나나의 존재로 사람들은 혼란에 빠지고 말았다.
              <br />
              <br />
              진행 자체가 가이드라인 없이 어중간하게 이루어지고 있던 탓에 벌어진
              일이었다.
              <br />
              <br />
              “일단 그냥 이름 나온 제가 할게요.”
              <br />
              <br />
              보다못한 마뷜이 일어서며 이야기를 꺼냈다.
              <br />
              <br />
              “그래요 괴상하게 생긴 분홍색 바나나보다는 그게 확실하겠죠”
              <br />
              <br />
              “그럼 문제 낼게요 뱃지 줘봐요”
              <br />
              <br />
              뱃지를 받은 마뷜은 펜을 꺼내서 자신의 초대장에 간단한 식을 적기
              시작했다.
              <br />
              <br />
              <br />
              <br />
              연어 ※ s ¤ d = 아몬드
              <br />
              아몬드 ※ ad ¤ e = 레몬
              <br />
              부산 ※ 판다 ¤ 휴대정보단말기 = ?
              <br />
              <br />
            </S.Text>
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput answer="bus" index={3} goTo="aksdnjs" />
            </S.TextInputContainer>
          </>
        )}
      {new Date() < new Date("03/10/2020 00:00:00") &&
        window.location.pathname === `/aksdnjs` && (
          <>
            <Clock date={new Date("03/10/2020 00:00:00")} />
          </>
        )}
      {new Date() >= new Date("03/10/2020 00:00:00") &&
        window.location.pathname === `/aksdnjs` && (
          <>
            <S.Number>4</S.Number>
            <S.Text>
              “잠깐만요, 뭔가 이상하지 않아요?”
              <br />
              <br />
              마뷜의 문제를 풀고 나서 렝고가 말을 꺼냈다.
              <br />
              <br />
              “초대장 뒷면도 그렇고, 풍선이나 폭죽 터진 거나 전부 다 다른
              사람들이 우연히 발견한 건데 이걸 진행이라고 봐도 될까요? 완전
              우연에 의존하고 있잖아요!”
              <br />
              <br />
              “듣고 보니 그것도 그러네요.”
              <br />
              <br />
              “아니면 애초부터 순서가 별로 상관 없었던 것일 수도 있구요.”
              <br />
              <br />
              “합리적으로 생각해보면 그게 맞겠네요”
              <br />
              <br />
              “그럼 순서가 상관 없으니 바나나 주인인 톡님이 문제 내시면
              되겠네요!”
              <br />
              <br />
              “바나나는 바나나지 톡기가 아니잖아요. 귀가 달렸으면 몰라 어쨌든
              이게 제 이름을 가리키는 건 아니니까 불확실한 거 말고 다른 확실한
              걸 찾아보는 게 낫지 않아요?”
              <br />
              <br />
              톡기가 주장했다.
              <br />
              <br />
              “그럼 뭐부터 해야 돼? 스위치나 주세요.”
              <br />
              <br />
              “‎𐨛 𐌅 𐨛 ｦ𐌅 𐨛 ｦ 𐌅 𐨛 ｦ 𐌅 𐨛 ｦ 𐌅 𐨛 ｦ 아뭔데 모자 개웃기네𐌅 𐨛 ｦ 𐌅 𐨛 ｦ𐨛
              𐌅 𐨛 ｦ𐌅 𐨛 ｦ 𐌅 𐨛 ｦ 𐌅 𐨛 ｦ 𐌅 𐨛 ｦ 𐌅”
              <br />
              <br />
              볍씨의 말에 모두들 유세라를 쳐다봤다.
              <br />
              <br />
              유세라는 어느샌가 괴상한 그림이 그려진 고깔모자를 주워서 머리에
              쓰고 있던 것이다.
              <br />
              <br />
              <img src={image4} alt="" style={{ width: "30rem" }} />
              <br />
              <br />
              선글라스만 해도 충분히 개성적인데 거기다가 혼자서 파티 기분이라도
              내는 듯이 기묘한 고깔모자를 쓰고 있으니 그 모습이 상당히 괴상했다.
              <br />
              <br />
              “선글라스도 모자라서 모자까지.. 패셔니스타시네요.”
              <br />
              <br />
              “뭐야 언제 이런 걸 썼지?”
              <br />
              <br />
              “?”
              <br />
              <br />
              유세라는 자신이 고깔모자를 쓴게 아니라, 조금 전 문제를 풀고 서로
              토론하던 사이 어느 순간부터 쓰고 있었다고 주장했다.
              <br />
              <br />
              “모자가 혼자 씌워졌다고요? 헛소리하지 마세요”
              <br />
              <br />
              “아니; 진짜 아니에요 그냥 누가 씌워주길래 그냥 썼던 것 같아요.”
              <br />
              <br />
              “근데 그게 누군지 모른다구요?”
              <br />
              <br />
              그러나 자신이 유세라에게 모자를 씌웠다고 하는 사람은 아무도
              없었다.
              <br />
              <br />
              “누가 유세라님한테 모자 씌우는거 본 사람”
              <br />
              <br />
              “마뷜님 문제 풀고 있느라 못 봤죠”
              <br />
              <br />
              “그냥 혼자서 쇼 하는거 아님?”
              <br />
              <br />
              “저는 진짜 억울합니다”
              <br />
              <br />
              유세라는 하소연을 하며 모자를 벗어서 테이블에 올려두려고 했다.
              <br />
              <br />
              그러자 모자 안에서 무언가가 떨어졌다.
              <br />
              <br />
            </S.Text>
            <img src={img4_2} style={{ width: "40rem" }} />
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput answer="yusera" index={3} goTo="emaghctaw" />
            </S.TextInputContainer>
          </>
        )}
      {new Date() >= new Date("03/10/2020 00:00:00") &&
        window.location.pathname === `/emaghctaw` && (
          <>
            <S.Number>4</S.Number>
            <S.Text>
              “이번에는 유세라님 차례인가봐요.”
              <br />
              <br />
              “그럼 모자를 씌운 사람이 이 파티를 벌인 범인이겠네요?”
              <br />
              <br />
              “직접 썼을 수도 있고요.”
              <br />
              <br />
              “아니 진짜 아니라니까요.”
              <br />
              <br />
              굉장히 터무니없는 일이 눈 앞에서 일어난지라 파티룸이
              소란스러워졌다.
              <br />
              <br />
              “자신에게 모자를 씌운 사람을 못 봤다는 주장이 정말 수상하지만,
              만약 진짜라면 범인은 근처에 있던 사람이겠네요.”
              <br />
              <br />
              “이렇게 앉은 상태에서 모자를 씌울 수 있을 사람은 양 옆 밖에 없지
              않아요?”
              <br />
              <br />
              <img src={image5} alt="" style={{ width: "30rem" }} />
              <br />
              <br />
              유세라의 양 옆에는 톡기와 머판이 앉아있는 상태였다.
              <br />
              <br />
              “만약 엽씨가 직접 모자를 쓴게 아니라면 멀리 있는 사람이 모자를
              씌우려다간 다 들킬테니 적어도 톡님이나 머판님이 씌우셨다고 보는게
              맞겠죠?”
              <br />
              <br />
              “잠깐만요. 이 자리대로라면 마뷜님의 반대편에 앉아있는 마가님이나
              볍씨가 마뷜님의 문제를 보면서 무언가를 자연스럽게 봤을 수도 있지
              않을까요?”
              <br />
              <br />
              “아 저는 문제를 제 앞에 받아적어놓고 풀고 있어서 전혀 못 봤어요”
              <br />
              <br />
              마가는 마뷜의 문제를 옮겨적은 종이를 들어 흔들며 보여주었다.
              <br />
              <br />
              “나도 이거 먹느라 못 밨다. 으이구 인간아 ᕙ( ︡’︡益’︠)ง”
              <br />
              <br />
              볍씨의 손에는 어느새 앞에 있던 그릇에서 꺼낸 머핀이 들려 있었다.
              <br />
              <br />
              “그걸!! 먹으면!!! 어떡해요!!!!”
              <br />
              <br />
              “어..먹으려고 둔거 아니였어요?”
              <br />
              <br />
              “아니 뭐가 들어있을지 알고 먹어요. 하 진짜 괜찮아요?”
              <br />
              <br />
              다행히도 주최자에게 그런 쪽의 악의는 없었는지 볍씨는 아주
              멀쩡했다.
              <br />
              <br />
              “쟤 괜찮은거보니까 먹어도 되는것같은데 그냥 같이 먹을까요?”
              <br />
              <br />
              “음식 안에 문제 같은 준비해둔게 있을지도 모르는데 되도록 다 끝나고
              먹는게 낫지 않을까요?”
              <br />
              <br />
              "문제 이미 먹은거 아니에요?"
              <br />
              <br />
              "그건 그거대로 문제네ㅋ"
              <br />
              <br />
              “그런데 문제라고 하면 지금 유세라님이 문제 낼 차례였으니까 일단
              문제부터 주세요”
              <br />
              <br />
              “슬슬 배고픈데 빨리 끝내버리고 우리도 같이 먹읍시다.”
              <br />
              <br />
              눈 앞의 먹음직스러운 음식의 유혹에 조금전까지 불거졌던 의혹은 잠시
              접어두고 문제를 풀자는 분위기가 형성되었다.
              <br />
              <br />
              “그렇게 됐으니 뱃지부터 받으세요”
              <br />
              <br />
              마뷜은 유세라에게 뱃지를 던졌다.
              <br />
              <br />
              “그럼 문제 내겠습니다.”
              <br />
              <br />
              뱃지를 받은 유세라는 문제를 내기 위해 입을 열었다.
              <br />
              <br />
              <br />
              <br />
              다음 공란에 들어갈 알맞은 말과 동음의 영단어를 쓰세요. (알파벳
              3글자)
              <br />
              <br />
              서울 소재 김 씨: 할머니 진지 드셨어요?
              <br />
              부산 소재 이 씨: 고마 인자방금 먹었ㅁㅁ.
              <br />
              <br />
            </S.Text>
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput answer="day" index={4} goTo="cnrgkgo" />
            </S.TextInputContainer>
          </>
        )}
      {new Date() < new Date("03/12/2020 00:00:00") &&
        window.location.pathname === `/cnrgkgo` && (
          <>
            <Clock date={new Date("03/12/2020 00:00:00")} />
          </>
        )}
      {new Date() >= new Date("03/12/2020 00:00:00") &&
        window.location.pathname === `/cnrgkgo` && (
          <>
            <S.Number>5</S.Number>
            <S.Text>
              “문제가 억수로 별나데이...”
              <br />
              <br />
              “사실 제대로 생각했었는데 박명수가 지워버렸어요”
              <br />
              <br />
              “뭔 소리야 아무튼 다음 문제도 빨리 풀어봐요”
              <br />
              <br />
              그 때였다.
              <br />
              <br />
              갑작스럽게 커다란 쨍그랑 소리가 울려퍼졌다.
              <br />
              <br />
              “아아아아아아ㅏㅇ아ㅏ아아아ㅏ악”
              <br />
              <br />
              톡기가 실수로 테이블 위에 있던 사이다 병을 쳐서 떨어트린 것이다.
              <br />
              <br />
              모두 놀라서 그 쪽을 쳐다보았다.
              <br />
              <br />
              "아니 무슨 일이에요?"
              <br />
              <br />
              "병이 깨졌어요!!"
              <br />
              <br />
              "병 깨진 소리보다 님 비명소리에 더 놀랐음"
              <br />
              <br />
              "깜빡깜빡ㅎㅎ.."
              <br />
              <br />
              “왁 씨 이거뭐야”
              <br />
              <br />
              엎질러진 사이다의 일부가 옆에 있던 마뷜에게 튀어 있었다.
              <br />
              <br />
              “아 옷 이거밖에 없는데.. 씻고 올게요.”
              <br />
              <br />
              마뷜은 곧바로 자리에서 일어나 화장실로 향했다.
              <br />
              <br />
              “이거 조각 위험해서 치워야될텐데 빗자루 어딨어요?”
              <br />
              <br />
              톡기도 유리를 피해 자리에서 일어나며 말했다.
              <br />
              <br />
              “청소 도구라면 아까 살펴보다가 베란다에서 본 것 같은데 같이 가요.”
              <br />
              <br />
              렝고가 기억을 되살리며 말했다.
              <br />
              <br />
              “그럼 전 사이다 더 없나 찾아보고 올게요. 술은 안 가지고 올거니까
              톡님 기대하지 마세요.”
              <br />
              <br />
              깨진 병이 아쉬운 듯 머판이 말하며 일어서 부엌으로 향했다.
              <br />
              <br />
              다른 사람들도 정리를 돕기 위해 주변을 살피는 와중에 마가가
              무언가를 발견한 듯 소리쳤다.
              <br />
              <br />
              “잠깐만요 저것 좀 보세요!!”
              <br />
              <br />
            </S.Text>
            <img src={img5_2} style={{ width: "30rem" }} />
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput answer="byeop" index={4} goTo="dbgodrk" />
            </S.TextInputContainer>
          </>
        )}
      {new Date() >= new Date("03/12/2020 00:00:00") &&
        window.location.pathname === `/dbgodrk` && (
          <>
            <S.Number>5</S.Number>
            <S.Text>
              <img src={image6} alt="" style={{ width: "30rem" }} />
              테이블 위의 머핀에 볍씨를 가리키는 카드가 꽂혀 있던 것이다.
              <br />
              <br />
              “이번엔 또 무슨 일이에요?”
              <br />
              <br />
              청소도구를 가져온 렝고가 물었다.
              <br />
              <br />
              “병 깨져서 난리난 사이에 누가 빵에 문제를 꽂아놨어요.”
              <br />
              <br />
              “뭐야. 이번엔 또 누가 꽂은거야? 지문감식이라도 좀 해봐요.”
              <br />
              <br />
              봉투를 들고 온 톡기가 말했다.
              <br />
              <br />
              <img src={image7} alt="" style={{ width: "30rem" }} />
              <br />
              <br />
              머핀이 담긴 그릇은 이름이 비슷한 머판과 마가 그리고 볍씨의 자리로
              둘러쌓여 있었다.
              <br />
              <br />
              다른 사람이 문제를 꽂으려고 했다면 혼란스러운 상황이었다곤 하지만
              보는 눈이 있었다고 생각됐다.
              <br />
              <br />
              “잠시만, 진짜 수상한 사람이 누구인지 알아냈어요!”
              <br />
              <br />
              “머임? 무슨 일임?”
              <br />
              <br />
              방금 부엌에서 돌아온 머판이 말했다.
              <br />
              <br />
              “아 이런건 나중에 하고 빨리 제 문제나 풀어요!”
              <br />
              <br />
              재촉하며 볍씨가 유세라에게서 뱃지를 받았다.
              <br />
              <br />
              그리곤 마침 화장실에서 마뷜이 돌아오자 이 때다 싶어 문제를 내기
              시작했다.
              <br />
              <br />
              <br />
              <br />1 + 2 + 6 = 1<br />
              3 / 3 + 8 + 10 = 0<br />
              7 x 2 - 13 + 12 = 2<br />
              2 x 2 x 10 + 2 = 3<br />
              12 x 10 + 8/2 = ?<br />
              <br />
            </S.Text>
            <S.TextInputContainer>
              Answer
              <br />
              <br />
              <TextInput answer="two" index={5} goTo="cnrgkgo" />
            </S.TextInputContainer>
          </>
        )}
      {new Date() < new Date("03/12/2020 00:00:00") &&
        window.location.pathname === `/cnrgkgo` && (
          <>
            <Clock date={new Date("03/12/2020 00:00:00")} />
          </>
        )}
      {/* ㅁㄴㅇ */}
    </>
  );
};

export default Quiz;
