import styled from "styled-components";
import HeaderProfile from "./header-profile";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const Header = () => {
  return (
    <Wrapper>
      <Logo>byulog</Logo>
      <RightIcons>
        <div className="icon-div">
          <BellIcon />
        </div>
        <div className="icon-div">
          <SearchIcon />
        </div>
        <div className="new-post">새 글 작성</div>
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
  gap: 1.5rem;
  .icon-div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
    svg {
      width: 70%;
      height: 70%;
      stroke-width: 2px;
    }
    &:hover {
      background-color: var(--accent4);
    }
  }
  .new-post {
    cursor: pointer;
    border: 1px solid black;
    padding: 5px 15px;
    border-radius: 15px;
    font-size: 1.1rem;
    word-spacing: 0.4rem;
    &:hover {
      color: white;
      background-color: black;
      transition: background-color ease-in 0.2s, color ease-in 0.2s;
    }
  }
`;
const Logo = styled.div`
  font-size: 1.5rem;
  letter-spacing: 2px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  flex-shrink: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
`;
