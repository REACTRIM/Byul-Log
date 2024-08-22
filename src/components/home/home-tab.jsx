import styled from "styled-components";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as StockIcon } from "../../assets/icons/stock-up.svg";
import { ReactComponent as WifiIcon } from "../../assets/icons/wifi.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SelectWrapper from "./select-wrapper";
const HomeTab = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tabRefs = useRef([]);
  const [transDegree, setTransDegree] = useState(0);
  useEffect(() => {
    const tabWidth = tabRefs.current[0]?.offsetWidth || 0;
    const pathname = location.pathname.split("/")[1];
    let index = 0;
    if (pathname === "recent") index = 1;
    else if (pathname === "feed") index = 2;
    setTransDegree(index * tabWidth + 2);

    tabRefs.current.forEach((el) => {
      if (el) {
        el.style.setProperty("color", "var(--text3)");
        el.style.setProperty("font-weight", "200");
      }
    });

    if (tabRefs.current[index]) {
      tabRefs.current[index].style.setProperty("color", "black");
      tabRefs.current[index].style.setProperty("font-weight", "700");
    }
  }, [location]);
  const onTabClick = (e) => {
    const clicked = e.target.id;
    if (clicked === "trending") navigate("/trending/week");
    else navigate(`/${clicked}`);
  };
  return (
    <Wrapper>
      <CatetoryTabContainer>
        <Tab
          id="trending"
          onClick={onTabClick}
          ref={(el) => (tabRefs.current[0] = el)}
        >
          <StockIcon id="trending" />
          <span id="trending">트렌딩</span>
        </Tab>
        <Tab
          id="recent"
          onClick={onTabClick}
          ref={(el) => (tabRefs.current[1] = el)}
        >
          <ClockIcon id="recent" />
          <span id="recent">최신</span>
        </Tab>
        <Tab
          id="feed"
          onClick={onTabClick}
          ref={(el) => (tabRefs.current[2] = el)}
        >
          <WifiIcon id="feed" />
          <span id="feed">피드</span>
        </Tab>
        <HomeTabIndicator transDegree={transDegree}></HomeTabIndicator>
      </CatetoryTabContainer>
      <SelectWrapper />
    </Wrapper>
  );
};

export default HomeTab;
const HomeTabIndicator = styled.div`
  height: 2px;
  position: absolute;
  transform: translateX(${(props) => props.transDegree}px);
  bottom: 0;
  width: 32%;
  background-color: black;
  transition: 0.2s ease-in-out transform;
`;
const Tab = styled.div`
  cursor: pointer;
  color: var(--text3);
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-size: 1.2rem;
  svg {
    width: 30%;
    stroke-width: 2px;
  }
`;
const CatetoryTabContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 262px;
  @media screen and (max-width: 768px) {
    width: 220px;
  }
`;
const Wrapper = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;
