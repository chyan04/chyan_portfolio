import './App.css'

import { useEffect } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  useEffect(() => {

    const glow = document.querySelector(".mouse-glow")

    const moveGlow = (e) => {

      glow.style.left = `${e.clientX}px`
      glow.style.top = `${e.clientY}px`
    }

    window.addEventListener("mousemove", moveGlow)

    return () => {

      window.removeEventListener("mousemove", moveGlow)
    }

  }, [])


  return (

    <>

      <div className="grid-background"></div>

      <div className="background-glow"></div>

      <div className="mouse-glow"></div>


      <Header />


      <main className="container">

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />

      </main>

    </>

  )
}

export default App