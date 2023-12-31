import styled from "styled-components";

export const NavMainContainer = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #161e29;
  border-right: 2px solid #4c5561;
  z-index: 50;
`;

export const LinkToQuestion = styled.div`
  color: #3f51b5;
  font-size: 1em;
  width: 80px;
  text-align: center;
  background-color: #161e29;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 900;
  &:hover {
    background-color: lightblue;
    color: #000;
  }
`;
