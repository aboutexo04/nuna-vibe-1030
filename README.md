# Netflix Style Movie App

현재 상영중인 영화를 보여주는 Netflix 스타일의 웹 애플리케이션입니다.

## Netlify 배포 방법 (간단!)

### 방법 1: 드래그 앤 드롭 (가장 쉬움)
1. Netlify 대시보드 접속 (https://app.netlify.com)
2. "Add new site" > "Deploy manually" 클릭
3. `index.html`, `style.css`, `script.js` 파일이 있는 폴더를 드래그 앤 드롭
4. 끝! 바로 배포됩니다.

### 방법 2: Git 연동
1. GitHub/GitLab 등에 코드 푸시
2. Netlify 대시보드에서 "Add new site" > "Import an existing project"
3. 저장소 선택
4. 빌드 설정:
   - Build command: 비워두기
   - Publish directory: `.` 또는 비워두기
5. Deploy 클릭

## 파일 구조

```
.
├── index.html    # 메인 HTML
├── style.css    # 스타일시트
└── script.js    # JavaScript (API 호출 포함)
```

## 주요 기능

- TMDB API를 통한 현재 상영중인 영화 조회
- Netflix 스타일의 반응형 디자인
- 영화 포스터 및 개봉일 표시

