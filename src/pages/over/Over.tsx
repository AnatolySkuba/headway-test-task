import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getScore } from "store/questions/questionsSelectors";
import { changeScore } from "store/questions/questionsSlice";
import { addCommasToNumber } from "helpers";
import { ROUTER_KEYS, SCORES } from "consts";
import sprite from "assets/sprite.svg";

import css from "./Over.module.css";

function Over() {
  const score = useSelector(getScore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButton = () => {
    dispatch(changeScore(SCORES[SCORES.length - 1]));
    navigate(ROUTER_KEYS.ROOT);
  };

  return (
    <div className={css.container}>
      <svg className={css.picture}>
        <use href={`${sprite}#hand`} />
      </svg>
      <div>
        <p className={css.total}>Total score:</p>
        <p className={css.score}>${addCommasToNumber(score)} earned</p>
        <button
          type="button"
          onClick={() => handleButton()}
          className="btn btn-primary"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default Over;
