import { MessageMainContainer } from "../../styled/component/Messages";
const Sensor = [
  "velocity",
  "altitude",
  "temperature",
  "statusMessage",
  "isAscending",
  "isActionRequired",
];

const Messages = () => {
  return (
    <>
      {Sensor.map((sensorName) => (
        <MessageMainContainer key={sensorName}>
          {sensorName}
        </MessageMainContainer>
      ))}
    </>
  );
};

export default Messages;
