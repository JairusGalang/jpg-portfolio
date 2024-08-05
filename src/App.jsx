import React from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import WorkExperience from './pages/WorkExperience'
import Certificates from './pages/Certificates'
import ContactMe from './pages/ContactMe'
import Footer from './components/Footer'

const App = () => {
  return (
    <MainLayout>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="about" className="min-h-screen flex items-center justify-center">
            <About />
          </section>
          <section id="projects" className="min-h-screen">
            <Projects />
          </section>
          <section id="work-experience" className="min-h-screen">
            <WorkExperience />
          </section>
          <section id="certificates" className="min-h-screen">
            <Certificates />
          </section>
          <section id="contact-me" className="min-h-screen flex items-center justify-center">
            <ContactMe />
          </section>
        </div>
        <Footer />
      </div>
    </MainLayout>
  )
}

export default App