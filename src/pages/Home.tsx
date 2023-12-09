import Messages from "../component/homepage/Messages";
import NavigationHome from "../component/homepage/NavigationHome";
import Issra from "../../public/img/isra.png";
import {
  HomeBodyContainer,
  HomeHeaderContainer,
  HomeMainContainer,
  ImageContainer,
  MessageContainer,
  TimeContainer,
} from "../styled/pages/Home";
import QuestionOne from "./QuestionOne";
import { useEffect, useState } from "react";

const Home = () => {
  interface state {
    iVal: string;
  }
  // State for Manage Side Button Click
  const [selectVal, setSelectVal] = useState<state>();

  return (
    <HomeMainContainer>
      <NavigationHome setSelectVal={setSelectVal} />
      <HomeBodyContainer>
        <HomeHeaderContainer>
          <ImageContainer>
            <img
              style={{ width: "150px", height: "60px" }}
              src={Issra}
              alt="logo"
            />
          </ImageContainer>
          <TimeContainer>bbbbbbb</TimeContainer>
        </HomeHeaderContainer>
        <MessageContainer>
          <Messages />
        </MessageContainer>

        {selectVal == "Q1" ? <QuestionOne /> : null}
      </HomeBodyContainer>
    </HomeMainContainer>
  );
};

export default Home;
