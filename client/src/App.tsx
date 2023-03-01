import AppRouter from "./router/AppRouter";
import Layout from "./components/layout/Layout";
import { Reset } from "styled-reset";
function App() {
  return (
    <>
      <Reset />
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
}

export default App;
