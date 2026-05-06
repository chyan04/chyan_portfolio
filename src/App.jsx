import './App.css'

import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 CHAN. Built with React + Vite.</p>
        </div>
      </footer>
    </>
  )
}

export default App
