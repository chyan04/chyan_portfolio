// 상단 헤더 컴포넌트
function Header() {
  return (
    <header className="header">
    <div className="header-inner">

        {/* 왼쪽 */}
        <h1 className="logo">CHAN</h1>

        {/* 오른쪽 */}
        <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        </nav>

    </div>
    </header>
  )
}

export default Header