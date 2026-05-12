// ========================================
// CSS 연결
// ========================================
import './App.css'


// ========================================
// React Hook
// ========================================
import { useEffect } from 'react'


// ========================================
// Components
// ========================================
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {

  // ========================================
  // 마우스 Glow 효과
  // ========================================
  useEffect(() => {

    // glow 요소 선택
    const glow = document.querySelector('.mouse-glow')

    // glow 요소가 없으면 종료
    if (!glow) return

    // 마우스 이동 함수
    const moveGlow = (e) => {

      glow.style.left = `${e.clientX}px`

      glow.style.top = `${e.clientY}px`
    }

    // 이벤트 등록
    window.addEventListener('mousemove', moveGlow)

    // 컴포넌트 제거 시 이벤트 삭제
    return () => {

      window.removeEventListener('mousemove', moveGlow)
    }

  }, [])



  // ========================================
  // JSX
  // ========================================
  return (

    <>
    
      {/* ========================================
          마우스 Glow
      ======================================== */}
      <div className="mouse-glow"></div>


      {/* ========================================
          Grid 배경
      ======================================== */}
      <div className="grid-background"></div>


      {/* ========================================
          배경 Glow
      ======================================== */}
      <div className="background-glow"></div>


      {/* ========================================
          전체 컨테이너
      ======================================== */}
      <div className="container">

        {/* 상단 Header */}
        <Header />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contact />

      </div>

    </>

  )
}


// ========================================
// export
// ========================================
export default App