'use client'
import CartShow from "@/components/elements/CartShow"
import WishListShow from "@/components/elements/WishListShow"
import Link from "next/link"
import { useState } from "react"
import HeaderMobSticky from "../HeaderMobSticky"
import HeaderSticky from "../HeaderSticky"
import HeaderTabSticky from "../HeaderTabSticky"


export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isCartSidebar, handleCartSidebar }) {
    const [isToggled, setToggled] = useState(true)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <header>
                <div className="header-top space-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* <div className="header-welcome-text text-start ">
                                    <span>Welcome to our international shop! Enjoy free shipping on orders $100  up.</span>
                                    <Link href="/shop">Shop Now <i className="fal fa-long-arrow-right" /> </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logo-area mt-30 d-none d-xl-block " >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-3">
                                <div className="logo">
                                    <Link href="/index-2"><img className="new-logo w-10" src="/assets/img/logo/khaas-logo.png" alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-9">
                                <div className="header-meta-info d-flex align-items-center justify-content-between">
                                    <div className="header-search-bar">
                                        <form action="#">
                                            <div className="search-info p-relative">
                                                <button className="header-search-icon"><i className="fal fa-search" /></button>
                                                <input type="text" placeholder="Search products..." />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="header-meta header-brand d-flex align-items-center">
                                        {/* <div className="header-meta__lang">
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <img src="/assets/img/icon/lang-flag.png" alt="flag" />English
                                                        <span><i className="fal fa-angle-down" /></span>
                                                    </Link>
                                                    <ul className="header-meta__lang-submenu">
                                                        <li>
                                                            <Link href="#">Arabic</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Spanish</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">Mandarin</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div> */}
                                        {/* <div className="header-meta__value mr-15">
                                            <select>
                                                <option>USD</option>
                                                <option>YEAN</option>
                                                <option>EURO</option>
                                            </select>
                                        </div> */}
                                        <div className="header-meta__social d-flex align-items-center ml-25">
                                            <button className="header-cart p-relative tp-cart-toggle" onClick={handleCartSidebar}>
                                                <i className="fal fa-shopping-cart" />
                                                <CartShow />
                                            </button>
                                            <Link href="/sign-in"><i className="fal fa-user" /></Link>
                                            <Link href="/wishlist" className="header-cart p-relative tp-cart-toggle">
                                                <i className="fal fa-heart" />
                                                <WishListShow />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-menu-area mt-20 d-none d-xl-block">
                    <div className="for-megamenu p-relative">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-3">
                                    <div className="cat-menu__category p-relative">
                                        <a className="tp-cat-toggle" onClick={handleToggle} role="button"><i className="fal fa-bars" />Categories</a>
                                        <div className="category-menu category-menu-off" style={{ display: `${isToggled ? "block" : "none"}` }}>
                                            <ul className="cat-menu__list">
                                                <li><Link href="/shop"><i className="fal fa-user" /> Candles</Link></li>
                                                <li className="menu-item-has-children"><Link href="/shop"><i className="fal fa-flower-tulip" /> Handmade</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/shop-2">Chikan-Kurti</Link></li>
                                                        <li><Link href="/shop-2">saree</Link></li>
                                                        <li><Link href="/shop">Wooden</Link></li>
                                                        <li><Link href="/shop">furniture</Link></li>
                                                        <li><Link href="/shop">Clock</Link></li>
                                                        <li><Link href="/shop">Gifts</Link></li>
                                                        <li><Link href="/shop">Crafts</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/shop"><i className="fal fa-shoe-prints" /> Men's</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-smile" /> Plastic Gifts</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-futbol" /> Handy Cream</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-crown" /> Cosmetics</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-gift" /> Silk Accessories</Link></li>
                                            </ul>
                                            <div className="daily-offer">
                                                <ul>
                                                    <li><Link href="/shop">Value of the Day</Link></li>
                                                    <li><Link href="/shop">Top 100 Offers</Link></li>
                                                    <li><Link href="/shop">New Arrivals</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                
                                                    <Link href="/index-2">HOME</Link>
                                                    {/* <ul className="submenu">
                                                        <li><Link href="/index-2">Wooden Home</Link></li>
                                                        <li><Link href="/index-2">Fashion Home</Link></li>
                                                        <li><Link href="/index-3">Furniture Home</Link></li>
                                                        <li><Link href="/index-4">Cosmetics Home</Link></li>
                                                        <li><Link href="/index-5">Food Grocery</Link></li>
                                                    </ul> */}
                                                
                                                <li className="has-dropdown">
                                                        <Link href="/shop">WOMEN'S </Link>
                                                        <ul className="submenu">
                                                            <li><Link href="/shop">CHIKAN-KURTI</Link></li>
                                                            <li><Link href="/shop-2">CHIKAN-KURTI-SET</Link></li>
                                                            <li><Link href="/shop-details">CHIKAN-SUITS </Link></li>
                                                            <li><Link href="/shop-details-2">SAREE ( CHIKAN )</Link></li>
                                                            <li><Link href="/shop-location">CHIKAN BOTTOM WEAR</Link></li>
                                                            <li><Link href="/cart">CHIKAN DUPATTA</Link></li>
                                                           
                                                            <li><Link href="/checkout">CHIKAN ANARKALI</Link></li>
                                                            <li><Link href="/wishlist">CHIKANKARI WITH APPLIQUE WORK</Link></li>
                                                            <li><Link href="/track">CHIKANKARI WITH MUKESH WORK</Link></li> 
                                                        </ul>
                                                    </li>
                                                       <li className="has-dropdown">
                                                        <Link href="/shop">MEN'S </Link>
                                                        <ul className="submenu">
                                                            <li><Link href="/shop">CHIKAN-KURTA</Link></li>
                                                            <li><Link href="/shop-2">SHERWANI</Link></li>
                                                            <li><Link href="/shop-details">KURTA-PAYJAMA </Link></li>
                                                            <li><Link href="/shop-details-2">CHIKAN SHAWL ( MEN )</Link></li>
                                                            {/* <li><Link href="/shop-location">Shop Location</Link></li>
                                                            <li><Link href="/cart">Cart</Link></li>
                                                            <li><Link href="/sign-in">Sign In</Link></li>
                                                            <li><Link href="/checkout">Checkout</Link></li>
                                                            <li><Link href="/wishlist">Wishlist</Link></li>
                                                            <li><Link href="/track">Product Track</Link></li> */}
                                                        </ul>
                                                    </li>
                                                <li className="has-dropdown">
                                                    <Link href="/blog">Blog</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/blog">Blog</Link></li>
                                                        <li><Link href="/blog-details">Blog Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/contact">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3">
                                    <div className="menu-contact">
                                        <ul>
                                            <li>
                                                <div className="menu-contact__item">
                                                    <div className="menu-contact__icon">
                                                        <i className="fal fa-phone" />
                                                    </div>
                                                    <div className="menu-contact__info">
                                                        <Link href="/tel:0123456">908. 408. 501. 89</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-contact__item">
                                                    <div className="menu-contact__icon">
                                                        <i className="fal fa-map-marker-alt" />
                                                    </div>
                                                    <div className="menu-contact__info">
                                                        <Link href="/shop-location">Find Store</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <HeaderSticky scroll={scroll} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderTabSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderMobSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
        </>
    )
}
