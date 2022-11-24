# 사용하는 이미지 관련
해당 프로젝트에서 사용하는 사진의 출처는 다음과 같습니다.

1. unsplash
https://unsplash.com/

2. Faker.js
https://fakerjs.dev/

# 프로젝트 목적
- API와 결합하는 용도
- 학습용으로 만든 백엔드와 결합하는 용도임 (아래의 링크)
- https://github.com/Runor0624/Personal_Backend

# 주요 라이브러리 버전
- React 18.2.0
- TypeScript 4.9.3
- Styled-Components 5.3.6

# 구현 내용
- 백엔드 API 통신 : 로그인/회원가입, 글 작성 CRUD, 댓글 생성, 검색 기능 추가.

## 세부 내용
- 회원가입 : 백엔드와 통신을 진행하여 회원가입한 사용자의 데이터를 DB에 저장합니다 (이메일, 비밀번호 등) (src/page/signUp.tsx)
- 로그인 : 회원가입한 내용과 일치할경우 로그인, jsonwebtoken 토큰을 로그인 성공시 같이 메인페이지로 이동 (src/page/Login.tsx)
 
- 글 CRUD : 사용자가 작성한 글에 대해 CRUD가 가능하도록 구현 (src/page/Detail.tsx), (src/Components/Modal/PostAddModal.tsx)

- 댓글 생성 : 생성된 게시글에 종속되는 댓글을 구현 - 백엔드에서 게시글과 댓글간 관계를 설정 (src/page/Detail.tsx)

- 검색 기능 : 사용자가 title을 검색 시 - 검색한 title가 DB에 저장된 title과 일치하는 내용만 보여주도록 출력 (src/components/Card.tsx)
