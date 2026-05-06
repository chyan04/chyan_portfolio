const PROJECTS = [
  {
    title: '포트폴리오 웹사이트',
    status: 'live',
    desc: 'React와 Vite를 사용해 직접 구현한 개인 포트폴리오. 컴포넌트 분리, 반응형 레이아웃, 다크 테마 디자인을 적용했습니다.',
    tags: ['React', 'Vite', 'CSS'],
  },
  {
    title: 'Todo App',
    status: 'planned',
    desc: '상태 관리와 로컬 스토리지를 활용한 할 일 관리 앱. CRUD 기능과 필터링 로직 구현 예정.',
    tags: ['React', 'LocalStorage'],
  },
  {
    title: 'API 기반 프로젝트',
    status: 'planned',
    desc: 'Open API를 활용한 데이터 시각화 프로젝트. fetch / axios, 비동기 처리를 학습할 계획입니다.',
    tags: ['React', 'REST API'],
  },
]

function Projects() {
  return (
    <section id="projects">
      <p className="section-label">projects</p>
      <h2 className="section-title">Selected Work</h2>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span
                className={`project-status ${project.status === 'planned' ? 'planned' : ''}`}
              >
                {project.status}
              </span>
            </div>

            <p className="project-desc">{project.desc}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
