import Sidebar from "../Sidebar";
import styled from "styled-components";
import Footer from "../Footer";

const MainBodyLayout = styled.div`
  margin-left: 260px;
`;

function Layout({ children }: any) {
  return (
    <>
      <Sidebar />
      <MainBodyLayout>{children}</MainBodyLayout>
      <Footer />
    </>
  );
}

export default Layout;
