# 투두리스트 만들기

~

## 깃허브

[깃허브로 가기 →](https://github.com/REACTRIM/week_review/tree/main/3%EC%A3%BC%EC%B0%A8/byul/my-todolist)

## 예시

[투두리스트 예시 링크 →](https://chapter7-dun.vercel.app/)

![week5-1](/public/week5-1.png)

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

![week5-2](/public/week5-2.png)
