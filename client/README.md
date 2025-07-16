# Git

버전 관리 시작

```bash
cd 내프로젝트
git init
```

최포 버전 생성

```bash
git add . # 스테이지 업로드
git commit -m "커밋메시지" # 커밋(버전) 생성
```

원격 저장소 추가

```bash
# git remote add 원격저장소별칭 원격저장소주소
git remote add origin https://github.com/소유자/저장소이름.git
```

원격 저장소 업로드(Push)

```bash
# git push 별칭 브랜치이름
git push origin main
```

원격 저장소 복제(Clone)

```bash
# git clone 원격저장소주소
git clone https://github.com/소유자/저장소이름.git
```

원격 저장소 다운로드(Pull)

```bash
# git pull 별칭 브랜치이름
git pull origin main
```

---

# React

## 문법

### 양방향 데이터 바인딩

양방향 데이터 바인딩은 데이터의 흐름이 양방향으로 이루어지는 것을 의미합니다.
즉, 데이터가 변경되면 그 변경 사항이 자동으로 반영되고, 변경된 데이터를 다시 읽어올 수 있습니다.
이러한 방식은 데이터의 동기화를 유지하고 상호작용을 쉽게 구현할 수 있습니다.

```jsx
import { useState } from 'react'

export default function App() {
  const [text, setText] = useState('Hello~')

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={function (event) {
          const inputEl = event.target
          setText(inputEl.value)
        }}
      />
      <button
        onClick={function () {
          console.log(text)
        }}>
        로그인
      </button>
      <h1>{text}</h1>
    </>
  )
}
```
