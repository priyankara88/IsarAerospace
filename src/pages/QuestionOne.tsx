import styled from "styled-components";

const QuestionOne = () => {
  return (
    <QoneMainContainer>
      <ChartContainer>chart</ChartContainer>
      <ChartContainer>chart</ChartContainer>
      <ChartContainer>chart</ChartContainer>
    </QoneMainContainer>
  );
};

export default QuestionOne;

export const QoneMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  padding: 10px;
`;

export const ChartContainer = styled.div`
  width: 30%;
  display: flex;
  border: 2px solid #4c5561;
  border-radius: 7px;
`;
