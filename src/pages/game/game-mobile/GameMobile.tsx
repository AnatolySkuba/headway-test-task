import React, { useState } from "react";
import { Question } from "types";

import sprite from "../../../assets/sprite.svg";
import css from "./GameMobile.module.css";
import { ButtonList, ScoreList } from "../components";

export type Props = {
  currentQuestion: Question;
};

function GameMobile({ currentQuestion }: Props) {
  const [isMenu, setIsMenu] = useState(true);

  return (
    <div className={css.container}>
      <div className={css.menu}>
        <button
          type="button"
          onClick={() => setIsMenu(!isMenu)}
          className={`btn ${css.icon}`}
        >
          <svg width={24} height={24}>
            <use href={`${sprite}#${isMenu ? "menu" : "close"}`} />
          </svg>
        </button>
      </div>
      {isMenu ? (
        <>
          <p className={css.question}>{currentQuestion.question}</p>
          <ButtonList currentQuestion={currentQuestion} />
        </>
      ) : (
        <ScoreList />
      )}
    </div>
  );
}

export default GameMobile;
