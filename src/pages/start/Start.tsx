import React from "react";
import { Link } from "react-router-dom";

import { ROUTER_KEYS } from "consts";

import sprite from "../../assets/sprite.svg";
import css from "./Start.module.css";

function Start() {
  return (
    <div className={css.container}>
      <svg className={css.picture}>
        <use href={`${sprite}#hand`} />
      </svg>
      <div>
        <h1 className={css.header}>
          Who wants to be
          <br />a millionaire?
        </h1>
        <Link to={ROUTER_KEYS.GAME}>
          <button type="button" className="btn btn-primary">
            Start
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Start;
