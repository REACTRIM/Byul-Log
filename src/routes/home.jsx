import styled from "styled-components";
import PostList from "../components/home/post-list";
import HomeTab from "../components/home/home-tab";
import { HomeStyle } from "../styles/homeStyle";

const Home = () => {
  return (
    <Wrapper>
      <HomeStyle />
      <HomeTab />
      <PostList />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  background-color: var(--background2);
  width: 100%;
  display: flex;
  flex-direction: column;
`;
