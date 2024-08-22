import styled from "styled-components";
import HeaderProfile from "./header-profile";

const Header = () => {
  return (
    <Wrapper>
      <Logo>velog</Logo>
      <RightIcons>
        <div>알람</div>
        <div>검색</div>
        <div>새 글 작성</div>
        <HeaderProfile />
      </RightIcons>
    </Wrapper>
  );
};

export default Header;
const RightIcons = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  background-color: yellow;
  gap: 2rem;
`;
const Logo = styled.div`
  font-size: 1.5rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  flex-shrink: 2;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
`;
