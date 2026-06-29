# 화운 매화역수 🌸

신비롭고 동양적인 분위기의 반응형 PWA 애플리케이션

## 기술 스택

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Design**: Glassmorphism + 동양적 그라데이션

## 기능

- 📱 모바일 우선 반응형 디자인
- 🎯 초차(1초, 2초, 3초, 6초) 선택
- 🔢 1~99 범위의 랜덤 숫자 생성
- 📖 64괘 데이터 및 해석
- 🎨 Glassmorphism 스타일
- ✨ 부드러운 애니메이션

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
npm start
```

## 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx (홈 페이지)
│   ├── result/
│   │   └── page.tsx (결과 페이지)
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── Header.tsx
│   ├── CardButton.tsx
│   ├── NumberCard.tsx
│   ├── HexagramCard.tsx
│   └── Footer.tsx
├── data/
│   └── hexagrams.ts (64괘 데이터)
├── types/
│   └── index.ts
└── utils/
    ├── hexagramCalculator.ts
    └── numberGenerator.ts
```

## 디자인 특징

- 청록색, 에메랄드, 민트, 짙은 남색 그라데이션
- Glassmorphism 효과 (반투명 + 블러)
- 둥근 모서리 (rounded-2xl, rounded-3xl)
- 은은한 그림자
- 부드러운 전환 애니메이션

## 라이선스

MIT
