import { useNavigate, useParams } from "react-router-dom";
import { users } from "../assets/data/users";
import { Container, ProfileBar, Wrapper } from "./post-detail";
import { dummyData } from "../assets/data/post-data";
import { useEffect, useState } from "react";
import { DescDiv, ImgDiv } from "../components/home/post-list";
import styled from "styled-components";
import { ReactComponent as HeartIcon } from "../assets/icons/heart.svg";
import dayjs from "dayjs";

export default function Profile() {
  const params = useParams();
  const navigate = useNavigate();
  const [userPosts, setUserPosts] = useState();
  useEffect(() => {
    const data = dummyData;
    setUserPosts(data.filter((el) => el.user_id === params.userId.slice(1)));
    console.log(data.filter((el) => el.user_id === params.userId.slice(1)));
  }, [params]);
  return (
    <Wrapper>
      <Container style={{ paddingTop: "90px" }}>
        <ProfileBar
          style={{
            marginTop: "0",
            paddingBottom: "5rem",
            borderBottom: "0.8px solid var(--text4)",
          }}
        >
          <div id="profile-div">
            <img src="/profile.png" alt="" />
            <span>
              {
                users.find((el) => el.user_id === params.userId.slice(1))
                  ?.user_name
              }
            </span>
          </div>
        </ProfileBar>
        <MyPosts>
          {userPosts?.map((el, i) => (
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
              <DescDiv style={{ padding: "40px 0 20px 0" }}>
                <div className="title-content">
                  <div style={{ fontSize: "1.6rem" }} className="title">
                    {el.title}
                  </div>
                  <div style={{ marginTop: "20px" }} className="desc">
                    {el.desc}
                  </div>
                </div>
                <Tags>
                  {el.tags.map((item, i) => (
                    <div key={i}>{item}</div>
                  ))}
                </Tags>
                <div
                  className="created-at"
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <span>{dayjs(el.createdAt).format("YYYY년 M월 DD일")}</span>
                  <span> .</span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <HeartIcon width={"15px"} fill="var(--text2)" />
                    {el.heart_count}
                  </span>
                </div>
              </DescDiv>
            </PostCard>
          ))}
        </MyPosts>
      </Container>
    </Wrapper>
  );
}
const Tags = styled.div`
  display: flex;
  gap: 15px;
  div {
    background-color: var(--background2);
    color: var(--primary1);
    padding: 9px 20px;
    border-radius: 20px;
    &:hover {
      opacity: 0.7;
    }
  }
`;
const MyPosts = styled.div``;

const PostCard = styled.div`
  width: 100%;
  height: 40rem;
  background-color: #ffffff;
  margin-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 0.8px solid var(--text4);
  display: grid;
  grid-template-rows: 6fr 3.8fr;
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
