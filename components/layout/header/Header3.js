'use client'
import CartShow from "@/components/elements/CartShow"
import WishListShow from "@/components/elements/WishListShow"
import Link from "next/link"
import { useState } from "react"
import HeaderMobSticky from "../HeaderMobSticky"
import HeaderSticky from "../HeaderSticky"
import HeaderTabSticky from "../HeaderTabSticky"

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isCartSidebar, handleCartSidebar }) {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <header>
                <div className="header-top tertiary-header-top space-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-12 col-md-12 ">
                                <div className="header-welcome-text">
                                    <span>Welcome to our international shop! Enjoy free shipping on orders $100  up.</span>
                                    <Link href="#">Shop Now<i className="fal fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-5 d-none d-xl-block">
                                <div className="headertoplag d-flex align-items-center justify-content-end">
                                    <div className="headertoplag__lang">
                                        <ul>
                                            <li>
                                                <Link href="#"><i className="fal fa-user" /> Account</Link>
                                                <Link className="order-tick" href="/track"><i className="fal fa-plane-departure" />Track Your Order</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="menu-top-social">
                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                        <Link href="#"><i className="fab fa-behance" /></Link>
                                        <Link href="#"><i className="fab fa-youtube" /></Link>
                                        <Link href="#"><i className="fab fa-linkedin" /></Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logo-area green-logo-area mt-30 d-none d-xl-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-3">
                                <div className="logo">
                                    <Link href="/"><img className="logo-st" src="/assets/img/logo/khaas-logo.png" alt="logo" /></Link>
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
                                        <div className="header-meta__lang">
                                            <ul>
                                                {/* <li>
                                                    <Link href="#">
                                                        <img src="/assets/img/icon/lang-flag.png" alt="flag" />
                                                        English
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
                                                </li> */}
                                            </ul>
                                        </div>
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
                <div className="main-menu-area tertiary-main-menu mt-25 d-none d-xl-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-3">
                                <div className="cat-menu__category p-relative">
                                    <a onClick={handleToggle} href="#"><i className="fal fa-bars" />Categories</a>
                                    <div className="category-menu" style={{ display: `${isToggled ? "block" : "none"}` }}>
                                        <ul className="cat-menu__list">
                                            <li><Link href="/shop-2"><i className="fal fa-chair" /> CHIKAN SUITS </Link></li>
                                            <li className="menu-item-has-children"><Link href="/shop"><i className="far fa-campfire" />
                                                WOMEN'S </Link>
                                                <ul className="submenu">
                                                    <li><Link href="/shop-2">Chikan Suits</Link></li>
                                                    <li><Link href="/shop-2">KURTI</Link></li>
                                                    <li><Link href="/shop">SAREE</Link></li>
                                                    <li><Link href="/shop"></Link></li>
                                                    <li><Link href="/shop">Clock</Link></li>
                                                    <li><Link href="/shop">Gifts</Link></li>
                                                    <li><Link href="/shop">Crafts</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/shop-2"><i className="fal fa-shoe-prints" />Accessories</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-tshirt" />Fashion</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-clock" />Clocks</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-light-ceiling" />Lighting</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-gift" />Toys</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-basketball-ball" />Hand Made</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-gift" />Minimalism</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-lightbulb-dollar" />Electronics</Link></li>
                                            <li><Link href="/shop-2"><i className="fal fa-car-alt" />Cars</Link></li>
                                        </ul>
                                        <div className="coupon-offer d-flex align-items-center justify-content-between">
                                            <span>Coupon: <Link href="/shop">Offers50</Link></span>
                                            <Link href="#"> <i className="fal fa-copy" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="has-dropdown">
                                                <Link href="/index-2">HOME</Link>
                                               
                                            </li>
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
                                         
                                            {/* <li className="has-dropdown">
                                                <Link href="/blog">Blog</Link>
                                                <ul className="submenu">
                                                    <li><Link href="/blog">Blog</Link></li>
                                                    <li><Link href="/blog-details">Blog Details</Link></li>
                                                </ul>
                                            </li> */}
                                            <li><Link href="/contact">CONTACT</Link></li>
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
                                                    <Link href="/tel:+019650110020">9650-110-020</Link>
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
            </header>

            <HeaderSticky scroll={scroll} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderTabSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderMobSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
        </>
    )
}
