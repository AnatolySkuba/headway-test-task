import React from "react";

import { Question } from "types";

import css from "./GameDesktop.module.css";
import { ButtonList, ScoreList } from "../components";

export type Props = {
  currentQuestion: Question;
};

function GameDesktop({ currentQuestion }: Props) {
  return (
    <div className={css.container}>
      <div className={css.box}>
        <p className={css.question}>{currentQuestion.question}</p>
        <ButtonList currentQuestion={currentQuestion} />
      </div>
      <ScoreList />
    </div>
  );
}

export default GameDesktop;
