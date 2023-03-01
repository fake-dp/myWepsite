import Headers from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const LayoutWrapper = styled.div``;

const MainBodyLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  /* background-color: bisque; */
  width: 100%;
  height: 100%;
`;

function Layout({ children }: any) {
  return (
    <LayoutWrapper>
      <Headers />
      <MainBodyLayout>
        <Sidebar />
        {children}
      </MainBodyLayout>
    </LayoutWrapper>
  );
}

export default Layout;
