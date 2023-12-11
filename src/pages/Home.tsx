import Messages from "../component/homepage/Messages";
import NavigationHome from "../component/homepage/NavigationHome";
import Issra from "../../public/img/isra.png";

import {
  ButtonContainer,
  HomeBodyContainer,
  HomeHeaderContainer,
  HomeMainContainer,
  ImageContainer,
  MessageContainer,
  RefreshButton,
  TimeContainer,
} from "../styled/pages/Home";
import QuestionOne, { iData } from "./QuestionOne";
import { useEffect, useState } from "react";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";

const Home = () => {
  // State for Manage Side Button Click
  const [selectVal, setSelectVal] = useState<string>("Q1");
  //Add Fetch Data to The useState
  const [fetchData, setFetchData] = useState<iData[]>([]);
  const [fetchSocketData, setFetchSocketData] = useState<iData[]>([]);

  //Fetch Data request state
  const [clickCount, setClickCount] = useState<number>(0);
  //Time useState
  const [currentTime, setCurrentTime] = useState(new Date());

  // Reques Data From API
  const HendleClick = () => {
    setClickCount(clickCount + 1);
  };

  //HandleSpectrum WSS

  const handleActOnSpectrumRequest = async () => {
    const requestData = { action: "PerformAction" };

    try {
      const response = await fetch(
        "https://webfrontendassignment-isaraerospace.azurewebsites.net/api/ActOnSpectrum",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const responseData = await response.json();
      if (responseData.success) {
        console.log(" successful");
      } else {
        console.error(" failed:", responseData.error);
      }
    } catch (error) {
      console.error("Failed to send equest:", error);
    }
  };
  //fetch Data from API
  useEffect(() => {
    fetch(
      "https://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumStatus"
    )
      .then((response) => response.json())
      .then((data) => {
        setFetchData((pre) => [...pre, data]);
      })
      .catch((error) => console.error(error));
  }, [clickCount]);

  //Clock UseEffect and timer
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
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
          <TimeContainer>{formattedTime}</TimeContainer>
        </HomeHeaderContainer>
        <MessageContainer>
          {selectVal === "Q1" ? (
            <Messages data={selectVal === "Q1" ? fetchData : fetchSocketData} />
          ) : selectVal === "Q2" ? (
            <Messages data={selectVal === "Q2" ? fetchSocketData : fetchData} />
          ) : null}
        </MessageContainer>
        <ButtonContainer>
          {selectVal === "Q1" ? (
            <RefreshButton onClick={HendleClick}>Request Data</RefreshButton>
          ) : (
            ""
          )}

          {selectVal === "Q2" ? (
            <RefreshButton onClick={() => handleActOnSpectrumRequest()}>
              act in Spectrum
            </RefreshButton>
          ) : (
            ""
          )}
        </ButtonContainer>

        {selectVal === "Q1" ? (
          <QuestionOne data={fetchData} />
        ) : selectVal === "Q2" ? (
          <QuestionTwo
            fetchSocketData={fetchSocketData}
            setFetchSocketData={setFetchSocketData}
          />
        ) : selectVal === "Q3" ? (
          <QuestionThree />
        ) : null}
      </HomeBodyContainer>
    </HomeMainContainer>
  );
};

export default Home;
