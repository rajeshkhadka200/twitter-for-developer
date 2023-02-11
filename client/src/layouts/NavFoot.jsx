import React from 'react'
import { Outlet } from '@pankod/refine-react-router-v6'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"


const NavFoot = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default NavFoot