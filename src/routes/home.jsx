import styled from "styled-components";
import PostList from "../components/home/post-list";
import HomeTab from "../components/home/home-tab";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <Wrapper>
      <HomeTab />
      <PostList />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
