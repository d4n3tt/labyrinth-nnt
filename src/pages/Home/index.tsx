import React, { useState } from "react";
import * as S from "./styles";

import Button from "../../components/Button";
import Button16 from "../../components/Button16";
import Button18 from "../../components/Button18";

import icon0304 from "../../assets/icon-0304.png";
import icon0306 from "../../assets/icon-0306.png";
import icon0308 from "../../assets/icon-0308.png";
import icon0310 from "../../assets/icon-0310.png";
import icon0312 from "../../assets/icon-0312.png";
import icon0314 from "../../assets/icon-0314.png";

import Cookies from "universal-cookie";

const Home: React.FC = () => {
  const cookies = new Cookies();
  const [state, setState] = useState(cookies.get("cookie"));
  return (
    <S.Home>
      {/* <S.Title>TITLE</S.Title>
      <S.SubTitle>SUBTITLE</S.SubTitle> */}
      <S.Space />
      <S.Space />
      <S.Space />
      <S.Space />
      <S.Space />
      <S.ButtonContainer>
        <Button
          startDate={new Date("03/02/2020 00:00:00")}
          dateText="03/04"
          afterText="해"
          code="start"
          iconUrl={icon0304}
          index={1}
        />
        <Button
          startDate={new Date("03/06/2020 00:00:00")}
          dateText="03/06"
          afterText="피"
          code="flddot"
          iconUrl={icon0306}
          index={2}
        />
        <Button
          startDate={new Date("03/08/2020 00:00:00")}
          dateText="03/08"
          afterText="버스"
          code="plooq"
          iconUrl={icon0308}
          index={3}
        />
        <Button
          startDate={new Date("03/10/2020 00:00:00")}
          dateText="03/10"
          afterText="데이"
          code="aksdnjs"
          iconUrl={icon0310}
          index={4}
        />
      </S.ButtonContainer>
      <S.Space />
      <S.ButtonContainer>
        <Button
          startDate={new Date("03/12/2020 00:00:00")}
          dateText="03/12"
          afterText="투"
          code="cnrgkgo"
          iconUrl={icon0312}
          index={5}
        />
        <Button
          startDate={new Date("03/14/2020 00:00:00")}
          dateText="03/14"
          afterText="미"
          code="spqkrwk"
          iconUrl={icon0314}
          index={6}
        />
        <Button16 startDate={new Date("03/16/2020 00:00:00")} />
        <Button18
          startDate={new Date("03/18/2020 00:00:00")}
          code="muffan"
          dateText="03/18"
        />
      </S.ButtonContainer>
      <S.Space />
      <S.Space />
      <S.Space />
      {Number(state) < 6 && (
        <>
          <S.Footer>노넥 계획</S.Footer>
          <S.HiddenFooter>마가 기획</S.HiddenFooter>
          <S.HiddenFooter>톡기 개발</S.HiddenFooter>
        </>
      )}
      {Number(state) == 6 && (
        <>
          <S.Footer>노넥 생일</S.Footer>
          <S.HiddenFooter>마가 축하</S.HiddenFooter>
          <S.HiddenFooter>톡기 축하</S.HiddenFooter>
        </>
      )}
      {Number(state) == 7 && (
        <>
          <S.Footer>노넥 사망</S.Footer>
          <S.HiddenFooter>마가 사망</S.HiddenFooter>
          <S.HiddenFooter>톡기 사망</S.HiddenFooter>
        </>
      )}
      <S.Space />
    </S.Home>
  );
};

export default Home;
