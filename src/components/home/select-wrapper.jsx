import styled, { keyframes } from "styled-components";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/icons/down-arow.svg";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const SelectWrapper = () => {
  const ListRefs = useRef([]);
  const { pathname } = useLocation();
  const { range } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState("이번 주");
  useEffect(() => {
    // const path = location.pathname.split("/")[2];
    if (ListRefs.current[0] && ListRefs.current[1]) {
      if (range === "day") {
        setSelected("오늘");
        ListRefs.current[1].style.setProperty("color", "black");
        ListRefs.current[0].style.setProperty("color", "var(--primary1)");
      } else if (range === "week") {
        setSelected("이번 주");
        ListRefs.current[0].style.setProperty("color", "black");
        ListRefs.current[1].style.setProperty("color", "var(--primary1)");
      }
    }
  }, [isModalOpen, range]);
  const handleModal = () => {
    if (isModalOpen) {
      setVisible(false);
      setTimeout(() => {
        setIsModalOpen(false);
      }, 190);
    } else {
      setVisible(true);
      setTimeout(() => {
        setIsModalOpen(true);
      }, 190);
    }
  };
  return (
    <Wrapper>
      {pathname.split("/")[1] === "trending" ? (
        <SelectBox onClick={handleModal}>
          <span>{selected}</span>
          <DownArrowIcon />
        </SelectBox>
      ) : (
        <SelectBox style={{ background: "none", border: "none" }}></SelectBox>
      )}
      <MoreIcon />
      {isModalOpen && (
        <Modal visible={visible} ismodalopen={isModalOpen}>
          <li
            onClick={() => {
              handleModal();
              navigate("/trending/day");
            }}
            id="day"
            ref={(el) => (ListRefs.current[0] = el)}
          >
            오늘
          </li>
          <li
            onClick={() => {
              handleModal();
              navigate("/trending/week");
            }}
            id="week"
            ref={(el) => (ListRefs.current[1] = el)}
          >
            이번 주
          </li>
        </Modal>
      )}
    </Wrapper>
  );
};

export default SelectWrapper;
const Modal = styled.ul`
  position: absolute;
  background-color: var(--border3);
  top: 130%;
  right: 0;
  width: 150%;
  display: flex;
  flex-direction: column;
  gap: 0.5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  visibility: ${({ ismodalopen }) => (ismodalopen ? "visible" : "hidden")};
  transition: visibility 0.2s ease-out;
  animation: ${({ visible }) => (visible ? scaleUpTr : scaleDownTr)} 0.2s
    ease-in;
  li {
    cursor: pointer;
    background-color: white;
    padding: 15px;
    font-size: 1rem;
    &:hover {
      background-color: var(--bg-element3);
    }
  }
`;
const SelectBox = styled.div`
  cursor: pointer;
  width: 70%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid var(--border3);
  border-radius: 5px;
  svg {
    width: 20%;
    fill: black;
    path {
      stroke: none;
    }
  }
  &:hover {
    color: var(--text3);
    svg {
      fill: var(--text3);
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 134px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    width: 118px;
  }
  @media screen and (max-width: 376px) {
    width: 104px;
  }
  svg {
    cursor: pointer;
    height: 28px;
    stroke: var(--text3);
  }
`;

const scaleUpTr = keyframes`
   0% {
    opacity: 0;
    transform: scale(0.7);
    transform-origin: 100% 0%;
  }
  100% {
    transform: scale(1);
    transform-origin: 100% 0%;
  }
`;

const scaleDownTr = keyframes`
  0% {
    transform: scale(1);
    transform-origin: 100% 0%;
  }
  100% {
    opacity: 1;
    transform: scale(0.7);
    transform-origin: 100% 0%;
  }
`;
