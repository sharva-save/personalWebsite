import React from 'react'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowCaseSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeactureCards from './sections/fEACTUREcARDS.JSX'
import Experince from './sections/Experince'

import TechStack from './sections/TechStack'
import Testimonials  from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowCaseSection/>
    {/* <LogoSection/> */}
    <FeactureCards/>
    <Experince/>
    <TechStack/>
    {/* <Testimonials/> */}
    <Contact/>
   <Footer/>
    </>
  )
}

export default App
