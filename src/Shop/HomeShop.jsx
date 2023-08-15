import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import Footer from './Footer'
export default function HomeShop() {
  return (
    <>
    <Header/>
    <div className="middle-content">
      <Sidebar/>
      <Main/>
    </div>
    
    <Footer/>
    </>
  )
}
