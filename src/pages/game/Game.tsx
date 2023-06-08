import React from "react";
import { useSelector } from "react-redux";

import { Error, Loader } from "components";
import { BREAKPOINTS } from "consts";
import { Question } from "types";

import useWindowWidth from "../../hooks";
import { randElement } from "../../helpers";
import { useGetQuestionsQuery } from "../../store/questions/questionsApi";
import {
  getQuestions,
  getScore,
} from "../../store/questions/questionsSelectors";
import GameDesktop from "./game-desktop";
import GameMobile from "./game-mobile";

function Game() {
  const windowWidth = useWindowWidth();
  const data = useGetQuestionsQuery(getQuestions);
  const score = useSelector(getScore);

  if (data?.isLoading) {
    return <Loader />;
  }

  if (data?.isError) {
    return <Error />;
  }

  const { questions }: { questions: Question[] } = data.data;
  const availableQuestions = questions.filter(
    (question) => question.money === Number(score),
  );
  const currentQuestion = randElement(availableQuestions);

  return (
    <div>
      {windowWidth < BREAKPOINTS.DESKTOP_1440 ? (
        <GameMobile currentQuestion={currentQuestion} />
      ) : (
        <GameDesktop currentQuestion={currentQuestion} />
      )}
    </div>
  );
}

export default Game;
