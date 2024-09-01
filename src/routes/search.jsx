import styled from "styled-components";
import { Container, Wrapper } from "./post-detail";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { useState } from "react";
import { dummyData } from "../assets/data/post-data";
import { ReactComponent as HeartIcon } from "../assets/icons/heart.svg";
import { DescDiv, Footer, ImgDiv } from "../components/home/post-list";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { users } from "../assets/data/users";

export default function Search() {
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);
  const [searchingPosts, setSearchingPosts] = useState([]);
  const onSearchChange = (e) => {
    var word = e.target.value;
    word.length > 0 ? setIsSearching(true) : setIsSearching(false);
    setSearchingPosts(
      dummyData.filter((el) => {
        if (word.length === 0) return false;
        var returnBool = true;
        [...word].map((w, i) => {
          if ([...el.title][i] !== w) returnBool = false;
        });
        return returnBool;
      })
    );
  };
  return (
    <Wrapper>
      <Container>
        <InputBox>
          <div>
            <SearchIcon />
          </div>
          <Input
            onChange={onSearchChange}
            placeholder="검색어를 입력하세요"
            type="text"
          />
        </InputBox>
        <Posts>
          {searchingPosts.map((el, i) => {
            const el_name = users.find(
              (item) => item.user_id === el.user_id
            ).user_name;
            return (
              <PostCard
                onClick={() =>
                  navigate(
                    `/@${encodeURIComponent(el.user_id)}/${encodeURIComponent(
                      el.title
                    )}`
                  )
                }
                key={i}
              >
                <ImgDiv imgUrl={el.imgUrl}></ImgDiv>
                <DescDiv style={{ padding: "20px 0" }}>
                  <div className="title-content">
                    <div style={{ fontSize: "2rem" }} className="title">
                      {el.title}
                    </div>
                    <div className="desc">{el.desc}</div>
                  </div>
                  <div className="created-at">
                    {dayjs(el.createdAt).format("YYYY년 M월 DD일")}
                  </div>
                </DescDiv>
                <Footer>
                  <div className="footer-profile">
                    <img src="/profile.png" />
                    <span>by</span> {el_name}
                  </div>
                  <div className="heart-box">
                    <HeartIcon />
                    {el.heart_count}
                  </div>
                </Footer>
              </PostCard>
            );
          })}
        </Posts>
      </Container>
    </Wrapper>
  );
}
const Posts = styled.div``;
export const PostCard = styled.div`
  width: 100%;
  height: 40rem;
  background-color: #ffffff;
  margin-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 0.8px solid var(--text4);
  display: grid;
  grid-template-rows: 6fr 2.8fr 1fr;
  cursor: pointer;
  @media screen and (max-width: 1056px) {
    height: 29rem;
  }
  @media screen and (max-width: 768px) {
    height: 33rem;
  }
  img {
    width: 100%;
  }
`;
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
