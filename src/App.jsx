import React from 'react'
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Wrapper from './components/Wrapper/Wrapper'

const App = () => {
  return (
    <>
      <Card/>
      <About/>
      <Footer/>
      <Header/>
      <Hero/>
      <Wrapper/>
    </>
  )
}

export default App