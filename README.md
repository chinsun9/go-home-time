# go home time

- typescript react로 만들어본 퇴근시간 계산기

## 데모

- [github-pages](https://chinsun9.github.io/go-home-time/)

[![시연영상](https://img.youtube.com/vi/GYJGwfwHE2A/0.jpg)](https://www.youtube.com/watch?v=GYJGwfwHE2A)

## 기능

### 메인 페이지

- 목표 시각까지 남은 시간 계산
- url param을 통해 목표 시각 세팅
- 목표 시각이 지나면 퇴근하라는 메시지를 뛰움

### about 페이지

- 링크 공유 기능
- 퇴근 시간 설정 기능
- 자동 클립보드 복사

## 깃허브 페이지 spa 세팅

- https://iamsjy17.github.io/react/2018/11/04/githubpage-SPA.html
- 원리. 404페이지에 스크립트를 두고 index페이지로 url 파라매터로 넘김

## 배경이미지

- https://unsplash.com/photos/WVIkqpoKz1I
- Photo by @swayte on Unsplash

## project setup command

```js
// cra(ts), eslint, prettier, airbnb style

// redux
yarn add redux react-redux @types/react-redux

// typesafe-actions
yarn add typesafe-actions

// gsap
yarn add gsap

// react-router-dom
yarn add react-router-dom
yarn add @types/react-router-dom

// moment
yarn add moment

// gh-pages
yarn add gh-pages
```

## 해결한 문제들

### gsap 적용안됨

- https://github.com/greensock/GSAP/issues/285#issuecomment-433729632

```tsx Share.tsx
import { Power3, TimelineLite } from "gsap";
import CSSPlugin from "gsap/CSSPlugin"; // 추가

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const C = CSSPlugin; // 추가
```

- 로컬에서는 애니메이션이 잘 실행되었는데, 빌드 후 애니메이션이 안 나오는 문제 해결
