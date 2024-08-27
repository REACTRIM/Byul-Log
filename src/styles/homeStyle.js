import { createGlobalStyle } from "styled-components";
import "./color.css";

export const HomeStyle = createGlobalStyle`
body{
    //폰트 등
    font-family: "Pretendard";
    letter-spacing: -1px;
    display: flex;
    justify-content: center;
    background-color: var(--background2);
}
//이제 태그에 따라서 자유롭게 글로벌 스타일을 적용할 수 있다. 
`;
