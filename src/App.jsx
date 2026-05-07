// ========================================
// CSS 연결
// ========================================
import './App.css'


// ========================================
// React Hook 사용
// ========================================
import { useEffect } from 'react'


// ========================================
// React Icons 사용
// ========================================
import {
  FaReact,
  FaGithub,
  FaArrowRight
} from 'react-icons/fa'


// ========================================
// 아래 화살표 아이콘
// ========================================
import { HiArrowDown } from 'react-icons/hi'



function App() {

  // ========================================
  // 마우스 Glow 효과
  // ========================================
  useEffect(() => {

    // Glow 요소 선택
    const glow = document.querySelector('.mouse-glow')

    // 마우스 움직임 감지
    const moveGlow = (e) => {

      // Glow 위치 이동
      glow.style.left = `${e.clientX}px`

      glow.style.top = `${e.clientY}px`
    }

    // 이벤트 연결
    window.addEventListener('mousemove', moveGlow)

    // 컴포넌트 제거 시 이벤트 삭제
    return () => {

      window.removeEventListener('mousemove', moveGlow)
    }

  }, [])



  return (

    // ========================================
    // 사이트 전체 영역
    // ========================================
    <div className="container">

      {/* ========================================
          마우스 Glow
          ======================================== */}
      <div className="mouse-glow"></div>


      {/* ========================================
          Grid 배경
          ======================================== */}
      <div className="grid-background"></div>


      {/* ========================================
          배경 Glow 효과
          ======================================== */}
      <div className="background-glow"></div>


      {/* ========================================
          Navbar
          ======================================== */}
      <nav className="navbar">

        {/* 로고 */}
        <div className="logo">

          CHYAN

        </div>


        {/* 메뉴 링크 */}
        <div className="nav-links">

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>

      </nav>



      {/* ========================================
          HERO 영역
          ======================================== */}
      <section className="hero">

        {/* 왼쪽 텍스트 영역 */}
        <div className="hero-left">

          {/* 작은 소개 문장 */}
          <p className="hero-subtitle">

            FRONTEND DEVELOPER

          </p>


          {/* 메인 제목 */}
          <h1>

            Building

            <br />

            Modern
            <span className="highlight"> Web</span>

            <br />

            Interfaces

          </h1>


          {/* 설명 */}
          <p className="hero-description">

            React 기반 프론트엔드 개발을 학습하며

            사용자 경험 중심의 UI와
            인터랙션을 구현하고 있습니다.

            <br />

            다양한 프로젝트를 통해
            실전 경험을 확장하고 있습니다.

          </p>


          {/* 버튼 영역 */}
          <div className="hero-buttons">

            {/* 프로젝트 버튼 */}
            <a
              href="#projects"
              className="primary-button"
            >

              View Projects

              <FaArrowRight />

            </a>


            {/* GitHub 버튼 */}
            <a
              href="https://github.com/chyan04"
              target="_blank"
              className="secondary-button"
            >

              <FaGithub />

              GitHub

            </a>

          </div>

        </div>


        {/* 오른쪽 시각 영역 */}
        <div className="hero-right">

          {/* React 원형 영역 */}
          <div className="react-circle">

            {/* React 아이콘 */}
            <FaReact className="react-icon" />

          </div>

        </div>

      </section>



      {/* ========================================
          ABOUT 영역
          ======================================== */}
      <section
        className="section fade-section"
        id="about"
      >

        <h2>About</h2>

        <div className="card">

          <p>
            안녕하세요.
            프론트엔드 개발자를 목표로
            학습 중인 챤입니다.
          </p>

          <p>
            React와 JavaScript를 중심으로
            컴포넌트 구조와 사용자 인터페이스를
            공부하고 있습니다.
          </p>

          <p>
            현재는 포트폴리오 제작과
            웹 프로젝트를 통해
            실전 경험을 쌓고 있습니다.
          </p>

        </div>

      </section>



      {/* ========================================
          SKILLS 영역
          ======================================== */}
      <section
        className="section fade-section"
        id="skills"
      >

        <h2>Skills</h2>


        {/* 기술 목록 */}
        <div className="skills-grid">

          <div className="skill-card">
            React
          </div>

          <div className="skill-card">
            JavaScript
          </div>

          <div className="skill-card">
            HTML
          </div>

          <div className="skill-card">
            CSS
          </div>

          <div className="skill-card">
            GitHub
          </div>

          <div className="skill-card">
            Vite
          </div>

        </div>

      </section>



      {/* ========================================
          PROJECTS 영역
          ======================================== */}
      <section
        className="section fade-section"
        id="projects"
      >

        <h2>Projects</h2>


        {/* 프로젝트 Grid */}
        <div className="project-grid">

          {/* 프로젝트 카드 */}
          <div className="project-card">

            {/* 프로젝트 이미지 */}
            <div className="project-image"></div>

            <h3>Portfolio Website</h3>

            <p>

              React와 Vite를 기반으로 제작한
              개인 포트폴리오 웹사이트입니다.

            </p>


            {/* 기술 태그 */}
            <div className="project-tags">

              <span>React</span>

              <span>CSS</span>

              <span>Vite</span>

            </div>

          </div>



          {/* 프로젝트 카드 */}
          <div className="project-card">

            {/* 프로젝트 이미지 */}
            <div className="project-image"></div>

            <h3>Upcoming Project</h3>

            <p>

              추후 Todo App 및
              API 기반 프로젝트를
              추가할 예정입니다.

            </p>


            {/* 기술 태그 */}
            <div className="project-tags">

              <span>JavaScript</span>

              <span>API</span>

              <span>UI</span>

            </div>

          </div>

        </div>

      </section>



      {/* ========================================
          CONTACT 영역
          ======================================== */}
      <section
        className="section fade-section"
        id="contact"
      >

        <h2>Contact</h2>

        <div className="card">

          <p>Email: example@email.com</p>

          <p>GitHub: github.com/chyan04</p>

        </div>

      </section>



      {/* ========================================
          하단 스크롤 아이콘
          ======================================== */}
      <div className="scroll-icon">

        <HiArrowDown />

      </div>

    </div>
  )
}



// ========================================
// export
// ========================================
export default App