import React from 'react'
import Products from './Products/Products'
import Home from './home/Home'
import AutoScrollLogos from './AutoScrollLogos/AutoScrollLogos'
import Timelessproduct from './Timeless/Timelessproduct'
import About from './About/About'
import Project from './Projects/Project'
import UserDesign from './UserDesign/UserDesign'
import Guidance from './Guiddance/Guidance'

function Landpage() {
  return (
    <div>
        <Home/>
        <AutoScrollLogos />
        <Timelessproduct />
      <Products/>
      <About />
      <Project />
      <UserDesign />
      <Guidance />
    </div>
  )
}

export default Landpage
