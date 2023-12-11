import {
  MessageBody,
  MessageMainContainer,
  Title,
} from "../../styled/component/Messages";
const Sensor = ["velocity", "altitude", "temperature", "statusMessage"];

interface iData {
  velocity: number;
  altitude: number;
  temperature: number;
  statusMessage?: string;
  isAscending?: boolean;
  isActionRequired?: boolean;
}

const defaultData: iData = {
  velocity: 0,
  altitude: 0,
  temperature: 0,
  statusMessage: "",
  isAscending: false,
  isActionRequired: false,
};

interface ChildComponentProps {
  data: iData[];
}

const Messages: React.FC<ChildComponentProps> = ({ data }) => {
  return (
    <>
      {Sensor.map((sensorName) => (
        <MessageMainContainer
          key={sensorName}
          bgcolor={
            data.length
              ? sensorName === "temperature" &&
                data[data.length - 1]["isActionRequired"]
                ? "red"
                : sensorName === "altitude" &&
                  data[data.length - 1]["isActionRequired"]
                ? "red"
                : sensorName === "velocity" &&
                  data[data.length - 1]["isActionRequired"]
                ? "red"
                : sensorName === "statusMessage" &&
                  data[data.length - 1]["isActionRequired"]
                ? "red"
                : "#3f51b5"
              : ""
          }
        >
          <MessageBody>
            <Title>{sensorName}</Title>
            <div>
              {sensorName == "velocity" ? (
                <LableData
                  data={data.length ? data[data.length - 1] : defaultData}
                  dataKey={"velocity"}
                />
              ) : sensorName == "altitude" ? (
                <LableData
                  data={data.length ? data[data.length - 1] : defaultData}
                  dataKey={"altitude"}
                />
              ) : sensorName == "temperature" ? (
                <LableData
                  data={data.length ? data[data.length - 1] : defaultData}
                  dataKey={"temperature"}
                />
              ) : sensorName == "statusMessage" ? (
                <LableData
                  data={data.length ? data[data.length - 1] : defaultData}
                  dataKey={"statusMessage"}
                />
              ) : (
                ""
              )}
            </div>
          </MessageBody>
        </MessageMainContainer>
      ))}
    </>
  );
};

export default Messages;

interface ILableData {
  data: iData;
  dataKey:
    | "velocity"
    | "altitude"
    | "temperature"
    | "statusMessage"
    | "isActionRequired";
}

const LableData: React.FC<ILableData> = ({ data, dataKey }) => {
  return (
    <div>
      <div
        style={{
          color: "black",
        }}
      >
        <p>{data[dataKey]}</p>
        {data["isActionRequired"] ? (
          <p style={{ textAlign: "center", color: "red" }}>Action Required</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
