import {

  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGithub,
  FaUnity,
  FaDatabase

} from "react-icons/fa"


import {

  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiPython,
  SiNodedotjs,
  SiGitlab,
  SiC,
  SiCplusplus,
  SiDotnet,

} from "react-icons/si"


function Skills() {

  // ========================================
  // 기술 목록
  // ========================================
  const skillCategories = [

    // ========================================
    // Frontend
    // ========================================
    {
      title: "Frontend",

      skills: [

        {
          name: "React",
          icon: <FaReact className="skill-icon react" />
        },

        {
          name: "HTML5",
          icon: <FaHtml5 className="skill-icon html" />
        },

        {
          name: "CSS3",
          icon: <FaCss3Alt className="skill-icon css" />
        },

        {
          name: "JavaScript",
          icon: <SiJavascript className="skill-icon js" />
        },

        {
          name: "JSP",
          icon: <FaJava className="skill-icon java" />
        }

      ]
    },


    // ========================================
    // Backend
    // ========================================
    {
      title: "Backend",

      skills: [

        {
          name: "Java",
          icon: <FaJava className="skill-icon java" />
        },

        {
          name: "Spring Boot",
          icon: <SiSpringboot className="skill-icon spring" />
        },

        {
          name: "Python",
          icon: <SiPython className="skill-icon python" />
        },

        {
          name: "Node.js",
          icon: <SiNodedotjs className="skill-icon node" />
        }

      ]
    },


    // ========================================
    // Language
    // ========================================
    {
      title: "Language",

      skills: [

        {
          name: "C",
          icon: <SiC className="skill-icon c" />
        },

        {
          name: "C++",
          icon: <SiCplusplus className="skill-icon cpp" />
        },

        {
          name: "C#",
          icon: <SiDotnet className="skill-icon csharp" />
        }

      ]
    },


    // ========================================
    // Database
    // ========================================
    {
      title: "Database",

      skills: [

        {
          name: "MySQL",
          icon: <SiMysql className="skill-icon mysql" />
        },

        {
          name: "SQL Server",
          icon:
            <FaDatabase
              className="skill-icon database"
            />
        }

      ]
    },


    // ========================================
    // Tools
    // ========================================
    {
      title: "Tools",

      skills: [

        {
          name: "GitHub",
          icon: <FaGithub className="skill-icon github" />
        },

        {
          name: "GitLab",
          icon: <SiGitlab className="skill-icon gitlab" />
        },

        {
          name: "Unity",
          icon: <FaUnity className="skill-icon unity" />
        }

      ]
    }

  ]


  return (

    <section
      id="skills"
      className="section fade-section"
    >

      <h2>Skills</h2>


      <div className="skills-wrapper">

        {
          skillCategories.map((category, index) => (

            <div
              className="skills-category"
              key={index}
            >

              <h3>
                {category.title}
              </h3>


              <div className="skills-grid">

                {
                  category.skills.map((skill, skillIndex) => (

                    <div
                      className="skill-card"
                      key={skillIndex}
                    >

                      {skill.icon}

                      <span>
                        {skill.name}
                      </span>

                    </div>

                  ))
                }

              </div>

            </div>

          ))
        }

      </div>

    </section>

  )
}


export default Skills