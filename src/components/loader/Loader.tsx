import React from "react";

import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.container}>
      <span className={css.loader} />
    </div>
  );
}

export default Loader;
