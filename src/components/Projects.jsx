import projects from '../data/projects'


function Projects() {

  return (

    <section
      id="projects"
      className="section fade-section"
    >

      {/* 제목 */}
      <h2>Projects</h2>


      {/* 프로젝트 Grid */}
      <div className="project-grid">

        {
          projects.map((project, index) => (

            <a
              key={index}

              href={project.link}

              target="_blank"

              rel="noreferrer"

              className="project-card"
            >

              {/* 프로젝트 이미지 */}
              <img
                src={project.image}
                alt={project.title}
                className="project-thumbnail"
              />


              {/* 프로젝트 제목 */}
              <h3>
                {project.title}
              </h3>


              {/* 프로젝트 설명 */}
              <p>
                {project.description}
              </p>


              {/* 태그 */}
              <div className="project-tags">

                {
                  project.tags.map((tag, tagIndex) => (

                    <span key={tagIndex}>
                      {tag}
                    </span>

                  ))
                }

              </div>

            </a>

          ))
        }

      </div>

    </section>

  )
}


export default Projects