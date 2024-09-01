import styled from "styled-components";
import { Container, Wrapper } from "./post-detail";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import PostList, {
  DescDiv,
  Footer,
  ImgDiv,
} from "../components/home/post-list";
import { useEffect, useState } from "react";
import { dummyData } from "../assets/data/post-data";
import { PostCard } from "./search";
import { ReactComponent as HeartIcon } from "../assets/icons/heart.svg";
import dayjs from "dayjs";
import { users } from "../assets/data/users";

export default function Tags() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { tagName } = useParams();
  useEffect(() => {
    setData(
      dummyData.filter((el) => {
        return el.tags.some((tag) => tag === tagName);
      })
    );
  }, [tagName]);
  return (
    <Wrapper>
      <Container>
        <Header># {tagName}</Header>
        <Posts>
          {data?.map((el, i) => {
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
const Header = styled.div`
  padding-top: 3rem;
  font-size: 2.5rem;
  font-weight: 800;
`;
