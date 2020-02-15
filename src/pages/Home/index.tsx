import React from "react";
import * as S from "./styles";

import TextInput from "../../components/TextInput";

const Home: React.FC = () => {
  return (
    <S.Home>
      <S.Title>TITLE</S.Title>
      <S.SubTitle>SUBTITLE</S.SubTitle>
      <S.HiddenText>hint: k-8</S.HiddenText>
      <S.TextInputContainer>
        Input storycode
        <br />
        <br />
        <TextInput />
      </S.TextInputContainer>
      <S.Footer>Produced by Nonek, Developed by r4bb1t</S.Footer>
    </S.Home>
  );
};

export default Home;
