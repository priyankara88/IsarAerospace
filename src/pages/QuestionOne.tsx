import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ChartContainer, QoneMainContainer } from "../styled/pages/QuestionOne";

export interface iData {
  velocity: number;
  altitude: number;
  temperature: number;
  statusMessage?: string;
  isAscending?: boolean;
  isActionRequired?: boolean;
}

const QuestionOne = ({ data }: { data: iData[] }) => {
  return (
    <QoneMainContainer>
      <ChartContainer>
        <ChartBlock data={data} dataKey={"altitude"} />
      </ChartContainer>
      <ChartContainer>
        <ChartBlock data={data} dataKey={"velocity"} />
      </ChartContainer>
      <ChartContainer>
        <ChartBlock data={data} dataKey={"temperature"} />
      </ChartContainer>
    </QoneMainContainer>
  );
};

export default QuestionOne;

interface IChartBlock {
  data: iData[];
  dataKey: "velocity" | "altitude" | "temperature";
}

const ChartBlock: React.FC<IChartBlock> = ({ data, dataKey }) => {
  return (
    <div
      style={{
        marginTop: 27,
      }}
    >
      <LineChart width={420} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis dataKey="name" /> */}
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
      </LineChart>
    </div>
  );
};
