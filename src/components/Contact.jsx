function Contact() {
  return (
    <section id="contact">
      <p className="section-label">contact</p>
      <h2 className="section-title">Let&apos;s Connect</h2>

      <div className="contact-card">
        <p className="contact-text">
          새로운 기회나 협업 제안 모두 환영합니다.<br />
          편하게 메일로 연락 주세요.
        </p>

        <div className="contact-links">
          <a className="contact-link" href="mailto:chyan024@gmail.com">
            <span>chyan024@gmail.com</span>
            <span className="arrow">↗</span>
          </a>
          <a
            className="contact-link"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
