import React, { useEffect, useState } from 'react'
import  "./css/topstore.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
function Navbar() {

  const backendUrl = process.env.REACT_APP_BHARANI_BACKEND_URL;
  const [list,setList]=useState([])
  const [Cart, setCart] = useState([]);
  

  useEffect(()=>{
    
    
    
    const fetchData =async()=>{
      
      try{
        const response = await axios.get(`${backendUrl}/users/getSliderfront`)
        await setList(response.data)
      }catch(err){
        console.log(err)
      }
      
    }
    
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(cartItems)
    fetchData()
  
  },[])

  const mobilemenu =()=>{
      const menu = document.getElementById('menu-toggle')
      menu.classList.add('active')
  }
  const closemenu =()=>{
      const menu = document.getElementById('menu-toggle')
      menu.classList.remove('active')
  }
  return (
    <div>
    <section className="top-notification-bar">
      {/* <div className="offer-text-wrap">
        <ul>
          {list.map((item,index)=>(

          <li className="text1" key={index}>
            <div className="offer-text-block" >
              <p>{item.text}</p>
            </div>
          </li>
          ))}
            
              {list.map((item,index)=>(

  <li className="text2" key={index}>
    <div className="offer-text-block" >
      <p>{item.text}</p>
    </div>
  </li>
  ))}
           
        </ul>
      </div> */}
      <div className='slidd'>
      <ul className='mytext'>
        {list.map((item,index)=>(
          <div key={index}>
          <li style={{width:"auto"}}>*{item.text}*</li>
            </div>
        ))}
        
      
        
      </ul>
      </div>
      <div className="side-wrap search-bar-wrap">
        <div className="search-rap">
          <a className="search-crap" data-toggle="collapse" href="#search-crap">
            <i className="feather-search" />
          </a>
         
        </div>
      </div>
    </section>

          
        
      {/* search-popup end */}

<header className="header-area">
<div className="header-main-area">
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <div className="header-main">
          {/* header megamenu start */}
          <div className="header-element megamenu-content">
            <a href="#main-collapse" className="browse-cat" data-bs-toggle="collapse" aria-expanded="true">
              <span className="menu-icon"><i className="feather-menu" /></span>
              <span className="menu-title">Menu</span>
              <span className="menu-arrow"><i className="feather-chevron-down" /></span>
            </a>
            <div className="mainwrap collapse show" id="main-collapse">
              <ul className="main-menu">
               <li className="menu-link">
               <Link to='/'>   <a  className="link-title">
                    <span className="sp-link-title">Home</span>
                  </a></Link>
                </li>
                <li className="menu-link">
                 <Link to="/userproduct"> <a  className="link-title">
                    <span className="sp-link-title">Product
                      <span className="label">sale</span>
                    </span>
                    <span className="menu-arrow"><i className="feather-chevron-down" /></span>
                  </a></Link>
                 
                  
                </li>
                <li className="menu-link">
                  <Link to='/checkout'><a className="link-title">
                    <span className="sp-link-title">Checkout</span>
                    <span className="menu-arrow"><i className="feather-chevron-down" /></span>
                  </a></Link>
                 
                  
                </li>
              
                <li className="menu-link">
                  <a href="about-us.html" className="link-title">
                    <span className="sp-link-title">Pages</span>
                    <span className="menu-arrow"><i className="feather-chevron-down" /></span>
                  </a>
                  <a href="#desk-pages" className="link-title link-title-lg" data-bs-toggle="collapse">
                    <span className="sp-link-title">Pages</span>
                    <span className="menu-arrow"><i className="feather-chevron-down" /></span>
                  </a>
                  <div className="menu-dropdown sub-menu collapse" id="desk-pages">
                    <ul className="container p-0 ul">
                     
                     
                      <li className="submenu-li">
                      <Link to='/contact'>  <a  className="sublink-title">
                          <span className="sp-link-title">Contact us</span>
                          <span className="menu-arrow"><i className="feather-chevron-right" /></span>
                        </a></Link>  
                    <a  className="sublink-title sublink-title-lg" data-bs-toggle="collapse">
                          <span className="sp-link-title">Contact us</span>
                          <span className="menu-arrow"><i className="feather-chevron-right" /></span>
                        </a>
                      
                      </li>
                  
                      
                      <li className="submenu-li">
                      <Link to='/privacy-policy'>    <a  className="sublink-title">
                          <span className="sp-link-title">Privacy policy</span>
                        </a></Link>
                          <a  className="sublink-title sublink-title-lg">
                          <span className="sp-link-title">Privacy policy</span>
                        </a>
                      </li>
                      <li className="submenu-li">
                        <a href="payment-policy.html" className="sublink-title">
                          <span className="sp-link-title">Payment policy</span>
                        </a>
                        <a href="payment-policy.html" className="sublink-title sublink-title-lg">
                          <span className="sp-link-title">Payment policy</span>
                        </a>
                      </li>
                      <li className="submenu-li">
                        <a href="terms-condition.html" className="sublink-title">
                          <span className="sp-link-title">Terms &amp; condition</span>
                        </a>
                        <a href="terms-condition.html" className="sublink-title sublink-title-lg">
                          <span className="sp-link-title">Terms &amp; condition</span>
                        </a>
                      </li>
                     
                   
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mobile-menu" id="menu-toggle">
        <div className="main-menu-area">
          {/* box-header start */}
          <div className="box-header">
            <button className="close-menu" type="button" onClick={closemenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.4em"
              height="1.4em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
              />
            </svg>
            </button>
          </div>
          {/* box-header end */}
          <div className="megamenu-content">
            <a
              href="#resp-main"
              className="browse-cat"
              data-bs-toggle="collapse"
              aria-expanded="true"
            >
              <span className="line" />
              <span className="menu-title">Menu</span>
              <span className="menu-arrow">
                <i className="feather-chevron-down" />
              </span>
            </a>
            <div className="mainwrap collapse show" id="resp-main">
              <ul className="main-menu">
                <li className="menu-link">
               
                 <a href="index.html" className="link-title">
                    <span className="sp-link-title">Home</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a>
               
                 <Link to='/'>  <a
                 
                    data-bs-toggle="collapse"
                    className="link-title link-title-lg"
                  >
                    <span className="sp-link-title">Home</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a>  </Link> 
                
                </li>
                <li className="menu-link">
                  <a href="collection.html" className="link-title">
                    <span className="sp-link-title">Product</span>
                   
                  </a>
                <Link to='/userproduct'>
                <a
                    href="#resp-single-product"
                    data-bs-toggle="collapse"
                    className="link-title link-title-lg"
                  >
                    <span className="sp-link-title">Product</span>
                  
                  </a>
                  </Link> 
                
                </li>
                <li className="menu-link">
                  <a href="collection.html" className="link-title">
                    <span className="sp-link-title">Checkout</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a>
                
                  <Link to='/checkout'>  <a
               
               className="link-title link-title-lg"
               data-bs-toggle="collapse"
             >  <span className="sp-link-title">Checkout</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a></Link>
                
                </li>
                <li className="menu-link">
                  <a href="collection.html" className="link-title">
                    <span className="sp-link-title">My Cart</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a>
                
                  <Link to='/cart'>  <a
               
               className="link-title link-title-lg"
               data-bs-toggle="collapse"
             >  <span className="sp-link-title">My Cart</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a></Link>
                
                </li>
                <li className="menu-link">
                  <a href="blog-grid.html" className="link-title">
                    <span className="sp-link-title">Track Order</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a>

                  <a
                    href="#resp-single-blog"
                    data-bs-toggle="collapse"
                    className="link-title link-title-lg"
                  >
                    <span className="sp-link-title">Track Order</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a>
                  
                </li>
                <li className="menu-link">
                  <a href="blog-grid.html" className="link-title">
                    <span className="sp-link-title">Pricay Policy</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a>

                <Link to='/privacy-policy'> <a
                   
                    data-bs-toggle="collapse"
                    className="link-title link-title-lg"
                  >
                    <span className="sp-link-title">Privacy Policy</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a></Link> 
                  
                </li>
                <li className="menu-link">
                  <a href="blog-grid.html" className="link-title">
                    <span className="sp-link-title">Payment Policy</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a>

                  <a
                    href="#resp-single-blog"
                    data-bs-toggle="collapse"
                    className="link-title link-title-lg"
                  >
                    <span className="sp-link-title">Payment Policy</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a>
                  
                </li>
                <li className="menu-link">
                  <a href="blog-grid.html" className="link-title">
                    <span className="sp-link-title">Terms &amp; condition</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a>

                  <a
                    href="#resp-single-blog"
                    data-bs-toggle="collapse"
                    className="link-title link-title-lg"
                  >
                    <span className="sp-link-title">Terms &amp; condition</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a>
                  
                </li>
                <li className="menu-link">
                  <a href="blog-grid.html" className="link-title">
                    <span className="sp-link-title">Contact Us</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a>

               <Link to='/contact'><a
                    href="#resp-single-blog"
                    data-bs-toggle="collapse"
                    className="link-title link-title-lg"
                  >
                    <span className="sp-link-title">Contact Us</span>
                    <span className="menu-arrow">
                      <i className="feather-chevron-down" />
                    </span>
                  </a></Link>   
                  
                </li>
                
                <li className="menu-link">
                  <a  className="link-title">
                    <span className="sp-link-title">Pages</span>
                    <span className="menu-arrow">
                     <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </a>
                  <a
                    href="#resp-pages"
                    className="link-title link-title-lg"
                    data-toggle="collapse"
                  >
                    <span className="sp-link-title">Follow Us</span>
                    <span className="menu-arrow">
                    <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </a>
                  <div className="menu-dropdown sub-menu collapse" id="resp-pages">
                    <ul className="container p-0 ul">
                      <li className="submenu-li">
                        <a href="about-us.html" className="sublink-title">
                          <span className="sp-link-title">Instagram</span>
                          <span className="menu-arrow">
                            <i className="feather-chevron-right" />
                          </span>
                        </a>
                     <a
                        href='https://www.instagram.com/bharani.foods/?next=%2F&hl=en'
                          className="sublink-title sublink-title-lg"
                          data-bs-toggle="collapse"
                        >
                        <span className="sp-link-title">Instagram</span>
                          <span className="menu-arrow">
                            <i className="feather-chevron-right" />
                          </span>
                        </a>
                       
                      </li>
                      <li className="submenu-li">
                        <a href="my-account.html" className="sublink-title">
                          <span className="sp-link-title">X</span>
                         
                        </a>
                        <a
                          href="#resp-account"
                          className="sublink-title sublink-title-lg"
                          data-bs-toggle="collapse"
                        >
                          <span className="sp-link-title">X</span>
                          
                        </a>
                      
                      </li>
                      <li className="submenu-li">
                        <a href="contact-us.html" className="sublink-title">
                          <span className="sp-link-title">Facebook</span>
                          <span className="menu-arrow">
                            <i className="feather-chevron-right" />
                          </span>
                        </a>
                        <a
                          href="#resp-contact-us"
                          className="sublink-title sublink-title-lg"
                          data-bs-toggle="collapse"
                        >
                          <span className="sp-link-title">Facebook</span>
                          
                        </a>
                     
                      </li>
                 
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* mega-menu end */}
        </div>
      </div>
          {/* header megamenu end */}
          {/* header logo start */}
          <div className="header-element logo">
            <a href="index.html" className="theme-header-logo">
              <p>Bhaarani</p>
            </a>
          </div>
          {/* header logo end */}
          {/* right-block-box start*/}
          <div className="header-element right-block-box" onClick={mobilemenu}>
            <ul className="shop-element">
              <li className="side-wrap toggle-wrap">
                {/* button toggler start */}
                <button className="toggler-button"><span className="line" /></button>
                {/* button toggler end */}
              </li>
              <li className="side-wrap search-wrap">
                <a href="#seachmodal" className="search-popup" data-bs-toggle="modal">
                  <i className="feather-search" />
                </a>
              </li>
              <li className="side-wrap user-wrap">
                <div className="acc-desk-header">
                  <div className="acc-title">
                    <a href="login-account.html" className="acc-ti">
                      <span className="user-icon"> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.4em"
                    height="1.4em"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <g fill="none" stroke="black">
                      <rect width="14" height="17" x="5" y="4" rx="2" />
                      <path d="M9 9h6m-6 4h6m-6 4h4" />
                    </g>
                  </svg></span>
                      <div className="icon-heading">
                        <h6 className="sub-heading">Track Order</h6>
                        
                      </div>
                    </a>
                  </div>
                  <div className="acc-title-lg">
                    <a href="login-account.html"><i className="feather-user" /></a>
                  </div>
                </div>
              </li>
            
              <li className="side-wrap cart-wrap">
                <div className="shopping-widget">
                  <div className="shopping-cart">
                    <a  className="cart-count">
                      <span className="cart-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11q-.425 0-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11q-.425 0-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4q-.825 0-1.412.588T10 6M6 20V8z"/></svg>
                        <span className="bigcounter"></span>
                      </span>
                      <Link to='/cart'>  <div className="icon-heading">
                        <h6 className="cart-title">My cart</h6>
                    <span>(<span className="bigcounter">{Cart.length}</span> item)</span>
                      </div></Link>  
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* right-block-box end*/}
        </div>
      </div>
    </div>
  </div>
</div>
</header>
</div>
  )
}

export default Navbar