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
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaUnity,
  FaArrowRight,
  FaDatabase,
  FaJava,
  FaPython,
  FaNodeJs,
  FaGitlab,

} from "react-icons/fa"

import {

  SiJavascript,
  SiC,
  SiCplusplus,
  SiSharp,
  SiSpringboot,
  SiMysql

} from "react-icons/si"

// ========================================
// 아래 화살표 아이콘
// ========================================
// import { HiArrowDown } from 'react-icons/hi'
import { useState } from 'react'


function App() {
  /* ========================================
    복사 상태 관리
  ======================================== */
  const [copiedText, setCopiedText] = useState("")

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
          상단 네비게이션 바
        ======================================== */}
        <nav className="navbar">

          <div className="nav-container">

            {/* 로고 */}
            <a href="#" className="logo">

              CHYAN

            </a>

            {/* 메뉴 */}
            <div className="nav-links">

              <a href="#about">About</a>

              <a href="#skills">Skills</a>

              <a href="#projects">Projects</a>

              <a href="#contact">Contact</a>

            </div>

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

            GAME & WEB DEVELOPER

          </p>


          {/* 메인 제목 */}
          <h1>

            Greetings

            <br />

            CHYAN 

            <span className="highlight"> PORTFOLIO</span>  

            <br />

          </h1>


          {/* 설명 */}
          <p className="hero-description">

          안녕하세요, 게임 기획 및 개발자 안홍찬 입니다.

            <br />

          Unity 게임 개발과 React · Spring Boot 기반 웹 개발을 공부하고 있습니다.

            <br />

          기획부터 개발까지 직접 경험하며 무엇보다 사용자 경험을 중요하게 생각합니다.

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
        id="about"
        className="section fade-section"
      >

        <h2>About</h2>

        <div className="about-grid">

          {/* ========================================
              Email 카드
          ======================================== */}
          <div
            className="about-card"

            onClick={() => {

              navigator.clipboard.writeText(
                "chyan024@gmail.com"
              )

              /* =========================
                1단계
                기존 텍스트 fade out
              ========================= */
              setCopiedText("email-hide")


              setTimeout(() => {

                /* =========================
                  2단계
                  복사 메시지로 변경
                ========================= */
                setCopiedText("email-show")

              }, 250)


              setTimeout(() => {

                /* =========================
                  3단계
                  복사 메시지 fade out
                ========================= */
                setCopiedText("email-hide-again")

              }, 1700)


              setTimeout(() => {

                /* =========================
                  4단계
                  원래 텍스트 복구
                ========================= */
                setCopiedText("")

              }, 1950)
            }}
          >

            <h3>Email</h3>

            <p
              className={`
                about-text

                ${
                  copiedText === "email-hide"
                  || copiedText === "email-hide-again"

                  ? "animate"

                  : ""
                }
              `}
            >

              {
                copiedText === "email-show"

                ? "이메일이 복사되었습니다."

                : "chyan024@gmail.com"
              }

            </p>

          </div>



          {/* ========================================
              GitHub 카드
          ======================================== */}
          <div
            className="about-card"

            onClick={() => {

              navigator.clipboard.writeText(
                "github.com/chyan04"
              )

              setCopiedText("github-animate")

              setTimeout(() => {

                setCopiedText("github")

              }, 200)

              setTimeout(() => {

                setCopiedText("github-hide")

                setTimeout(() => {

                  setCopiedText("")

                }, 200)

              }, 1500)
            }}
          >

            <h3>GitHub</h3>

            <p
              className={`
                about-text

                ${
                  copiedText === "github-animate"
                  || copiedText === "github-hide"

                  ? "animate"

                  : ""
                }
              `}
            >

              {
                copiedText === "github"

                ? "GitHub 주소가 복사되었습니다."

                : "github.com/chyan04"
              }

            </p>

          </div>



          {/* ========================================
              Blog 카드
          ======================================== */}
          <div
            className="about-card"

            onClick={() => {

              navigator.clipboard.writeText(
                "velog.io/@example"
              )

              setCopiedText("blog-animate")

              setTimeout(() => {

                setCopiedText("blog")

              }, 200)

              setTimeout(() => {

                setCopiedText("blog-hide")

                setTimeout(() => {

                  setCopiedText("")

                }, 200)

              }, 1500)
            }}
          >

            <h3>Birth</h3>

            <p
              className={`
                about-text

                ${
                  copiedText === "blog-animate"
                  || copiedText === "blog-hide"

                  ? "animate"

                  : ""
                }
              `}
            >

              {
                copiedText === "blog"

                ? "생년월일이 복사되었습니다."

                : "2002.03.23"
              }

            </p>

          </div>



          {/* ========================================
              Location 카드
          ======================================== */}
          <div
            className="about-card"

            onClick={() => {

              navigator.clipboard.writeText(
                "South Korea"
              )

              setCopiedText("location-animate")

              setTimeout(() => {

                setCopiedText("location")

              }, 200)

              setTimeout(() => {

                setCopiedText("location-hide")

                setTimeout(() => {

                  setCopiedText("")

                }, 200)

              }, 1500)
            }}
          >

            <h3>Location</h3>

            <p
              className={`
                about-text

                ${
                  copiedText === "location-animate"
                  || copiedText === "location-hide"

                  ? "animate"

                  : ""
                }
              `}
            >

              {
                copiedText === "location"

                ? "위치가 복사되었습니다."

                : "South Korea"
              }

            </p>

          </div>

        </div>

      </section>
      {/* ========================================
          SKILLS 영역
      ======================================== */}
      <section
        id="skills"
        className="section fade-section"
      >
        {/* ========================================
            Main Skills
        ======================================== */}
        <h2>Skills</h2>

        <div className="main-skills">

          <div className="main-skill-card unity-main">
            <FaUnity className="main-skill-icon" />
            <span>Unity</span>
          </div>

          <div className="main-skill-card cs-main">
            <SiSharp className="main-skill-icon" />
            <span>C#</span>
          </div>

          <div className="main-skill-card react-main">
            <FaReact className="main-skill-icon" />
            <span>React</span>
          </div>

          <div className="main-skill-card spring-main">
            <SiSpringboot className="main-skill-icon" />
            <span>Spring Boot</span>
          </div>

        </div>


        <div className="skills-wrapper">

          {/* ========================================
              Frontend
          ======================================== */}
          <div className="skills-category">

            <h3>Frontend</h3>

            <div className="skills-grid">

              <div className="skill-card">
                <FaReact className="skill-icon react" />
                <span>React</span>
              </div>

              <div className="skill-card">
                <FaHtml5 className="skill-icon html" />
                <span>HTML5</span>
              </div>

              <div className="skill-card">
                <FaCss3Alt className="skill-icon css" />
                <span>CSS3</span>
              </div>

              <div className="skill-card">
                <SiJavascript className="skill-icon js" />
                <span>JavaScript</span>
              </div>

              <div className="skill-card">
                <FaJava className="skill-icon jsp" />
                <span>JSP</span>
              </div>

              <div className="skill-card">
                <SiC className="skill-icon c" />
                <span>C</span>
              </div>

              <div className="skill-card">
                <SiCplusplus className="skill-icon cpp" />
                <span>C++</span>
              </div>

              <div className="skill-card">
                <SiSharp  className="skill-icon cs" />
                <span>C#</span>
              </div>

            </div>

          </div>


          {/* ========================================
              Backend
          ======================================== */}
          <div className="skills-category">

            <h3>Backend</h3>

            <div className="skills-grid">

              <div className="skill-card">
                <FaJava className="skill-icon java" />
                <span>Java</span>
              </div>

              <div className="skill-card">
                <SiSpringboot className="skill-icon spring" />
                <span>Spring Boot</span>
              </div>

              <div className="skill-card">
                <FaPython className="skill-icon python" />
                <span>Python</span>
              </div>

              <div className="skill-card">
                <FaNodeJs className="skill-icon node" />
                <span>Node.js</span>
              </div>

            </div>

          </div>


          {/* ========================================
              Database
          ======================================== */}
          <div className="skills-category">

            <h3>Database</h3>

            <div className="skills-grid">

              <div className="skill-card">
                <SiMysql className="skill-icon mysql" />
                <span>MySQL</span>
              </div>

              <div className="skill-card">
                <FaDatabase className="skill-icon mssql" />
                <span>SQL Server</span>
              </div>

              <div className="skill-card">
                <FaDatabase className="skill-icon ibm" />
                <span>IBM SPSS</span>
              </div>

            </div>

          </div>


          {/* ========================================
              Tools
          ======================================== */}
          <div className="skills-category">

            <h3>Tools</h3>

            <div className="skills-grid">

              <div className="skill-card">
                <FaGithub className="skill-icon github" />
                <span>GitHub</span>
              </div>

              <div className="skill-card">
                <FaGitlab className="skill-icon gitlab" />
                <span>GitLab</span>
              </div>

              <div className="skill-card">
                <FaUnity className="skill-icon unity" />
                <span>Unity</span>
              </div>

            </div>

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
            <a
              href="https://chyan04.github.io/chyan_portfolio/"
              target="_blank"
              className="projectlist-portfolio"
            >

            {/* 프로젝트 이미지 */}
            <div className="project-image"></div>
          <img
            src="/chyan_portfolio/images/portfolio.png"
            alt="Weapon Challenger"
          />
            <h3>Portfolio Website</h3>
            <p>
              React와 Vite를 기반으로 제작한 개인 포트폴리오 웹사이트입니다.
            </p>


            {/* 기술 태그 */}
            <div className="project-tags">

              <span>React</span>
              <span>CSS</span>
              <span>Vite</span>

            </div>
          </a>
        </div>

          {/* 프로젝트 카드 */}
          <div className="project-card">
            <a
              href="https://www.youtube.com/watch?v=hwaIeE9Tnis"
              target="_blank"
              className="projectlist-wc"
            >
            
            {/* 프로젝트 이미지 */}
        <div className="project-image">

          <img
            src="/chyan_portfolio/images/weapon.png"
            alt="Weapon Challenger"
          />

        </div>
            <h3>Weapon Challenger</h3>

            <p>
              팀원의 협업을 통해 개발 및 제작한 2D 플랫포머 게임 입니다.
            </p>


            {/* 기술 태그 */}
            <div className="project-tags">

              <span>Unity 6</span>

              <span>C#</span>

              <span>2D</span>

              <span>Platform</span>

              <span>Gun Action</span>

              <span>Team</span>

            </div>
            </a>

          </div>

        </div>

          <div className="project-card">
            <a
              href="https://github.com/chyan04/Spring-MVC"
              target="_blank"
              className="projectlist-wc"
            >
            
            {/* 프로젝트 이미지 */}
            <div className="project-image"></div>

            <h3>Spring Homepage</h3>

            <p>
              Java · Spring boot 기반으로 제작된 홈페이지 입니다.
            </p>


            {/* 기술 태그 */}
            <div className="project-tags">

              <span>HTML</span>

              <span>Java</span>

              <span>Spring boot</span>

              <span>CSS</span>

              <span>JavaScript</span>

              <span>mySQL</span>

            </div>
            </a>

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

          <p>Email: chyan024@email.com</p>

          <p>GitHub: github.com/chyan04</p>

        </div>

      </section>



      {/* ========================================
          하단 스크롤 아이콘
          ======================================== */}
      {/* <div className="scroll-icon">

        <HiArrowDown />

      </div> */}

    </div>
  )
}



// ========================================
// export
// ========================================
export default App