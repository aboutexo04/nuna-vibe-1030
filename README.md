# Netflix Style Movie App

현재 상영중인 영화를 보여주는 Netflix 스타일의 웹 애플리케이션입니다.

## 배포 방법

### 1. GitHub에 코드 푸시

```bash
# GitHub 저장소 생성 후 원격 저장소 추가
git remote add origin https://github.com/사용자명/저장소명.git

# 코드 푸시
git branch -M main
git push -u origin main
```

### 2. Netlify에 배포

1. [Netlify 대시보드](https://app.netlify.com) 접속
2. **"Add new site"** > **"Import an existing project"** 클릭
3. **GitHub** 선택하고 저장소 연결
4. **빌드 설정**:
   - **Build command**: 비워두기 (정적 사이트이므로)
   - **Publish directory**: `.` 또는 비워두기
5. **"Deploy site"** 클릭
6. 배포 완료! 🎉

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

