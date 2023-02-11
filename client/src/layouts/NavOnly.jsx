import React from 'react'
import { Outlet } from '@pankod/refine-react-router-v6'
import Navbar from '../components/Navbar'

const NavOnly = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default NavOnly