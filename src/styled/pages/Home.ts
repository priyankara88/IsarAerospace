import styled from "styled-components";

export const HomeMainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background: #10151d;
  @media (min-width: 1510px) {
    height: 100vh;
  }
`;
export const HomeHeaderContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeBodyContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-left: 100px;
  flex-direction: column;
`;

export const MessageContainer = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  position: relative;

  @media (min-width: 1323px) {
    display: flex;
  }
  @media (max-width: 1323px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RefreshButton = styled.button`
  width: 100px;
  height: 40px;
  margin: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: pointer;
  color: black;
  border-radius: 99999px;
  box-shadow: 0px 0px 10px 0px rgba(222, 222, 222, 0.75);
`;
