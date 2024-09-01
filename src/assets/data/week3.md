# 유데미 섹션 5~6

## Props로 전달하기

```javascript
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
```

```javascript
function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
```

props로 전달할 때는 변수와 함수 모두 전달할 수 있다.

```bash
├── MyApp
  ├── MyButton
```

이렇게 부모 자식간의 구조라면,<br/>
MyApp에서 count 변수를 내려주고,<br/>
MyButton에서 onClick 발생 시 MyApp의 onClick 함수를 참조하여
함수가 실행 된다.

## State로 상태 관리하기

useState 활용~!

count++이렇게 구식의 방법이 아닌 매우 좋은 방법

## useRef로 컴포넌트 변수 생성!
