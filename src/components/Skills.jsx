const SKILLS = [
  { name: 'React', desc: '컴포넌트 기반 UI 구성' },
  { name: 'JavaScript', desc: 'ES6+ 문법 및 이벤트 처리' },
  { name: 'HTML / CSS', desc: '시맨틱 마크업 및 반응형 스타일링' },
  { name: 'Vite', desc: '모던 프론트엔드 빌드 도구' },
  { name: 'Git', desc: '버전 관리 및 협업' },
]

function Skills() {
  return (
    <section id="skills">
      <p className="section-label">skills</p>
      <h2 className="section-title">Tech Stack</h2>

      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <div className="skill" key={skill.name}>
            <span className="skill-name">{skill.name}</span>
            <span className="skill-desc">{skill.desc}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
