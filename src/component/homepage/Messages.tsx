import {
  MessageBody,
  MessageMainContainer,
} from "../../styled/component/Messages";
const Sensor = [
  "velocity",
  "altitude",
  "temperature",
  "statusMessage",
  // "isAscending",
  // "isActionRequired",
];

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

const Messages = ({ data }: { data: iData[] }) => {
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
                : "white"
              : "white"
          }
        >
          <MessageBody>
            <p>{sensorName}</p>
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
              ) : sensorName == "isActionRequired" ? (
                <LableData
                  data={data.length ? data[data.length - 1] : defaultData}
                  dataKey={"isActionRequired"}
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
      {/* {data.map((item, index) => ( */}
      <div
        style={{
          color:
            dataKey === "temperature"
              ? data["isActionRequired"]
                ? "red"
                : "green"
              : "blue",
        }}
      >
        <p>{data[dataKey]}</p>
      </div>
      {/* ))} */}
    </div>
  );
};
