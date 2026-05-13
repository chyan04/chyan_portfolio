import { FaReact, FaGithub } from "react-icons/fa"

function Hero() {

  return (

    <section className="hero">

      {/* 왼쪽 */}
      <div className="hero-left">

        <p className="hero-subtitle">
          FRONTEND · BACKEND · GAME DEV
        </p>

        <h1>
          CHYAN
        </h1>

        <p className="hero-description">

          React · Spring · Unity 기반으로
          웹과 게임을 개발하는 개발자입니다.

        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="primary-button"
          >
            View Projects
          </a>

          <a
            href="https://github.com/chyan04"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

      </div>


      {/* 오른쪽 */}
      <div className="hero-right">

        <div className="react-circle">

          <FaReact className="react-icon" />

        </div>

      </div>

    </section>
  )
}

export default Hero