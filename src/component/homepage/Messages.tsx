import { MessageMainContainer } from "../../styled/component/Messages";
const Sensor = [
  "velocity",
  "altitude",
  "temperature",
  "statusMessage",
  "isAscending",
  "isActionRequired",
];

interface iData {
  velocity: number;
  altitude: number;
  temperature: number;
  statusMessage?: string;
  isAscending?: boolean;
  isActionRequired?: boolean;
}

const Messages = ({ data }: { data: iData[] }) => {
  return (
    <>
      {Sensor.map((sensorName) => (
        <MessageMainContainer key={sensorName}>
          <p>{sensorName}</p>
          <div>
            <LableData />
          </div>
        </MessageMainContainer>
      ))}
    </>
  );
};

export default Messages;

const LableData = () => {
  return <div>test</div>;
};
