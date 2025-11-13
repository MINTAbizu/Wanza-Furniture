import React from 'react'
import Header from './Componet/header/Header'
import Home from './Componet/home/Home'
import Timelessproduct from './Componet/Timeless/Timelessproduct'
import Products from './Componet/Products/Products'
import About from './Componet/About/About'
import Project from './Componet/Projects/Project'
import UserDesign from './Componet/UserDesign/UserDesign'
import Guidance from './Componet/Guiddance/Guidance'
import Footer from './Componet/footer/Footer'
import AutoScrollLogos from './Componet/AutoScrollLogos/AutoScrollLogos'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'bootstrap-icons/font/bootstrap-icons.css'
function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <AutoScrollLogos/>
      <Timelessproduct/>
      <Products/>
      <About/>
      <Project/>
      <UserDesign/>
      <Guidance/>
      <Footer/>
      
    </div>
  )
}

export default App
