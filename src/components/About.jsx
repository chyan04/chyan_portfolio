function About() {
  return (
    <section id="about" className="hero">
      <p className="hero-greet">// Hi there, I&apos;m</p>
      <h1 className="hero-name">CHAN</h1>
      <h2 className="hero-role">
        Frontend <span className="accent">Developer</span>
      </h2>

      <p className="hero-desc">
        React 기반 프론트엔드 개발을 학습 중인 주니어 개발자입니다.
        컴포넌트 구조와 상태 관리를 이해하고, 직접 만들고 부딪히며 성장하고 있습니다.
      </p>

      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">
          View Projects →
        </a>
        <a href="#contact" className="btn">
          Get in touch
        </a>
      </div>

      <div className="about-text" style={{ marginTop: '40px' }}>
        <p>
          현재는 <strong>포트폴리오 사이트</strong>를 직접 구현하며 웹 개발의 전체 흐름을
          경험하고 있습니다.
        </p>
        <p>
          앞으로 다양한 프로젝트를 통해 실무 역량을 강화하고, 사용자에게 가치있는 경험을
          제공하는 개발자가 되는 것이 목표입니다.
        </p>
      </div>
    </section>
  )
}

export default About
