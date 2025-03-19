# 🌟 나만의 리그 오브 레전드

![Project Badge](https://img.shields.io/badge/Next.js-15.2.1-blue?style=flat-square)
![Project Badge](https://img.shields.io/badge/TanStack_Query-4.29.21-orange?style=flat-square)
![Project Badge](https://img.shields.io/badge/TypeScript-✔-green?style=flat-square)

## 🎮 프로젝트 소개
**나만의 리그 오브 레전드**는 리그 오브 레전드의 **아이템 정보, 챔피언 정보, 로테이션 정보**를 확인할 수 있는 웹 애플리케이션입니다. 🏆

🔗 **프로젝트 페이지:** [나만의 리그 오브 레전드](https://nbc-my-league-of-legend.vercel.app/)

## 🔥 구현 기능
✔ **챔피언 목록 조회** → 모든 챔피언의 기본 정보를 확인할 수 있음

✔ **챔피언 상세 페이지** → 챔피언의 스킬, 패시브, 배경 이야기 제공

✔ **아이템 목록 조회** → 모든 아이템의 이름, 설명, 가격 확인 가능

✔ **로테이션 챔피언 조회** → 이번 주 무료 로테이션 챔피언 정보 제공

✔ **신규 소환사 무료 챔피언 정보** → 신규 소환사가 사용할 수 있는 챔피언 목록 조회

✔ **최적화된 데이터 패칭** → Server Actions, TanStack Query 적용하여 성능 향상

✔ **SSG / SSR / CSR / ISR 구현** → 페이지 별 적절한 렌더링 방식 적용

✔ **로딩 & 에러 핸들링** → Suspense와 React Error Boundary를 활용한 개선

## ⏳ 프로젝트 기간
📅 **2025년 3월 13일 ~ 3월 19일 (7일)**

## 🚀 트러블 슈팅
개발 과정에서 발생했던 주요 이슈 및 해결 과정은 블로그에서 확인할 수 있습니다. 📌
- [🔗 API Key 적용 문제 해결](https://sol09-29.tistory.com/91)
- [🔗 TanStack Query 적용 과정](https://sol09-29.tistory.com/92)
- [🔗 Suspense와 Error Boundary를 활용한 개선](https://sol09-29.tistory.com/93)

## 📂 프로젝트 구조
```
/src
├── app
│   ├── champions/
│   │   ├── [id]/
│   │   │   └── page.tsx          # 개별 챔피언 상세 페이지
│   │   ├── loading.tsx           # 로딩 핸들링
│   │   ├── error.tsx             # 에러 핸들링
│   │   └── page.tsx              # 챔피언 목록 페이지
│   ├── items/
│   │   ├── loading.tsx           # 로딩 핸들링
│   │   ├── error.tsx             # 에러 핸들링
│   │   └── page.tsx              # 아이템 목록 페이지
│   ├── rotation/
│   │   ├── loading.tsx           # 로딩 핸들링
│   │   ├── error.tsx             # 에러 핸들링
│   │   └── page.tsx              # 로테이션 챔피언 페이지
│   ├── api/
│   │   └── rotation/route.ts     # 로테이션 챔피언 API
│   ├── layout.tsx                # 공통 레이아웃
│   ├── page.tsx                  # 홈 페이지
│   ├── global-error.tsx          # 전역 에러 핸들링
├── utils
│   ├── riot.api.ts               # Riot API 엔드포인트 관리
│   ├── serverApi.ts              # 서버에서 데이터 가져오는 함수
├── types
│   ├── Champion.ts               # 챔피언 데이터 타입 정의
│   ├── ChampionDetail.ts         # 챔피언 상세 정보 데이터 타입 정의
│   ├── Item.ts                   # 아이템 데이터 타입 정의
│
├── public                        # 정적 파일 저장 폴더
├── README.md                     # 프로젝트 소개 문서
```

## 🗂 주요 파일 설명
📌 **`app/champions/[id]/page.tsx`** → 개별 챔피언 상세 정보 페이지  
📌 **`app/rotation/page.tsx`** → 로테이션 챔피언을 CSR로 렌더링하는 페이지  
📌 **`app/items/page.tsx`** → 모든 아이템 정보를 제공하는 페이지  
📌 **`app/api/rotation/route.ts`** → Riot API를 호출하는 Route Handler  
📌 **`utils/serverApi.ts`** → 서버에서 데이터 패칭하는 함수 모음  
📌 **`types/Champion.ts`** → 챔피언 데이터 타입 정의  
📌 **`error.tsx` / `global-error.tsx`** → 페이지 및 전역 에러 핸들링  

## 🛠 기술 스택
🚀 **Frontend**: Next.js 15.2.1, React 18, TypeScript  
⚡ **State Management**: TanStack Query  
📡 **API**: Riot Games Data Dragon API  
🎨 **Styling**: Tailwind CSS  
🌐 **Deployment**: Vercel  

