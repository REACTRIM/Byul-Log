import styled from "styled-components";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/icons/down-arow.svg";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SelectWrapper = () => {
  const ListRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const path = location.pathname.split("/")[2];
    if (ListRefs.current[0] && ListRefs.current[1]) {
      if (path === "day") {
        ListRefs.current[1].style.setProperty("color", "black");
        ListRefs.current[0].style.setProperty("color", "var(--primary1)");
      } else {
        ListRefs.current[0].style.setProperty("color", "black");
        ListRefs.current[1].style.setProperty("color", "var(--primary1)");
      }
    }
  }, [isModalOpen, location]);
  const handleModal = () => {
    if (isModalOpen) {
      setTimeout(() => {
        setIsModalOpen((prev) => !prev);
      }, 300);
    } else {
      setIsModalOpen((prev) => !prev);
    }
  };
  return (
    <Wrapper>
      <SelectBox onClick={handleModal}>
        <span>이번 주</span>
        <DownArrowIcon />
      </SelectBox>
      <MoreIcon />
      {isModalOpen ? (
        <Modal isModalOpen={isModalOpen}>
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
      ) : null}
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
  animation: ${({ isModalOpen }) =>
      isModalOpen ? "scale-up-tr" : "scale-down-tr"}
    0.3s ease-in;
  li {
    cursor: pointer;
    background-color: white;
    padding: 15px;
    font-size: 1rem;
    &:hover {
      background-color: var(--bg-element3);
    }
  }
  @keyframes scale-up-tr {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
  }
  @keyframes scale-down-tr {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
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
