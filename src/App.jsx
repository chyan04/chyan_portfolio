// 전체 스타일 불러오기
import './App.css'

// 컴포넌트 불러오기
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

// 메인 App 컴포넌트
function App() {
  return (
    <>
      {/* ============================= */}
      {/* 1. 헤더 (전체 화면 기준) */}
      {/* ============================= */}
      <Header />

      {/* ============================= */}
      {/* 2. 메인 콘텐츠 영역 */}
      {/* ============================= */}
      <div className="container">
        
        {/* 자기소개 */}
        <About />

        {/* 기술 스택 */}
        <Skills />

        {/* 프로젝트 */}
        <Projects />

        {/* 연락처 */}
        <Contact />

      </div>
    </>
  )
}

export default App