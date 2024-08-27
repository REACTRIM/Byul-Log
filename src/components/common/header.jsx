import styled from "styled-components";
import HeaderProfile from "./header-profile";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    if (position === 0) setIsTop(false);
    else setIsTop(true);
    const handleScroll = () => {
      const moving = window.scrollY;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);
  useEffect(() => {
    if (params.postTitle) setIsHome(false);
    else setIsHome(true);
  }, [params]);
  return (
    <Wrapper isHome={isHome} isTop={isTop} visible={visible}>
      {params.postTitle ? (
        <Logo>
          <img
            src="/purple_star.png"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <span>{params.userId}.log</span>
        </Logo>
      ) : (
        <Logo onClick={() => navigate("/")}>byulog</Logo>
      )}
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
  cursor: pointer;
  display: flex;
  align-items: center;
  img {
    height: 30px;
    margin-right: 10px;
  }
  span {
    font-weight: 600;
    letter-spacing: -1px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  flex-shrink: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  background-color: ${({ isHome }) =>
    isHome ? "var(--background2)" : "white"};
  z-index: 4;
  box-shadow: ${({ isTop }) =>
    isTop ? "rgba(167, 167, 167, 0.2) 0px 2px 5px 0px;" : null};
`;
