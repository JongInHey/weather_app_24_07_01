# Todo

### 설치할 라이브러리

- [x] react-router-dom
- [x] axios
- [x] tan-stack-query
- [x] styled-components
- [x] styled-reset
- [x] react-helmet
- [x] react-hook-form

### 작업 내용

- [x] 라우터 설정
- [x] 각 페이지 컴포넌트 구성
- [x] api 설정
- [x] 데이터 받아오기
- [x] 스타일
- [x] 현재 위치 얻어오기
- [x] 현재 위치에 맞는 날씨 정보 요청
- [x] 로딩
- [x] 404 notfoundpage 구성
- [x] 타이틀 설정
- [x] 로그인, 회원가입 페이지 구성
- [x] 로그인, 회원가입 form 구성
- [x] 로그인, 회원가입 required 필수 요소 구성
- [x] 코드 리팩토링

### 래퍼런스

https://uxplanet.org/sky-inspired-weather-app-concept-4f1775ce4571

## 배포

- 작업 완료된 파일 커밋 시키기

* `npm i gh-pages` 설치
* package.json 코드 작성
  - `"predeploy": "npm run build"`
  - `"deploy": "gh-pages -d build"`
  - `"홈페이지 주소 형식": "https://아이디.github.io/저장소명/"`

- `npm run deploy`

* 깃허브 사이트에서 `settings` -> `pages` -> `branch` 설정 변경(`pages`로 바꿈)
  - 저장소 페이지에서 우측 중간에 `Deployments` 클릭
  - 배포 상태 확인 후 사이트 주소 클릭
