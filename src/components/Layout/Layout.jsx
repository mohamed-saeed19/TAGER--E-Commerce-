// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
  <Navbar/>
  <Outlet/>
  
  </>
}
