import React from "react";

import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.container} role="main">
      <span className={css.loader} role="figure" />
    </div>
  );
}

export default Loader;
