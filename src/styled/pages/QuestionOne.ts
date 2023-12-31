import styled from "styled-components";

export const QoneMainContainer = styled.div`
  // width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  @media (max-width: 1510px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #4c5561;
  border-radius: 7px;
`;
