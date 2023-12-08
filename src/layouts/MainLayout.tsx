import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <div>
      <div>ttttt</div>
      <Outlet />
      footer
    </div>
  );
};

export default MainLayout;

const TT = styled.div``;
