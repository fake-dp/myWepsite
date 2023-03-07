import Sidebar from "../Sidebar";
import styled from "styled-components";

const MainBodyLayout = styled.div`
  display: grid;
  margin-left: 200px;
  width: 100%;
  height: 100%;
`;

function Layout({ children }: any) {
  return (
    <>
      <Sidebar />
      <MainBodyLayout>{children}</MainBodyLayout>
    </>
  );
}

export default Layout;
