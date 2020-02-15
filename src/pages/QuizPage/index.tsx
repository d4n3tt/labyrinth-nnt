import React from "react";
import Quiz from "../../components/Quiz";
import * as S from "./styles";

const QuizPage: React.FC = () => {
  return (
    <S.QuizPage>
      <Quiz />
    </S.QuizPage>
  );
};

export default QuizPage;
