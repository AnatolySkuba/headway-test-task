import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { changeScore } from "store/questions/questionsSlice";
import { BREAKPOINTS, BUTTONS, COLORS, SCORES } from "consts";
import sprite from "assets/sprite.svg";
import { areArraysEqual } from "helpers";
import useWindowWidth from "hooks";
import { Question } from "types";

import css from "./ButtonList.module.css";

type Props = {
  currentQuestion: Question;
};

function ButtonList({ currentQuestion }: Props) {
  const [answers, setAnswer] = useState<Array<string>>([]);
  const [isActive, setIsActive] = useState<{ [key: string]: boolean }>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();
  const buttonView =
    windowWidth < BREAKPOINTS.DESKTOP_1440
      ? BREAKPOINTS.MOBILE
      : BREAKPOINTS.DESKTOP;

  const handleMouseDown = (letter: string) => {
    setIsActive((prev) => ({ ...prev, [letter]: true }));
  };

  const handleMouseUp = (letter: string) => {
    setIsActive((prev) => ({ ...prev, [letter]: false }));
    if (currentQuestion.correct_answers.includes(letter)) {
      setAnswer((prev) => (prev.includes(letter) ? prev : [letter, ...prev]));
      if (
        areArraysEqual([letter, ...answers], currentQuestion.correct_answers)
      ) {
        dispatch(
          changeScore(SCORES[SCORES.indexOf(currentQuestion.money) - 1]),
        );
        setAnswer([]);
        if (SCORES[SCORES.indexOf(currentQuestion.money) - 1] === SCORES[0]) {
          navigate("/headway-test-task/over");
        }
      }
    } else {
      navigate("/headway-test-task/over");
    }
  };

  const getStateButton = (letter: string) => {
    if (answers.includes(letter)) {
      return currentQuestion.correct_answers.includes(letter)
        ? BUTTONS.CORRECT
        : BUTTONS.WRONG;
    }
    return BUTTONS.INACTIVE;
  };

  const getColorButton = (letter: string) => {
    if (answers.includes(letter)) {
      return currentQuestion.correct_answers.includes(letter)
        ? COLORS.Green100
        : COLORS.Red100;
    }
    return COLORS.Black40;
  };

  return (
    <ul className={css.list}>
      {currentQuestion.options.map((option) => (
        <li key={option.id} className={css.item}>
          <button
            type="button"
            onMouseDown={() => handleMouseDown(option.letter)}
            onMouseUp={() => handleMouseUp(option.letter)}
            className={`btn ${css["btn-secondary"]}`}
          >
            <svg
              stroke={getColorButton(option.letter)}
              className={css["btn-secondary"]}
            >
              <use
                href={`${sprite}#button-${buttonView}-${
                  isActive[option.letter]
                    ? BUTTONS.SELECTED
                    : getStateButton(option.letter)
                }`}
              />
            </svg>
            <p className={css.answer}>
              <span className={css.letter}>{option.letter}</span>
              {option.answer}
            </p>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ButtonList;
