import NavigationHome from "../component/homepage/NavigationHome";
import { HomeMainContainer } from "../styled/pages/Home";
import QuestionOne from "./QuestionOne";
import { useState } from "react";

const Home = () => {
  interface state {
    iVal: string;
  }
  const [selectVal, setSelectVal] = useState<state>("Q1");

  console.log("selectVal", selectVal);
  return (
    <HomeMainContainer>
      <NavigationHome setSelectVal={setSelectVal} />
      <div>{selectVal == "Q1" ? <QuestionOne /> : null}</div>
    </HomeMainContainer>
  );
};

export default Home;
