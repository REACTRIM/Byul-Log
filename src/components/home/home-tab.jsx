import styled from "styled-components";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as StockIcon } from "../../assets/icons/stock-up.svg";
import { ReactComponent as WifiIcon } from "../../assets/icons/wifi.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const HomeTab = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tabRefs = useRef([]);
  const [transDegree, setTransDegree] = useState(0);
  useEffect(() => {
    tabRefs.current.forEach((el) => {
      el.style.setProperty("color", "var(--text3)");
      el.style.setProperty("font-weight", "200");
    });
    const pathname = location.pathname.split("/")[1];
    if (pathname === "trending") {
      setTransDegree(5);
      tabRefs.current[0].style.setProperty("color", "black");
      tabRefs.current[0].style.setProperty("font-weight", "700");
    } else if (pathname === "recent") {
      setTransDegree(92);
      tabRefs.current[1].style.setProperty("color", "black");
      tabRefs.current[1].style.setProperty("font-weight", "700");
    } else if (pathname === "feed") {
      setTransDegree(178);
      tabRefs.current[2].style.setProperty("color", "black");
      tabRefs.current[2].style.setProperty("font-weight", "700");
    }
  }, [location]);
  const onTabClick = (e) => {
    const clicked = e.target.id;
    navigate(`/${clicked}`);
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
      <SelectWrapper></SelectWrapper>
    </Wrapper>
  );
};

export default HomeTab;
const SelectWrapper = styled.div``;
const HomeTabIndicator = styled.div`
  height: 3px;
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
`;
const Wrapper = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  padding: 12px 0;
`;
