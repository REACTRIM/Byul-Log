import styled from "styled-components";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <RouterProvider router={Router} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1376px;
  height: 100vh;
  @media screen and (max-width: 1919px) {
    width: 1376px;
  }
  @media screen and (max-width: 1440px) {
    width: 1024px;
  }
  @media screen and (max-width: 1056px) {
    width: 100vw;
    padding: 0 10px;
  }
`;

export default App;
