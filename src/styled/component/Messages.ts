import styled from "styled-components";

export const MessageMainContainer = styled.div<{ bgcolor: string }>`
  width: 100%; /* Use 100% width for responsiveness */
  max-width: 250px; /* Set a maximum width to prevent it from becoming too wide */
  height: 100px; /* Make height dynamic */
  margin: 10px;
  overflow: auto;
  padding: 1rem;
  border-radius: 7px;
  font-size: larger;
  background: white;
  border: 4px solid ${({ bgcolor }) => bgcolor};
  @media (max-width: 750px) {
    max-width: 90%;
  }
`;

export const MessageBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: larger;
`;
