// 프로젝트 목록 컴포넌트
function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>포트폴리오 웹사이트</h3>

        <p>
          React와 Vite를 사용하여 제작한 개인 포트폴리오입니다.
        </p>

        <p>
          컴포넌트 구조 분리와 기본적인 UI 설계를 경험했습니다.
        </p>
      </div>

      <div className="project-card">
        <h3>추후 프로젝트 예정</h3>

        <p>
          Todo 앱 및 API 기반 프로젝트를 계획 중입니다.
        </p>
      </div>

    </section>
  )
}

export default Projects