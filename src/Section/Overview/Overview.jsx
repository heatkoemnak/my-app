import React from 'react'
import { VscOpenPreview } from "react-icons/vsc";
import { MdStar,MdOutlineStarHalf,MdGppGood } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaCubesStacked,FaCubes } from "react-icons/fa6";
import { BsFillEyeFill } from "react-icons/bs";

import "./overview.css";
export default function Overview() {
  return (
    <div className='overview'>
        <div className='card'>
            <div className='left'>
                <MdGppGood size='2rem' color='#4bd638' className='material-icon'/>
                <p>Quality</p>
            </div>
            <div className='right'>
                <h2>4.3</h2>
                <MdStar color='#b2e92f'/>
                <MdStar color='#b2e92f'/>
                <MdOutlineStarHalf color='#b2e92f'/>
                <h3>Ratting</h3>
            </div>
        </div>
        <div className='card'>
            <div className='left '>
                <HiUsers size='2.2rem'color='#4bd638' className='material-icon' />
                <p>Users</p>
            </div>
            <div className='right'>
                <AiFillPlusCircle size='1.5rem'color='#4bd638'/>
                <h2>254</h2>
                <h3>Total</h3>
            </div>
        </div>
        <div className='card'>
            <div className='left'>
                <FaCubesStacked  size='2.2rem' color='#4bd638' className='material-icon' />
                <p>Materials</p>
            </div>
            <div className='right'>
            <FaCubes size='1.5rem'color='#4bd638'/>
                <h2>1506</h2>
                <h3>Total</h3>
            </div>
        </div>
        <div className='card'>
            <div className='left'>
                <VscOpenPreview size='2rem' color='#4bd638' className='material-icon'/>
                <p>Viewer</p>
            </div>
            <div className='right'>
                <BsFillEyeFill size='1.5rem'color='#4bd638'/>
                <h2>2401</h2>
                <h3>Total</h3>
            </div>
        </div>

    </div>
  )
}
