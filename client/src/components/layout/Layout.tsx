import Sidebar from "../Sidebar";
import styled from "styled-components";
import Footer from "../Footer";

const MainBodyLayout = styled.div`
  margin-left: 260px;
  @media screen and (max-width: 800px) {
    margin-left: 100px;
  }
`;

function Layout({ children }: any) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 9 }}>{children}</div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
