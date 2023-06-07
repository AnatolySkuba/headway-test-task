import React from "react";
import { useSelector } from "react-redux";

import { BREAKPOINTS } from "consts";
import { randElement } from "helpers";
import useWindowWidth from "hooks";
import { useGetQuestionsQuery } from "store/questions/questionsApi";
import { getQuestions, getScore } from "store/questions/questionsSelectors";
import { Question } from "types";

import GameDesktop from "./game-desktop";
import GameMobile from "./game-mobile";

function Game() {
  const windowWidth = useWindowWidth();
  const data = useGetQuestionsQuery(getQuestions);
  const score = useSelector(getScore);

  if (data?.isLoading) {
    return <p>Loading...</p>;
  }

  if (data?.isError) {
    return <p>Error</p>;
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
