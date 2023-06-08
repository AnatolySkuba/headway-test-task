import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import { Game, Over, Start } from "pages";
import { ROUTER_KEYS, BREAKPOINTS } from "consts";

function AppRouter() {
  return (
    <BrowserRouter basename={ROUTER_KEYS.BASENAME}>
      <Routes>
        <Route path={ROUTER_KEYS.ROOT} element={<Start />} />
        <Route path={ROUTER_KEYS.GAME} element={<Game />} />
        <Route path={ROUTER_KEYS.OVER} element={<Over />} />
        <Route path="*" element={<Navigate to={ROUTER_KEYS.ROOT} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
