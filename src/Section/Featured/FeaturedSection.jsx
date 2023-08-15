import React from 'react'
import { RxDoubleArrowDown } from "react-icons/rx";
import {Title} from '../About/AboutSection'
import './featured.css';

import { Button } from '../About/AboutSection';
export default function FeaturedSection() {

  return (
    <>
        <div className='Wrapper'>
            <Title>
                <h2>Our Features</h2>
                <RxDoubleArrowDown size='2rem' className='ArrowDownIcon'/>
            </Title>
            <img src='https://www.danofficeit.com/media/3330/topbanner.png' alt=''/>
            <div className='features'>
                <div className='feature'>
                    <div className='text'>
                        <img src='https://cdn0.iconfinder.com/data/icons/scenicons-e-commerce-flat-icons/512/Ecommerce_Set-20-512.png'alt=''width={150} />
                        <div className='wrap'>
                            <span className='span-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            <Button>How To Sell</Button>
                        </div>
                    </div>
                    <h3>SELL</h3>
                </div>
                <div className='feature'>
                    <div className='text'>
                        <img src="https://cdn3.iconfinder.com/data/icons/flat-rounded-4/50/327-512.png" alt="" width={150}/>
                        <div className='wrap'>
                            <span className='span-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            <Button>How To Buy</Button>
                        </div>
                    </div>
                    <h3>BUY</h3>
                </div>
                <div className='feature'>
                    <div className='text'>
                        <img src="https://cdn2.iconfinder.com/data/icons/free-version/128/recycling-512.png" alt="" width={150} />
                        <div className='wrap'>
                            <span className='span-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            <Button>How To Recycle</Button>
                        </div>
                    </div>
                    <h3>RECYCLE</h3>
                </div>
            </div>
        </div>
    </>
  )
}
