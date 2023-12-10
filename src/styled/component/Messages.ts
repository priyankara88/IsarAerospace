import styled from "styled-components";

export const MessageMainContainer = styled.div<{ bgcolor: string }>`
  width: 12vw;
  height: 7vw;
  margin: 10px;
  display: flex;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: larger;
  justify-content: center;
  background: ${({ bgcolor }) => bgcolor};
`;

export const MessageBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* background: gray; */
`;
