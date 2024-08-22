import styled, { keyframes } from "styled-components";
import testImg from "../../assets/imgs/testImage.jpg";
import dayjs from "dayjs";
import { useState, useEffect } from "react";

const initialData = Array(20).fill({
  imgUrl: "/imgs/testImage.jpg",
  title: "글 제목 타이틀 title",
  content: "글 내용 컨텐츠 content",
  createAt: "2022289530104",
  writer: "별별",
});

const PostList = () => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const page = {
    _page: 1,
    _scrollchk: false,

    list: {
      search: async function () {
        if (page._scrollchk) return;

        page._scrollchk = true;
        try {
          setIsLoading(true);
          console.log("ddodod");
          // 서버로부터 데이터를 가져오는 로직 (현재는 setTimeout으로 대체)
          setTimeout(() => {
            const newData = Array(10).fill({
              imgUrl: "/imgs/testImage.jpg",
              title: "새로운 글 제목 타이틀 title",
              content: "새로운 글 내용 컨텐츠 content",
              createAt: "2022289530104",
              writer: "별별",
            });

            setData((prev) => [...prev, ...newData]);
          }, 5000);
        } catch (error) {
          console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
        } finally {
          console.log("eeee");
          setTimeout(() => {
            setIsLoading(false);
          }, 5000);
          page._scrollchk = false;
        }
      },
    },
  };

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (page._scrollchk) return;
        page._page += 1;
        page.list.search();
      });
    });
    const sentinel = document.getElementById("sentinel");
    if (sentinel) {
      io.observe(sentinel);
    }
    return () => io.disconnect(); // 컴포넌트 언마운트 시 observer 해제
  }, []);
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);
  return (
    <Wrapper>
      {data.map((el, i) => (
        <PostCard key={i}>
          <ImgDiv></ImgDiv>
          <DescDiv>
            <div className="title-content">
              <div className="title">{i + el.title}</div>
              <div className="content">{el.content}</div>
            </div>
            <div className="created-at">
              {dayjs(el.createAt).format("YYYY년 M월 DD일")}
            </div>
          </DescDiv>
          <Footer>
            <div className="footer-profile">by {el.writer}</div>
          </Footer>
        </PostCard>
      ))}
      {isLoading &&
        Array(5)
          .fill(0)
          .map((el) => (
            <PostCard>
              <Skeleton />
              <SkelTextDiv>
                <SkeletonText />
              </SkelTextDiv>
              <SkelTextDiv>
                <SkeletonText />
              </SkelTextDiv>
            </PostCard>
          ))}
      <div id="sentinel">
        <img src="/loading.gif" alt="" />
      </div>
    </Wrapper>
  );
};

export default PostList;

const Footer = styled.div`
  width: 100%;
  padding: 0 20px;
  border-top: 1px solid var(--border3);
  display: flex;
  align-items: center;
`;
const DescDiv = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  .title-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title {
      font-size: 1.1rem;
      font-weight: 800;
    }
    .content {
      font-weight: 100;
      color: var(--text3);
    }
  }
  .created-at {
    color: var(--text3);
    font-size: 0.8rem;
  }
`;
const ImgDiv = styled.div`
  width: 100%;
  background-image: url("/testImage.jpg");
  background-size: cover;
`;
const skeletonAnimation = keyframes`
  0%{
    background: linear-gradient(90deg, rgba(224,224,224,1) 0%, rgba(255,255,255,1) 0%, rgba(224,224,224,1) 100%);
  }
  20%{
    background: linear-gradient(90deg, rgba(224,224,224,1) 0%, rgba(255,255,255,1) 20%, rgba(224,224,224,1) 100%);
  }
  40%{
    background: linear-gradient(90deg, rgba(224,224,224,1) 0%, rgba(255,255,255,1) 41%, rgba(224,224,224,1) 100%)
  }
  60%{
    background: linear-gradient(90deg, rgba(224,224,224,1) 0%, rgba(255,255,255,1) 62%, rgba(224,224,224,1) 100%);
  }
  80%{
    background: linear-gradient(90deg, rgba(224,224,224,1) 0%, rgba(255,255,255,1) 81%, rgba(224,224,224,1) 100%);
  }
  100%{
    background: linear-gradient(90deg, rgba(224,224,224,1) 0%, rgba(255,255,255,1) 100%, rgba(224,224,224,1) 100%);
  }
`;
const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(212, 212, 212);
  animation: ${skeletonAnimation} 1s ease-in-out infinite;
`;
const SkeletonText = styled.div`
  width: 90%;
  height: 70%;
  border-radius: 0px;
  background: rgb(212, 212, 212);
  animation: ${skeletonAnimation} 1s infinite;
`;
const SkelTextDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PostCard = styled.div`
  width: 100%;
  height: 23rem;
  background-color: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: grid;
  grid-template-rows: 5fr 3.8fr 1.2fr;
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
  &:hover {
    transform: translateY(-3%);
    transition: transform 0.3s ease-in;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(5, 1fr);
  @media screen and (max-width: 1800px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1056px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  #sentinel {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    bottom: -100px;
    transform: translate(45vw) translateX(-50%);
  }
`;
