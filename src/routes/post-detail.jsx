import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyData } from "../assets/data/post-data";
import styled from "styled-components";
import dayjs from "dayjs";
import { users } from "../assets/data/users";
import { ReactComponent as HeartIcon } from "../assets/icons/heart.svg";
import { ReactComponent as ShareIcon } from "../assets/icons/share.svg";
import { marked } from "marked";
import "github-markdown-css/github-markdown.css";

const PostDetail = () => {
  marked.setOptions({
    gfm: true,
    breaks: true,
    sanitize: false, // HTML을 허용하여 이미지가 올바르게 렌더링되도록 함
  });
  const [isLoading, setIsLoading] = useState(true);
  const { postTitle, userId } = useParams();
  const [postData, setPostData] = useState();
  const [user, setUser] = useState();
  const [splicedId, setSplicedId] = useState();
  useEffect(() => {
    const spliced = userId.slice(1);
    setSplicedId(spliced);
    const filteredPost = dummyData.find(
      (el) => el.user_id === spliced && el.title === postTitle
    );
    setPostData(filteredPost);
    const filteredUser = users.find((el) => el.user_id === spliced);
    setUser(filteredUser);
    setIsLoading(false);
  }, [userId, postTitle]);
  if (isLoading) {
    return <>로딩중...</>;
  }
  console.log(marked(postData.content));

  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <h1>{postData?.title}</h1>
          <Information>
            <div className="info-left">
              <span>{user?.user_name}</span>·
              <span>{dayjs(postData?.createAt).format("YYYY년 M월 DD일")}</span>
            </div>
            <div className="info-buttons">
              <button>팔로우</button>
              <button>
                <HeartIcon />
                {postData.heart_count}
              </button>
            </div>
          </Information>
          <TagBox>
            {postData?.tags?.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </TagBox>
        </HeaderWrapper>
        <LeftFixedIcons>
          <div>
            <HeartIcon />
            <span>{postData?.heart_count}</span>
          </div>
          <ShareIcon />
        </LeftFixedIcons>
        <ContentMarkDown
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: marked(postData.content) }}
        ></ContentMarkDown>
      </Container>
    </Wrapper>
  );
};

export default PostDetail;
const LeftFixedIcons = styled.div`
  position: fixed;
  top: 20rem;
  left: 5vw;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  height: 130px;
  width: 60px;
  align-items: center;
  justify-content: space-around;
  background-color: var(--background2);
  @media (max-width: 1024px) {
    display: none;
  }
  svg {
    width: 40px;
    border: 1px solid var(--text4);
    border-radius: 50%;
    background-color: white;
    fill: var(--text3);
    stroke: var(--text3);
    padding: 5px;
    cursor: pointer;
    &:hover {
      border: 1px solid black;
      fill: black;
      stroke: black;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 0.8rem;
    svg {
      background-color: white;
      border: 1px solid var(--text4);
      width: 40px;
      border-radius: 50%;
      padding: 5px;
    }
  }
`;

const ContentMarkDown = styled.div`
  margin-top: 8rem;
`;
const TagBox = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 20px;
  button {
    font-size: 1rem;
    background-color: var(--background2);
    color: var(--primary1);
    border: none;
    border-radius: 20px;
    padding: 10px;
  }
`;

const Information = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  .info-left {
    display: flex;
    gap: 15px;
    font-size: 1.1rem;
    span:last-child {
      color: var(--text3);
      font-weight: 100;
    }
  }
  .info-buttons {
    display: flex;
    gap: 10px;
    button {
      border-radius: 15px;
      padding: 10px 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 1rem;
    }
    button:first-child {
      color: var(--primary1);
      border: 1px solid var(--primary1);
    }
    button:last-child {
      border: 1px solid var(--text3);
      color: var(--text3);
      svg {
        fill: var(--text3);
        height: 20px;
      }
      @media screen and (min-width: 1024px) {
        display: none;
      }
    }
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 196px;
  h1 {
    font-size: 3.4rem;
    font-weight: 900;
    padding-bottom: 3rem;
  }
`;

const Container = styled.div`
  position: relative;
  margin-top: 88px;
  width: 768px;
  height: auto;
  @media screen and(max-width:768px) {
    width: 100%;
  }
  @media screen and(max-width:1024px) {
    margin-top: 32px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
