import { useState } from 'react'


function About() {

  // ========================================
  // 현재 복사된 카드 상태
  // ========================================
  const [copied, setCopied] = useState("")


  // ========================================
  // 복사 함수
  // ========================================
  const handleCopy = (type, text, message) => {

    // 클립보드 복사
    navigator.clipboard.writeText(text)

    // 메시지 표시
    setCopied(type)


    // 일정 시간 후 원래 상태 복구
    setTimeout(() => {

      setCopied("")

    }, 1800)
  }


  // ========================================
  // 카드 데이터
  // ========================================
  const aboutItems = [

    {
      title: "Email",

      value: "chyan024@gmail.com",

      message: "이메일이 복사되었습니다.",

      type: "email"
    },


    {
      title: "GitHub",

      value: "github.com/chyan04",

      message: "GitHub 주소가 복사되었습니다.",

      type: "github"
    },


    {
      title: "Birth",

      value: "2002.03.23",

      message: "생년월일이 복사되었습니다.",

      type: "birth"
    },


    {
      title: "Location",

      value: "South Korea",

      message: "위치가 복사되었습니다.",

      type: "location"
    }

  ]


  return (

    <section
      id="about"
      className="section fade-section"
    >

      {/* 제목 */}
      <h2>About</h2>


      {/* 카드 Grid */}
      <div className="about-grid">

        {
          aboutItems.map((item, index) => (

            <div
              key={index}

              className="about-card"

              onClick={() =>
                handleCopy(
                  item.type,
                  item.value,
                  item.message
                )
              }
            >

              {/* 카드 제목 */}
              <h3>
                {item.title}
              </h3>


              {/* 카드 내용 */}
              <p className="about-text">

                {
                  copied === item.type

                    ? item.message

                    : item.value
                }

              </p>

            </div>

          ))
        }

      </div>

    </section>

  )
}


export default About