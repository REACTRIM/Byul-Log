# useMemo

여기서 Memo라는 건 Memoization을 축약한 Memo라는 뜻이다.

`useMemo` 는 `useMemo(연산 정의 함수, deps 배열)` 로 이루어져 있다.

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
fetch(`url/${id}`)
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
