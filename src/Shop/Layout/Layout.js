import React from 'react'
import './layout.css'
import { Link } from 'react-router-dom'
export default function Layout() {
  return (

    <div className='Layout'>
        <div className='Layout__content'>
            <div className='Layout__content-main'>
                <div className='Layout__content-main-header'>
                    <div className='Layout__content-main-header-logo'>
                        <img src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png' alt='logo' />
                        Logo
                        </div>
                    <div className='Layout__content-main-header-search'>
                        <input type='text' placeholder='Search' />
                        <button>Search</button>
                        </div>
                    <div className='Layout__content-main-header-cart'>
                        <img src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png' alt='cart' />
                        <span>Cart</span>
                        </div>
                        </div>
                <div className='Layout__content-main-nav'>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Pages</li>
                        <li>Elements</li>
                        <li>Contact</li>
                        </ul>
                        </div>
                <div className='Layout__content-main-slider'>
                    <div className='Layout__content-main-slider-left'>
                        <div className='Layout__content-main-slider-left-title'>
                            <h1>Men’s</h1>
                            <h1>Collection</h1>
                            </div>
                        <div className='Layout__content-main-slider-left-subtitle'>
                            <h3>50% OFF</h3>
                            <h3>FOR ALL PRODUCT</h3>
                            </div>
                        <div className='Layout__content-main-slider-left-button'>
                            <button>Shop Now</button>
                            </div>
                            </div>
                    <div className='Layout__content-main-slider-right'>
                        <img src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png' alt='slider' />
                        <img src='' alt='' width="846" height="27
                        0" />
                        {/* <video autoPlay loop muted playsInline poster={VideoPoster}> */}
                        {/* <source src={Video} type='video/mp4' /> */}
                        {/* </video> */}
                        </div>
                        </div>
                <div className='Layout__content-main-product'>
                    <div className='Layout__content-main-product-title'>
                        <h1>Featured Products</h1>
                        </div>
                    <div className='Layout__content-main-product-items'>
                        <div className='Layout__content-main-product-items-item'>
                            <div className='Layout__content-main-product-items-item-img'>
                                <img src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png' alt='product' />
                                <Link to='/singleProduct'><img
                                    src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
                                    alt='product' /></Link>
                                    </div>
                            <div className='Layout__content-main-product-items-item-title'>
                                <h3>Product Title</h3>
                                </div>
                            <div className='Layout__content-main-product-items-item-price'>
                                <h3>$99.00</h3>
                                </div>
                                <div className='Layout__content-main-product-items-item-btn'>
                                    <button>Add to Cart</button>
                                    </div>
                                    </div>
                        <div className='Layout__content-main-product-items-item'>
                                </div>
                        <div className='Layout__content-main-product-items-item'>
                            </div>
                        <div className='Layout__content-main-product-items-item'>
                            </div>
                        <div className='Layout__content-main-product-items-item'>
                            </div>
                        <div className='Layout__content-main-product-items-item'>
                            </div>
                        <div className='Layout__content-main-product-items-item'>
                            </div>
                        <div className='Layout__content-main-product-items-item'>
                            </div>
                        <div className='Layout__content-main-product-items-item'>
                            </div>
                        <div className='Layout__content-main-product-items-item'>
                    
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    

    </div>
  )
}
