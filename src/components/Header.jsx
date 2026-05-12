function Header() {

  return (

    <nav className="navbar">

      <div className="nav-container">

        {/* Logo */}
        <a href="#" className="logo">
          CHYAN
        </a>


        {/* Navigation */}
        <div className="nav-links">

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>

      </div>

    </nav>
  )
}


export default Header