import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from "react";


export default function HomeSection() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((menu) => !menu);
  };
  return (
    <>
    <Navbar handleMenu={handleMenu}></Navbar>
    </>
  )
}
