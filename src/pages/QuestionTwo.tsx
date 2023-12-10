import { useEffect } from "react";
import QuestionOne, { iData } from "./QuestionOne";

interface IQuestionTwo {
  fetchSocketData: iData[];
  setFetchSocketData: React.Dispatch<React.SetStateAction<iData[]>>;
}

const QuestionTwo: React.FC<IQuestionTwo> = ({
  fetchSocketData,
  setFetchSocketData,
}) => {
  useEffect(() => {
    const socket = new WebSocket(
      "wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS"
    );

    socket.addEventListener("open", (event) => {
      console.log("WebSocket connection opened:", event);
    });

    socket.addEventListener("message", async (event) => {
      const data = await JSON.parse(event.data);
      console.log(data);
      setFetchSocketData((pre) => [
        ...pre,
        {
          velocity: data.Velocity,
          altitude: data.Altitude,
          temperature: data.Temperature,
          statusMessage: data.StatusMessage,
          isAscending: data.IsAscending,
          isActionRequired: data.IsActionRequired,
        },
      ]);
    });

    socket.addEventListener("close", (event) => {
      console.log("WebSocket connection closed:", event);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <QuestionOne data={fetchSocketData} />
    </div>
  );
};

export default QuestionTwo;
