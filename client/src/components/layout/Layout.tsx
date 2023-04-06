import Sidebar from "../Sidebar";
import * as S from "../../style/CommonLayout";

function Layout({ children }: any) {
  return (
    <S.MainBodyLayout>
      <Sidebar />
      <S.MainSection>{children}</S.MainSection>
    </S.MainBodyLayout>
  );
}

export default Layout;
