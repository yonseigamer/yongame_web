# 🎮 Yongame : 연세대학교 게임 동아리 공식 홈페이지

<div align="center">
  <p>
    <b>연세대학교 중앙 게임 동아리 '연겜'의 활동을 알리고<br/>부원들과 소통하기 위한 웹사이트 프로젝트입니다.</b>
  </p>

  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>
</div>

<br/>

## 📝 Introduction
이 프로젝트는 단순한 정보 전달을 넘어, '연겜'만의 즐겁고 역동적인 아이덴티티를 웹 경험으로 녹여내는 것을 목표로 합니다.
신입 부원 모집 정보, 지난 활동 갤러리, 동아리 소개 등의 기능을 제공합니다.

- **Period:** 2026.01.23 ~ 2026.02.13 (약 3주)
- **Deploy:** [배포된 사이트 링크 (예: https://yongame.vercel.app)](https://google.com)

<br/>

## 👥 Team Members
R&R(Role and Responsibilities)에 따른 팀 구성입니다.

| Role | Name | GitHub / Contact | Responsibilities |
|:---:|:---:|:---:|:---|
| **PM** | **임예찬** | [@Sagak-bit](https://github.com/Sagak-bit) | 프로젝트 총괄, 일정 관리, 기능 명세 확정 |
| **FE** | [팀원명] | [@ID/EMAIL] | UI/UX 구현, React 컴포넌트 개발, 배포 |
| **Design** | [팀원명] | [@ID/EMAIL] | 웹 디자인 시스템 구축, UI 프로토타이핑 |
| **Content** | [팀원명] | [@ID/EMAIL] | 홍보 카피라이팅, 미디어 리소스 큐레이팅 |

<br/>

## 🛠 Tech Stack
### Frontend
- **Framework:** React
- **Build Tool:** Vite
- **Styling:** CSS Modules / Styled-components (팀에서 정한 것으로 수정)
- **Deployment:** Vercel (또는 GitHub Pages)

### Collaboration Tools
- **Communication:** Discord (Webhook 연동)
- **Management:** Notion (Kanban Board)
- **Design:** Figma

<br/>

## 🏃 Getting Started
이 프로젝트를 로컬 환경에서 실행하려면 다음 절차를 따르세요.

**1. Repository Clone**

```bash
git clone [https://github.com/Sagak-bit/yongame_web_proj.git](https://github.com/Sagak-bit/yongame_web_proj.git)
cd yongame_web_proj
```

**2. Install Dependencies**

```bash
npm install
```

**3. Set Environment Variables**

루트 디렉토리에 `.env` 파일을 생성하고 필요한 키 값을 입력하세요. (팀 노션/디스코드 참고)
```bash
# .env.example
VITE_API_KEY=your_api_key_here
```

**4. Run Development Server**

```bash
npm run dev
```

## 📂 Directory Structure

```bash
src/
├── assets/         # 이미지, 폰트, 아이콘 등 정적 파일
├── components/     # 재사용 가능한 UI 컴포넌트 (Button, Header, Footer...)
├── pages/          # 라우팅 단위의 완성된 페이지 (Home, About, Recruit...)
├── styles/         # 전역 스타일(Global CSS) 및 공통 스타일 변수
├── utils/          # 날짜 변환, 포맷팅 등 공통으로 사용하는 함수
├── App.jsx         # 메인 앱 컴포넌트 (라우터 설정 등)
└── main.jsx        # 프로젝트 진입점 (Entry Point)
```

## 🤝 Convention

원활한 팀 협업을 위해 아래 규칙을 준수합니다.

### 🌿 Branch Strategy

우리는 **GitHub Flow** 방식을 변형하여 사용합니다.

* **`main`**: 실제 배포되는 안정적인 버전 (Production)
* **`develop`**: 모든 팀원의 개발 코드가 합쳐지는 곳
* **`feature/기능명`**: 개별 기능을 개발하는 브랜치 (작업 후 develop으로 PR)

### 💬 Commit Message Rules

커밋 메시지는 **`태그: 설명`** 형식을 따릅니다.

| 태그 (Tag) | 설명 (Description) |
| --- | --- |
| **`feat`** | 새로운 기능 추가 |
| **`fix`** | 버그 수정 |
| **`design`** | CSS 등 사용자 UI 디자인 변경 |
| **`style`** | 코드 포맷팅, 세미콜론 누락 등 (로직 변경 없음) |
| **`refactor`** | 코드 리팩토링 (기능 변경 없이 코드 개선) |
| **`docs`** | 문서 수정 (README.md 등) |
| **`chore`** | 빌드 업무, 패키지 매니저 설정 등 자질구레한 작업 |

---

**Yongame Official Homepage Project** © 2026 Yongame. All Rights Reserved.
