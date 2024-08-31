import styled from "styled-components";
import { Container, Wrapper } from "./post-detail";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
export default function Search() {
  return (
    <Wrapper>
      <Container>
        <InputBox>
          <div>
            <SearchIcon />
          </div>
          <Input placeholder="검색어를 입력하세요" type="text" />
        </InputBox>
      </Container>
    </Wrapper>
  );
}
const InputBox = styled.div`
  width: 90%;
  height: 4rem;
  display: grid;
  grid-template-columns: 60px 1fr;
  border: 1px solid var(--text4);
  div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text4);
    svg {
      width: 60%;
    }
  }
  &:focus-within {
    border: 1px solid black;
    transition: border 0.2s ease-in;
    div {
      color: black;
      transition: color 0.2s ease-in;
    }
  }
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  padding: 0 10px;
  font-size: 1.5rem;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`;
