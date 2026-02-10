# React Shopping Mall Project
Redux를 활용한 사용자 친화적 쇼핑몰 웹사이트

## 주요 기능
-**인증 시스템**: JWT 토큰 기반 로그인/로그아웃, Redux 전역 상태 관리
-**장바구니**: LocalStorage 연동으로 새로고침 후에도 데이터 유지
-**모달 시스템**: `alert` 대신 커스텀 모달을 통한 UX 최적화
-**반응형 디자인**: CSS Grid/Flexbox, Media Query를 활용한 모바일 레이아웃

## 사용 기술
- **Frontend**: React, Redux Toolkit, React Router, CSS Modules
- **API**: Axios, FakeStoreAPI
- **Font**: esamanru Medium

## 프로젝트 구조
```text
shopping-mall/
 ┣ public/
 ┣ src/
 ┃ ┣ components/        # 모달, 나비게이션
 ┃ ┣ font/
 ┃ ┣ pages/
 ┃ ┃   ┣ Cart/          # 장바구니
 ┃ ┃   ┣ Home/          # 홈 화면
 ┃ ┃   ┣ Login/         # 로그인 페이지
 ┃ ┣ App.css
 ┃ ┣ App.jsx
 ┃ ┗ main.jsx
 ┣ .gitignore
 ┣ index.html
 ┣ package.json
 ┗ README.md
```
