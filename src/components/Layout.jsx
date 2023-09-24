import { Outlet } from "react-router-dom";
import Header from "./Header";
import MainContent from "./MainContent";

const Layout = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
};

export default Layout;
