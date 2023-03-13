import { Routes, Route } from "react-router-dom";

import Main from "../page/Main";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default AppRouter;
