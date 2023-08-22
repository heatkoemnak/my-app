import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import MainPage from './MainPage'

export default function HomeShop() {
  return (
    <>
    <Header/>
    {/* <Sidebar/> */}
    {/* <Main/> */}
    
    <div className="middle-content">
      <Sidebar/>
      <MainPage/>
    </div>
    
    <Footer/>
    </>
  )
}
