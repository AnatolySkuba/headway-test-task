import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import { Game, Over, Start } from "pages";
// import { ROUTER_KEYS } from "consts";

function AppRouter() {
  return (
    <BrowserRouter basename="/headway-test-task">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
        <Route path="/over" element={<Over />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
