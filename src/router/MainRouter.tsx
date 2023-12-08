import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import QuestionOne from "../pages/QuestionOne";
import QuestionTwo from "../pages/QuestionTwo";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainLayout} />
        <Route index Component={Home} />
        <Route path="Question-One" Component={QuestionOne} />
        <Route path="Question-Two" Component={QuestionTwo} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
