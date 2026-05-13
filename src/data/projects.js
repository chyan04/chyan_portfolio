import portfolioImage from '../assets/portfolio.png'
import weaponImage from '../assets/weaponchallenger.png'
import springImage from '../assets/springmvc.png'


const projects = [

  {
    title: "Portfolio Website",

    description:
      "React + Vite 기반으로 제작한 개인 포트폴리오 웹사이트입니다.",

    image: portfolioImage,

    link: "https://chyan04.github.io/chyan_portfolio/",

    tags: [
      "React",
      "Vite",
      "CSS"
    ]
  },

  {
    title: "Weapon Challenger",

    description:
      "Unity 엔진 기반의 2D 플랫포머 액션 게임 프로젝트입니다.",

    image: weaponImage,

    link:
      "https://www.youtube.com/watch?v=hwaIeE9Tnis",

    tags: [
      "Unity",
      "2D",
      "Platform",
      "Team Project"
    ]
  },

  {
    title: "Spring MVC Community",

    description:
      "Java + Spring MVC 기반 커뮤니티 웹사이트 프로젝트입니다.",

    image: springImage,

    link:
      "https://github.com/chyan04/Spring-MVC",

    tags: [
      "Java",
      "Spring",
      "MySQL",
      "JSP"
    ]
  }

]

export default projects