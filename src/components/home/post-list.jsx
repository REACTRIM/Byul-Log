import styled from "styled-components";
import testImg from "../../assets/imgs/testImage.jpg";
const TestData = Array(100).fill({
  imgUrl: "/imgs/testImage.jpg",
  title: "글 제목 타이틀 title",
  content: "글 내용 컨텐츠 content",
  createAt: "1724333530104",
});
const PostList = () => {
  return (
    <Wrapper>
      {TestData.map((el, i) => (
        <PostCard>
          <ImgDiv>{/* <img src={testImg} alt="test" /> */}</ImgDiv>
          <DescDiv>
            <div>{i + el.title}</div>
            <div>{el.content}</div>
            <div>{el.createAt}</div>
          </DescDiv>
        </PostCard>
      ))}
    </Wrapper>
  );
};

export default PostList;
const ImgDiv = styled.div`
  width: 100%;
  height: 50%;
  background-image: url("/testImage.jpg");
  background-size: cover;
`;
const DescDiv = styled.div``;
const PostCard = styled.div`
  width: 100%;
  height: 23rem;
  background-color: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media screen and (max-width: 1800px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1056px) {
    grid-template-columns: repeat(2, 1fr);
    height: 29rem;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    height: 33rem;
  }
  img {
    width: 100%;
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
`;
