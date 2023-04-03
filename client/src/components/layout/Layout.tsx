import Sidebar from "../Sidebar";
import styled from "styled-components";

const MainBodyLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MainSection = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  margin-left: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    margin-left: 0;
  }
`;

function Layout({ children }: any) {
  return (
    <MainBodyLayout>
      <Sidebar />
      <MainSection>{children}</MainSection>
    </MainBodyLayout>
  );
}

export default Layout;
