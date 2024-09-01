export const dummyData = [
  {
    id: 1,
    imgUrl: "/week2-1.png",
    title: "리액트 공식문서 - 틱택토 게임",
    desc: "리액트의 기초 개념을 꽉 잡을 수 있는 틱택토 게임을 만들어봤다.",
    content: `# 오늘의 진도

- 인프런 공식문서 강의 섹션 0 듣기

# Tutorial: Tic-Tac-Toe

> ### 자습서: 틱택토 게임

### [코드 샌드박스로 이동하기 →](https://codesandbox.io/p/sandbox/react-dev-forked-xrgny3?file=%2Fsrc%2FApp.js)

## 결과물

![tictactoe](/week2-1.png)

## 전체 코드

\`\`\`javascript
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
function Board({ xIsNext, squares, onPlay }) {
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice(); // 배열의 사본 생성!!!
    if (xIsNext) nextSquares[i] = "X";
    else nextSquares[i] = "O";
    onPlay(nextSquares);
    // setXIsNext(!xIsNext);
    // setSquares(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) status = "Winner: " + winner;
  else status = "Next player: " + (xIsNext ? "X" : "O");

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
\`\`\`
`,
    createdAt: "20240826123450",
    user_id: "starstar1",
    heart_count: 63,
    comment_id: [101, 102],
    tags: ["상태관리", "리액트", "공식문서", "틱택토게임"],
  },
  {
    id: 2,
    imgUrl: "/computer2.jpg",
    title: "유데미 섹션 5~6 정리하기",
    desc: "컴포넌트, Props, State, useRef",
    content: `# 유데미 섹션 5~6

## Props로 전달하기

\`\`\`javascript
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
\`\`\`

\`\`\`javascript
function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
\`\`\`

props로 전달할 때는 변수와 함수 모두 전달할 수 있다.

\`\`\`bash
├── MyApp
  ├── MyButton
\`\`\`

이렇게 부모 자식간의 구조라면,<br/>
MyApp에서 count 변수를 내려주고,<br/>
MyButton에서 onClick 발생 시 MyApp의 onClick 함수를 참조하여
함수가 실행 된다.

## State로 상태 관리하기

useState 활용~!

count++이렇게 구식의 방법이 아닌 매우 좋은 방법

## useRef로 컴포넌트 변수 생성!
`,
    createdAt: "20240829123450",
    user_id: "starstar1",
    heart_count: 26,
    comment_id: [103, 104],
    tags: ["리액트", "컴포넌트", "Props", "상태관리", "useRef"],
  },
  {
    id: 3,
    imgUrl: "/week5-2.png",
    title: "투두리스트를 만들어보았다.",
    desc: "아무것도 참고하지 않고 투두리스트 만들기 도전",
    content: `# 투두리스트 만들기

~

## 깃허브

[깃허브로 가기 →](https://github.com/REACTRIM/week_review/tree/main/3%EC%A3%BC%EC%B0%A8/byul/my-todolist)

## 예시

[투두리스트 예시 링크 →](https://chapter7-dun.vercel.app/)

![week5-1](/week5-1.png)

# 중요 코드 리뷰

1. onSubmit 함수

   \`\`\`javascript
   const onSubmit = () => {
   setTodos([
   ...todos,
   {
   id: currentId,
   content: addContent,
   date: dayjs(new Date()).format("YYYY.MM.DD"),
   },
   ]);
   setCurrentId((prev) => prev + 1);
   setAddContent("");
   };
   \`\`\`

   - setTodos 함수 안에 배열을 넣어야 되는데 배열을 넣지 않아서 오류가 났다.

   - 스프레드 연산자나 useState를 배열이나 오브젝트로 활용하는 방법에 더더 익숙해져야 겠다고 생각했다.

2. onSearchChange 함수

   \`\`\`javascript
   const onSearchChange = (e) => {
   var word = e.target.value;
   word.length > 0 ? setIsSearching(true) : setIsSearching(false);
   setSearchingTodos(
   todos.filter((el) => {
   if (word.length === 0) return false;
   var returnBool = true;
   [...word].map((w, i) => {
   if ([...el.content][i] !== w) returnBool = false;
   });
   return returnBool;
   })
   );
   };
   \`\`\`

   - 처음으로 검색하는 함수를 자바스크립트로 만들어봤다...

# 나의 결과물

배포는 하지 않았다

![week5-2](/week5-2.png)
`,
    createdAt: "20240830123450",
    user_id: "traveler5",
    heart_count: 55,
    comment_id: [105],
    tags: ["리액트", "상태관리", "검색함수"],
  },
  {
    id: 4,
    imgUrl: "/computer3.jpg",
    title: "Memozation으로 최적화 하기",
    desc: "useMemo와 useCallback의 차이점이 뭘까?",
    content: `# useMemo

여기서 Memo라는 건 Memoization을 축약한 Memo라는 뜻이다.

\`useMemo\` 는 \`useMemo(연산 정의 함수, deps 배열)\` 로 이루어져 있다.

useMemo는 메모이제이션 된 값을 반환한다.

- 연산 정의 함수: 저장하려는 값을 계산하는 함수이다. 다음 렌더링에서 deps가 바뀌지 않으면 동일한 값으로 반환한다. 만약 deps가 변하면 다시 계산된 값을 호출하고 해당 결과를 반환하고 저장한다.
- deps 배열: 위 함수에서 사용되는 모든 반응형 값의 목록이다. 리액트 내부에서 Object.is 비교를 사용해 각 deps를 이전 값과 비교한다.

\`\`\`javascript
import { useMemo } from "react";

function TodoList({ todos, tab }) {
// 컴포넌트 최상단에 위치
const visibleTodos = useMemo(
() => filterTodos(todos, tab), // 계산 함수
[todos, tab] // deps 배열
);
// ...
}
\`\`\`

아래와 같은 상황에서는 useMemo 사용을 지양하는 것이 좋다.

1. 최적화하려는 계산의 비용이 크지 않은 경우.
2. 메모이제이션이 필요한지 확실하지 않은 경우.
3. 메모하고 있는 값이 컴포넌트로 전달되지 않는 경우.
4. 의존성 배열이 너무 자주 변경되는 경우.

# React.memo

props가 변하지 않으면 결과가 변하지 않음.

\`\`\`javascript
import { memo } from "react";

function MyComponent(props) {
return (
<>
<h1>{props.title}</h1>
<p>{props.content}</p>
</>
);
}

export default memo(MyComponent);
\`\`\`

### React.memo 를 사용하기 좋은 상황

- 컴포넌트가 같은 props로 자주 렌더링이 될 때
- 컴포넌트가 렌더링이 될 때마다 복잡한 로직을 처리해야 할 때
- 무분별한 사용은 오히려 성능 저하를 불러올 수 있다!

# useCallback

useCallback은 메모이제이션된 함수를 반환한다.

\`\`\`javascript
import React, { useState, useEffect } from "react";

function Profile({ id }) {
const [data, setData] = useState("");

const fetchData = useCallback(
() =>
fetch(\`url/\${id}\`)
.then((response) => response.json())
.then(({ data }) => data),
[id]
);

useEffect(() => {
fetchData().then((data) => setData(data));
}, [fetchData]);

// ...
}
\`\`\`

이런 경우에 useCallback을 이용해서 props로 받는 id가 변하지 않는 한 함수의 참조값이 변하지 않도록 유지시킬 수 있다.
`,
    createdAt: "20240901123450",
    user_id: "starstar1",
    heart_count: 92,
    comment_id: [106, 107],
    tags: ["리액트", "최적화", "메모제이션", "useMemo"],
  },
  {
    id: 5,
    imgUrl: "/forest.png",
    title: "중앙 해커톤 - 추억의 숲",
    desc: "가족들과 추억을 공유할 수 있는 추억의 숲🌳",
    content: `## 매일 문답으로 소통하는 우리 가족만의 힐링공간, 추억의 숲 ![추억의 숲 로고](https://github.com/user-attachments/assets/38af67f7-135f-4229-a83b-b424cf83678b)
### Frontend : 김별, 이다빈, 이세림


메인 화면

![메인화면](https://github.com/user-attachments/assets/e2e154a8-316e-4619-b4f2-1f99d8a19614) 

나무 성장 디자인

![나무 성장 디자인](https://github.com/user-attachments/assets/014e0d16-8737-44cb-9a7b-2c981a6a7114)


질문 답변 페이지

![질문 상세 페이지-1](https://github.com/user-attachments/assets/a481f10e-6b37-4579-84e3-3af87de818bf)


질문 생성 페이지

![질문 생성하기](https://github.com/user-attachments/assets/e44ac4af-820a-43d5-971d-237e0a4cfc2f)


질문 리스트 페이지

![질문 리스트](https://github.com/user-attachments/assets/df983864-f760-4604-a7d3-235ac72a69ba)


추억 저장소 페이지

![저장소](https://github.com/user-attachments/assets/83ccd3fb-73c3-4c02-836c-a102a1c824ce)


상점 페이지

![상점](https://github.com/user-attachments/assets/6d7893ed-1417-48f2-9921-087f8ea85de8)`,
    createdAt: "20240901123450",
    user_id: "spaceman7",
    heart_count: 100,
    comment_id: [],
    tags: ["해커톤", "멋쟁이사자처럼", "프론트엔드"],
  },
];

// export const testData = [
//   {
//     id: 1,
//     imgUrl:
//       "https://cdn.pixabay.com/photo/2022/05/11/13/55/nature-7189418_1280.jpg",
//     title: "모험의 시작: 새로운 세계로 떠나다!",
//     desc: "어느 날 갑자기 문 앞에 나타난 신비한 초대장, 나는 결심했다. 새로운 세계로의 모험이 시작된다!",
//     content: `![](https://cdn.pixabay.com/photo/2022/05/11/13/55/nature-7189418_1280.jpg)
// # 모험의 시작: 새로운 세계로 떠나다!
// 어느 날 갑자기 문 앞에 나타난 *신비한 초대장*. 그것은 마치 오래된 이야기 속에서나 나올 법한 진한 향수를 불러일으키는 느낌이었다.

// ## 결심의 순간
// 나는 잠시 망설였지만, 이내 결심했다. **새로운 세계로의 모험**이 나를 기다리고 있었다. 일상에서 벗어나, 일주일 동안 모든 걱정을 잊고 새로운 장소와 사람들을 만나며 진정한 자아를 찾기로 했다.

// ### 모험의 첫 목적지
// 첫 목적지는 **안개 속에 감춰진 산속 마을**이었다. 그곳에는 전설 속에 등장하는 신비한 생명체들이 산다는 소문이 돌고 있었다.

// 1. 배낭을 챙기고
// 2. 초대장을 확인한 뒤
// 3. 설렘을 안고 길을 나섰다.

// 마을 입구에 도착하자, 나를 반기는 것은 아름다운 자연 풍경과 호기심 가득한 눈빛의 마을 사람들이었다. 그들은 나에게 이곳의 전설과 이야기를 들려주었고, 나는 점점 더 이 모험에 빠져들게 되었다.

// + 마을 사람들의 환대
//   - 따뜻한 식사
//     * 직접 재배한 신선한 채소와 과일
// + 전설의 이야기
//   - 마을을 지키는 **신비한 수호자**

// #### 모험의 끝은 어디일까?
// <u>과연 이 모험의 끝에 나를 기다리고 있는 것은 무엇일까?</u> 나의 심장은 설렘으로 가득 차오르고, 나는 더욱 깊은 탐험을 위해 발걸음을 내딛었다.

// ~~걱정은 잠시 접어두고~~, 오직 앞을 향해 나아간다.
// __이 모험은 나의 인생을 바꿀지도 모른다.__
//     `,
//     createdAt: "20240101123450",
//     user_id: "starstar1",
//     heart_count: 58,
//     comment_id: [101, 102],
//     tags: ["모험", "판타지", "여행"],
//   },
//   {
//     id: 2,
//     imgUrl:
//       "https://cdn.pixabay.com/photo/2023/12/20/16/21/baking-8460297_1280.png",
//     title: "맛있는 요리의 비밀: 비법 소스를 찾아라!",
//     desc: "모든 요리의 핵심은 소스에 있다. 오늘은 전설의 비법 소스를 찾아 나서는 이야기를 소개한다.",
//     content: `
// # 맛있는 요리의 비밀: 비법 소스를 찾아라!
// 모든 요리의 핵심은 **소스**에 있다.

// ## 비법 소스를 찾아서
// 오늘은 전설의 **비법 소스**를 찾아 나서는 이야기를 소개한다. 비법 소스의 특별한 점은 무엇일까? 그 소스를 만드는 과정을 통해 우리는 요리의 깊은 철학과 맛의 비밀을 알아갈 수 있다.

// 1. 비법 소스의 역사
//    - 오래된 조리법에서부터 현대의 변형까지
// 2. 주요 재료
//    - 신선한 허브와 양념
// 3. 완벽한 소스 만들기
//    - 정확한 온도와 조리 시간
// ![](https://cdn.pixabay.com/photo/2023/12/20/16/21/baking-8460297_1280.png)
// ### 요리하는 법
// 요리의 시작은 신선한 재료 선택에서부터 시작된다. 아래와 같은 재료들을 준비하자.

// + 신선한 허브
//   - 바질
//   - 파슬리
// + 고품질의 오일
//   - 올리브유
// + 특별한 양념
//   - 소금과 후추

// __이 비법 소스를 사용해 요리를 마무리하면, 손님들은 그 맛에 놀라게 될 것이다.__ 소스의 향과 맛이 요리에 어떻게 조화를 이루는지 느껴보자. *이것이 요리의 진정한 묘미다.*

// #### 비법을 지키는 방법
// 비법 소스를 만들고 나서도, 이 비밀을 __계속 지키기 위해__ 몇 가지 주의사항을 따라야 한다.

// 1. 신선한 재료 사용
// 2. 조리 도구의 청결 유지
// 3. 레시피를 변형하지 않기

// 비법을 공유하는 것은 큰 책임을 동반한다. **정확한 조리법**을 따르고, 소스를 만드는 과정을 통해 자신의 요리 실력을 발전시켜 보자. 그리고 맛있는 요리의 즐거움을 만끽하자!
//     `,
//     createdAt: "2024010212346",
//     user_id: "starstar1",
//     heart_count: 25,
//     comment_id: [103, 104, 105],
//     tags: ["요리", "레시피", "비법"],
//   },
//   {
//     id: 3,
//     imgUrl:
//       "https://cdn.pixabay.com/photo/2012/10/10/11/05/space-station-60615_1280.jpg",
//     title: "우주 탐험: 화성에서 온 초대장",
//     desc: "화성에서 신호가 왔다! 과연 외계 생명체와의 첫 만남은 어떤 모습일까?",
//     content: `![](https://cdn.pixabay.com/photo/2012/10/10/11/05/space-station-60615_1280.jpg)
// # 우주 탐험: 화성에서 온 초대장
// 화성에서 신호가 왔다! 그것은 단순한 전파 신호가 아니었다. 마치 누군가가 우리에게 보내는 초대장처럼 느껴졌다.

// ## 신호의 분석
// 과학자들은 이 신호를 분석하며, 다양한 가능성을 제시했다.

// 1. 자연 현상
// 2. 인류가 알지 못하는 새로운 물리적 현상
// 3. 외계 생명체의 메시지

// __과연 이 신호의 진실은 무엇일까?__

// ### 화성 탐험의 준비
// *우리는 탐사선을 준비하며, 모든 가능성에 대비했다.* 최첨단 장비와 과학자들로 구성된 팀이 화성으로 떠날 준비를 했다.

// - 탐사선의 이름: **마스 익스플로러**
// - 출발 날짜: 2024년 3월 15일
// - 주요 임무
//   1. 신호의 원천 탐사
//   2. 화성 표면의 생명체 탐색
//   3. 신호의 의미 분석

// #### 새로운 발견의 가능성
// 이 임무를 통해 우리는 단순히 신호의 원천을 찾는 것뿐만 아니라, 새로운 __우주의 비밀__을 풀 수 있는 기회를 얻게 되었다.

// ~~모든 우려와 두려움에도 불구하고~~, 우리는 화성으로 향하는 길을 선택했다. 인류의 미래를 위한 탐험이 지금 시작된다.
//     `,
//     createdAt: "2024010312347",
//     user_id: "spaceman7",
//     heart_count: 18,
//     comment_id: [106],
//     tags: ["우주", "탐험", "과학"],
//   },
//   {
//     id: 4,
//     imgUrl:
//       "https://cdn.pixabay.com/photo/2024/03/08/09/55/cat-8620369_1280.png",
//     title: "고양이의 하루: 털복숭이의 모험",
//     desc: "나의 털복숭이 친구가 오늘 또 어떤 장난을 칠까? 귀여운 고양이의 하루 일상을 공개합니다.",
//     content: `
// # 우주 탐험: 화성에서 온 초대장
// 화성에서 신호가 왔다! 그것은 단순한 전파 신호가 아니었다. 마치 누군가가 우리에게 보내는 초대장처럼 느껴졌다.

// ## 신호의 분석
// 과학자들은 이 신호를 분석하며, 다양한 가능성을 제시했다.
// ![](https://cdn.pixabay.com/photo/2024/03/08/09/55/cat-8620369_1280.png)
// 1. 자연 현상
// 2. 인류가 알지 못하는 새로운 물리적 현상
// 3. 외계 생명체의 메시지

// __과연 이 신호의 진실은 무엇일까?__

// ### 화성 탐험의 준비
// *우리는 탐사선을 준비하며, 모든 가능성에 대비했다.* 최첨단 장비와 과학자들로 구성된 팀이 화성으로 떠날 준비를 했다.

// - 탐사선의 이름: **마스 익스플로러**
// - 출발 날짜: 2024년 3월 15일
// - 주요 임무
//   1. 신호의 원천 탐사
//   2. 화성 표면의 생명체 탐색
//   3. 신호의 의미 분석

// #### 새로운 발견의 가능성
// 이 임무를 통해 우리는 단순히 신호의 원천을 찾는 것뿐만 아니라, 새로운 __우주의 비밀__을 풀 수 있는 기회를 얻게 되었다.

// ~~모든 우려와 두려움에도 불구하고~~, 우리는 화성으로 향하는 길을 선택했다. 인류의 미래를 위한 탐험이 지금 시작된다.
//     `,
//     createdAt: "2024010412348",
//     user_id: "catlover",
//     heart_count: 30,
//     comment_id: [107, 108],
//     tags: ["고양이", "일상", "동물"],
//   },
// ];
