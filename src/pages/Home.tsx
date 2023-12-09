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
import QuestionOne, { iData } from "./QuestionOne";
import { useEffect, useState } from "react";
import QuestionTwo from "./QuestionTwo";

const Home = () => {
  interface state {
    iVal: string;
  }
  // State for Manage Side Button Click
  const [selectVal, setSelectVal] = useState<state>();

  //Add Fetch Data to The useState
  const [fetchData, setFetchData] = useState<iData[]>([]);

  //fetch Data from API
  useEffect(() => {
    const t = setInterval(() => {
      fetch(
        "https://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumStatus"
      )
        .then((response) => response.json())
        .then((data) => {
          setFetchData((pre) => [...pre, data]);
          // console.log(data);
        })
        .catch((error) => console.error(error));
    }, 5000);

    return () => {
      clearInterval(t);
    };
  }, []);

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
          <Messages data={fetchData} />
        </MessageContainer>

        {selectVal === "Q1" ? (
          <QuestionOne data={fetchData} />
        ) : selectVal === "Q2" ? (
          <QuestionTwo />
        ) : null}
      </HomeBodyContainer>
    </HomeMainContainer>
  );
};

export default Home;
