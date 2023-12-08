import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainLayout} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
