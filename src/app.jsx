import React from 'react'
import Header from './componets/header/header'
import Nav from './componets/nav/nav'
import About from './componets/about/about'
import Experince from './componets/experince/experince'
import Contact from './componets/contact/contact'
import Footer from './componets/footer/footer'


const app = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experince/>

      <Contact/>
      <Footer/>
      
    </>
  )
}

export default app