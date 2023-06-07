import React from "react";
import { useSelector } from "react-redux";

import { getScore } from "store/questions/questionsSelectors";
import sprite from "assets/sprite.svg";
import { addCommasToNumber } from "helpers";
import useWindowWidth from "hooks";
import { BREAKPOINTS, COLORS, SCORES } from "consts";

import css from "./ScoreList.module.css";

function ScoreList() {
  const currentScore = useSelector(getScore);
  const windowWidth = useWindowWidth();
  const scoreView =
    windowWidth < BREAKPOINTS.DESKTOP_1440
      ? BREAKPOINTS.MOBILE
      : BREAKPOINTS.DESKTOP;

  return (
    <ul className={css.scores}>
      {SCORES.slice(0, -1).map((score: number) => (
        <li key={score} className={css.item}>
          <svg
            className={css.score}
            stroke={score === +currentScore ? COLORS.Orange100 : COLORS.Black40}
          >
            <use href={`${sprite}#step-${scoreView}`} />
          </svg>
          <p
            className={`${css.value} ${score < +currentScore && css.past}
                 ${score === +currentScore && css.active}`}
          >
            ${addCommasToNumber(score)}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ScoreList;
