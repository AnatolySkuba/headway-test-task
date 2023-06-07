import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import { Game, Over, Start } from "pages";
import { ROUTER_KEYS } from "consts";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path={ROUTER_KEYS.GAME} element={<Game />} />
        <Route path={ROUTER_KEYS.OVER} element={<Over />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
