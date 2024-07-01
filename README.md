# 1일차 24_06_10

# js (javascript)

- 설치 x
- 브라우저 내부에서 작동하기 때문에 한계가 있음

# node js

- 설치 o
- 서버 연결 등 다양한 접근을 위해 사용

# cmd

`node -v` : 노드 버전 확인

`npm --version` : npm 버전 확인

# npm install -g create-react-app -> 설치

    cd 경로잡기

    후 프로젝트 설치

# npx create-react-app base_react_24_06_10

    cd base_react_24_06_10 ->프로젝트 경로 잡고

    code . -> 실행

    npm run start -> 프로젝트 실행

    js파일 안에 태그가 가능함 -> jsx 문법

# App.js / index.js 파일을 제외하고 불필요한 파일 제거

    삭제 후 index.js에 삭제된 import 코드 제거
    App.js 에 불필요한 jsx 코드 삭제
    export default App; 내보내기를 해줘야 함

# --------------- 2일차 24_06_11

- prettier - Code formatter

      저장 시 자동 정렬 다운

* Material Icon theme

      아이콘 바꾸기 다운

* gitignore

      업로드 시 불필요한 파일 제외하는 구역
      git , github (git의 클라우드 개념)

* json (객체 - 중괄호 {})

      version - 변경 가능
      dependencies - 의존 (라이브러리 설치 시 많아짐)
      데브디펜덴시스 - 개발자를 위한 개발 & 프로덕션 환경

      "react": "^18.3.1",
      "react-dom": "^18.3.1",
      "react-scripts": "5.0.1" 3가지는 버전 중요★

* 디버그 (scripts)

      커스텀 가능(배포 시)

# ======================================== install & file intro end

# JSX 문법 ( 선택자를 잡아올 필요가 x )

    => react에서 사용하는 문법
    => js 파일에서 html 태그를 사용할 수 있음
    => 반드시 태그를 닫아줘야 됨 (단독 = 끝에 / 넣어주기 ex. <img '/'>)
    => 반드시 부모가 있어야 됨

**빈 태그 = extra 태그**

# fragment

    => 부모역할을 하는 태그

    => `<> </>` 꺽쇠 괄호만 사용함 (React.Fragment도 있음)

# componet's' 폴더 생성 시 's' 복수 처리 해줄 것

# js파일의 첫 글자는 대문자

함수 가져올 때 `import 함수명 from "경로";`

# --------------- 3일차 24_06_12

# export 두가지 방법

**-> default로 사용시 컴포넌트 내부에는 하나만 사용**

**-> 컴포넌트에 2가지의 `export(내보내기)`를 사용할 땐 변수 앞 쪽에 export 붙여 사용**

    ex) `export const ExportEx = () => {}`

    * import하는 값에 중괄호 {} 사용 후 2번째 변수를 넣음
    ex) `import { ExportEx , ExportEx2 } from 경로`

# jsx 문법에서 변수를 사용할 때에 중괄호 {} 사용

# props

-> 컴포넌트에서 사용하는 매개변수 (함수의 매개변수를 사용)

ex) `<IntroEx name="" age="" />` _a(num, num1) 처럼 사용_

    const name = props.name;
    const age = props.age;
    => 두 변수를 줄일 수 있는 것이 비구조화 할당

# 객체 비구조화 할당 (구조분해 할당)

**객체 내부에 접근하여 속성을 쉽게 가져올 수 있음**

ex) `const {name , age} = props;`
=> export const IntroEx = (props) => {}

ex) `export const IntroEx = ( {name , age} ) => {}`

ex) `<Ex menus = {menu}>` 배열은 중괄호 안에 변수를 불러오면 됨

ex) `export const Ex = ({ menus }) => {}`

# --------------- 4일차 24_06_13

_모듈 삭제 후 백업 -> 그 후 `npm install`_

# Map 함수

    => 배열의 요소의 값을 변환하여 새로운 요소 값으로 반환할 때 사용

    => 배열의 개수만큼 반복함

    => jsx에서 사용 시 반환되는 첫번째 태그에 유니크한 Key 값을 넣어줄 것

# SPA (single page application)

필요한 것만 새로 그려주는 느낌

# github 주소

github.com/pn-coding

# --------------- 5일차 24_06_14

# CSS

- `<div
  style={{

        width: "300px",
        height: "300px",
        backgroundColor: "lightcoral",
        }} </div>`
        -> 태그 내부에 사용하는 인라인 스타일

- 외부 css를 가져올 땐 => import "경로";

      ex) `import "./css/style.css";`

* jsx 문법 내부에서 class속성은 사용할 수 없음

      className으로 사용할 것 (class함수와 충돌 / Dom 속성 오류)

# Cli (커멘드 라인 인터페이스) - 명령어로 인터페이스 사용

# Css : Sass / Scss / less css / Bootstrap(프레임워크)

# Styled-components

`npm i styled-components` 설치

자동완성 : 익스텐션 `vscode-styled-components` 설치

# components에 props를 사용할 때

-> `import styled from "styled-components";`

ex) const Box = styled.div`

    width: ${(props) => props.$width};
    height: 300px;
    background-color: ${(props) => props.$bgColor};

`;

- ex)

  `<Box $width="200px" $bgColor="gold"></Box>`

  `<Box $width="500px" $bgColor="cornflowerblue"></Box>`

# 부모 안의 자식태그 선택할 때

ex) const Con = styled.div`

    width: 300px;
    height: 300px;
    background-color: lightgreen;
    h2 {
    text-align: center;
    }
    &:hover { <!-- 자기 자신을 선택할 때 & 사용 -->
        background-color: yellow;
    }

`;

# --------------- 6일차 24_06_17

# Fontawesome 아이콘 - react 설치

1. `npm i --save @fortawesome/fontawesome-svg-core`

2. `npm i --save @fortawesome/free-solid-svg-icons`

   `npm i --save @fortawesome/free-regular-svg-icons`

   `npm i --save @fortawesome/free-brands-svg-icons`

3. `npm i --save @fortawesome/react-fontawesome@latest`

-> 사용할 때 `<FontAwesomeIcon />`

# GlobalStyled css reset

npmjs -> styled-reset -> `npm i styled-reset`

    ex) export const GlobalStyled = createGlobalStyle`
        ${reset}
    `;

# --------------- 7일차 24_06_18

**styled-component에 className 사용 가능**

# GlobalStyled에 자주 쓰는 color 정리

- export const colors = `{

        mainBlack: "#1d1d1d",
        pointColor: "#ed143d",

  };`

  => 불러올 때 `${colors.mainBlack}`;

  => `${colors.pointColor}`;

* export const options = `{

        bRadius: 20,
        circleBtn: "50%",
        itemCenter: "center",

};`

# font-family

index.html에 링크 복사 붙여넣기

GlobalStyled에 body {
`font-family: "Noto Sans KR", sans-serif;`
}

# --------------- 8일차 24_06_19

## Event

`<button onClick={plusHandler}>+</button>`

# 리액트 상태관리 hook (use가 붙은건 전부 hook)

`const [변수명, set변수명] = useState(초기값);`

    => 배열 비구조화 할당을 통하여 사용하며 반드시 improt 해와야 됨

ex) `import { useState } from "react";`

# useState();

    -> const [변수명, set변수명] = useState(초기값);
    초기값 -> "글자" , 숫자, 함수, 변수 다 가능
    ex) const [num, setNum] = useState(0);

    set변수명(변경할 값); => 증감 연산자를 사용하면 x
    => useState에 정의된 num 변수의 값을 변경할 때 쓰며, 함수 형태로 사용함

    ex) setNum(num + 1);
    => 증감연산자 사용 x

# --------------- 9일차 24_06_20

# React Router-dom (router -> 네트워크 공유)

npmjs -> `npm i react-router-dom`

- 리액트 경로 설정

      Router -> Routes -> Route 순서

* Router는 2가지 종류가 있음

      1. HashRouter : /#/ 형식으로 사용됨
      2. BrowserRouter : / 형식으로 사용됨

* Route 프롭스

      1. path : 경로 지정
      2. element : 지정한 경로를 입력하면 보여줄 페이지의 컴포넌트

> /\* 경로는 지정한 경로가 없을 때 (404 페이지)

> '/:변수명' 으로 설정하면 경로에 변수를 지정할 수 있음

# Router-dom ( index.html = / )

ex)

- `import { BrowserRouter, Route, Routes } from "react-router-dom";`

* **_BrowserRouter_**

  - Routes

        Route path="/" element={Home}
        Route path="/sub01" element={Sub01}
        Route path="/sub02" element={Sub02}
        Route path="/\*" element={NonFoundPage}

  - Routes

* **_BrowserRouter_**

* **_HashRouter_**

  - Routes

        Route path="/" element={Home}
        Route path="/sub01" element={Sub01}
        Route path="/sub02" element={Sub02}
        Route path="/\*" element={NonFoundPage}

  - Routes

* **_HashRouter_** (주소에 #을 넣어줘야함)

> Url을 잘못 쳤을 때 보여지는 404page(404 = https status 코드)가 필수 404-not-found

# 링크설정

> Link to={"경로"} Menu1 {/Link}

헤더 설정

> BrowserRouter 와 Routes 사이에 Header 컴포넌트 넣기

# --------------- 10일차 24_06_21

    > 예제 풀기

# --------------- 11일차 24_06_25

도메인/detail/몇 번째

- ex) `<Route path="/sub/:id" element={<Sub />} />`

* ex)

  `<Link to={"/sub/0"}>sub01</Link>`

  `<Link to={"/sub/1"}>sub01</Link>`

- 상단의 Url을 가져오는 방법

* ex)

  `const { id } = useParams();`

  `{datas[id].title}` `{datas[id].desc}`

- Map 함수 활용

  - ex)

        {datas.map((data) => (
          <Con key={data.id}>
            <Link to={`/sub/${data.id}`}>
              <img src={data.imgUrl} alt={data.title} />
            </Link>
          </Con>
        ))}

# --------------- 12일차 24_06_26

- 로그인

       => 아이디 유무 확인
       => 패스워드 맞는지 확인
       => 중복 유무
       => 아이디는 2자리 이상
       => 패스워드 8자리 이상
       => 패스워드는 특수문자, 숫자, 대 소문자가 있는지
       => 띄어쓰기 확인
       => 이메일 로그인이라면 메일 형식에 맞는지 확인
       => 전화번호 로그인이라면
       => 패스워드가 20자내에 작성
       => 패스워드가 이름, 생일, 아이디랑 동일한지 유무 확인
       => 아이디, 비밀번호 입력해주세요.

\*\* **앱이 가져야하는 기본 조건** \*\*

    C : Create
    R : Read
    U : Update
    D : Delete

\*\* **react-hook-form 설치 :**
`npm i react-hook-form`

Hash 처리 = 단방향

# 폼 상태 관리 훅 : userform

<pre>const {
  register,
  handleSubmit,
  formState: { errors, isValid },
} = useForm();
</pre>

1.  register

    => input 태그에 등록을 하며, name 속성과, required 속성을 대신함

    ex) `<input {...register("이름", { required: "오류 났을 때 메세지 작성" })} />`

2.  handleSubmit

    => form 태그의 이벤트 담당

    ex) `<form onSubmit={handleSubmit(폼 핸들링 작성)}>`

3.  formState

    => 폼 상태 담당

    => `errors`: 폼 내부의 에러 발생시 객체로 값을 반환함

    => `isValid` : 폼 내용이 유효한지 판단 후 boolean 값으로 반환함

- ex)

      <form onSubmit={handleSubmit(loginHandler)}>
        <input
          {...register("username", {
          required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="아이디"
        />
        <input
          {...register("password", {
            required: "패스워드는 필수 입니다.",
          })}
          type="password"
          placeholder="패스워드"
        />
        <button>로그인</button>

        <!--에러 메세지 -->
        {errors && errors.username && errors.username.message}
      </form>

* Spread 연산자

  - `...객체`

  - 객체의 { } 중괄호를 제거 후 내용만 가져옴

* optional chaining 연산자

  - `?.`
  - 체인의 각 참조가 유효한지 명시적으로 검증하지 않고, 연결된 객체 체인 내에 깊숙이 위치한 속성 값을 읽을 수 있다.

  - 객체의 접근성을 유연하게 확인 후 값이 있다면 반환함
  - ex) `{errors?.username?.message}`

# --------------- 13일차 24_06_27

- 정규식 표현

  - 정규 표현식 또는 정규식은 특정한 규칙을 가진 문자열의 집합을 표현하는 데 사용하는 형식 언어이다.

  * 비밀번호 정규식 표현

        `/^(?=._[a-zA-Z])(?=._[!@#$%^*+=-])(?=.\*[0-9]).{8,15}$/`

  ex)
     <pre>
     minLength: {
       value: 2,
       message: "아이디는 2자리 이상 작성해주세요.",
     },
     
     minLength: {
       value: 8,
       message: "패스워드는 8자리 이상 작성 해주세요.",
     },
     
     pattern: {
       value: /^(?=._[a-zA-Z])(?=._[!@#$%^*+=-])(?=.\*[0-9]).{8,15}$/,
       message: "영문, 숫자, 특수기호 조합 8자리 이상 15자리 이하로 작성해주세요.",
     },
     </pre>

  > 리다이렉트 = 재요청(re(다시) + direct(요청하다))

  # --------------- 14일차 24_06_28

* 로그인 폼 풀이

      : 가상선택자
      placeholder = :: 들어감

* `useNavigate()`

  - ex) `const navi = useNavigate();`

    => 페이지 경로를 설정 함

  * ex) `navi("/login");`

    => 메소드를 사용하여 작성한 경로로 이동함

# --------------- 15일차 24_07_01

- `git 설치`

        => 파일의 변경, 추가, 삭제 등 파일이 기존 내용에서 변경이 되면 기록을 남김
        => 백업 가능, 협업, 이전 파일로 되돌아가기 등
        파일을 관리해주는 시스템

* `github`

        => git에서 기록된 파일 또는 내용 등
        저장 할 수 있는 저장소 역할
        => 호스팅 사이트

* `git init (깃 초기화)`
* `git 초기 설정`
  - `git config --global user.name "아이디명"`
  - `git config --global user.email "이메일"`
  * `git remote add origin 저장소url`
