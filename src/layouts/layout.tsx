import Footer from "@thrip/components/Footer";
import Nav from "@thrip/components/Nav";
import { Outlet } from "react-router-dom";

interface Props {
  noFooter?: boolean;
}
const Layout = ({ noFooter }: Props) => {
  return (
    <>
      <Nav />
      <Outlet />
      {noFooter ? null : <Footer />}
    </>
  );
};

export default Layout;
