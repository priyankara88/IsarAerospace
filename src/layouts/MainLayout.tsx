import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      heder
      <Outlet />
      footer
    </div>
  );
};

export default MainLayout;
