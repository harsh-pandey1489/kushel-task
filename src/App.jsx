import { useState } from 'react'

import './App.css'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import Award from './component/Award'
import WebsiteSlider from './slider-component/WebsiteSlider'
import Websites from './slider-component/BigCommerceSlider'
import BigCommerceSlider from './slider-component/BigCommerceSlider'
import ParentSlider from './slider-component/ParentSlider'
import ChooseUs from './pages/ChooseUs'
import EcommerceBrand from './pages/EcommerceBrand'
import Experience from './component/Experience'
import LetConnect from './component/LetConnect'
import Services from './pages/Services'
import GetStartedNow from './component/GetStartedNow'
import Packages from './pages/Packages'
import Question from './pages/Question'
import Form from './pages/Form'

function App() {


  return (
    <>
  <Navbar/>
   {/* <div className="pt-[140px]"> */}
  <Hero/>
  <Award/>
  <ParentSlider/>
  <ChooseUs/>
  <Experience/>
  <EcommerceBrand/>
  <LetConnect/>
 <Services/>
 <GetStartedNow/>
 <Packages/>
 <Question/>
 <Form/>
 {/* </div> */}
    </>
  )
}

export default App
