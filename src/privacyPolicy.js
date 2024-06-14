import React, { useEffect, useState } from 'react'
import Navbar from "./navbar";
import policyimg from './images/Privacy-policy.jpg'
import Ptym from './images/Paytm_logo.png'
import './css/other-page.css'
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
    const [Cart, setCart] = useState([]);

    useEffect(()=>{
        const topElement = document.getElementById('top');

        window.addEventListener('scroll', () => {
          
          if (window.scrollY > 0) {
            
            topElement.classList.add('show');
          } else {
           
            topElement.classList.remove('show');
          }
        });

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(cartItems)

    },[])

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Add smooth scrolling behavior
        });
      };
  return (
    <div>
        <Navbar />
  <main>
    {/* breadcrumb start */}
    <section className="breadcrumb-area">
      <div className="container">
        <div className="col">
          <div className="row">
            <div className="breadcrumb-index">
              {/* breadcrumb main-title start*/}
              <div className="breadcrumb-title">
                <h2>Privacy policy</h2>
              </div>
              {/* breadcrumb main-title end*/}
              {/* breadcrumb-list start */}
              <ul className="breadcrumb-list">
                <li className="breadcrumb-item-link">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item-link">
                  <span>Privacy policy</span>
                </li>
              </ul>
              {/* breadcrumb-list end */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* breadcrumb end */}
    {/* other page start */}
    <section className="section-ptb privacy-policy">
      <div className="container">
        <div className="row">
          <div className="col">
            {/* faq title start */}
            <div className="section-capture">
              <div className="section-title">
                <span className="sub-title">Our</span>
                <h2><span>Privacy policy</span></h2>
              </div>
            </div>
            {/* faq title end */}
            {/* policy content start */}
            <div className="privacy-banner">
              <div className="banner-wrap">
              <div className="banner-bgimg" style={{backgroundImage: `url(${policyimg})`}} />
                <div className="banner-img">
                  <img src="img/about-us/Privacy-policy.jpg" className="img-fluid" alt="Privacy-policy" />
                </div>
              </div>
              <div className="privacy-wrap">
                <ul>
                  <li><p>We will not use or share your information with anyone except as described in this Privacy Policy.</p></li>
                  <li><p>We wont use your contact details for any other purpose.</p></li>
                  <li><p>We will save your data for informing the update of product and service</p></li>
                  <li><p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you  Personal Data.
                     Personally identifiable information may include, but is not limited to: Name,Email Address,Phone NumberAddress, State, Province, ZIP/Postal code, City</p></li>
                 
                </ul>
              </div>
            </div>
            {/* policy content end */}
          </div>
        </div>
      </div>
    </section>
    {/* other page end */}
    {/* pay policy start */}
    <section className="section-ptb pay-policy">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="paymen-policy-wrap">
              <div className="pay-wrap">
                <ul>
                  <li>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 16 16"><g fill="black"><path d="M5.338 1.59a61 61 0 0 0-2.837.856a.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453a7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625a11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43A63 63 0 0 1 5.072.56"/><path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/></g></svg></span>
                    <h6>Secure payment</h6>
                  </li>
                  <li>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 16 16"><path fill="black" d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/></svg></span>
                    <h6>Money back</h6>
                  </li>
                  <li>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 16 16"><g fill="black"><path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/><path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12l.708-.708l12 12z"/></g></svg></span>
                    <h6>Hidden cost</h6>
                  </li>
                  <li>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 16 16"><g fill="black"><path d="M12.5 16a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m1.679-4.493l-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548l1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/><path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/></g></svg></span>
                    <h6>Customer support</h6>
                  </li>
                  <li>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 16 16"><path fill="black"  d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/></svg></span>
                    <h6>Market purpose</h6>
                  </li>
                </ul>
              </div>
              <div className="pay-text">
                <h6>Liability</h6>
                <ul>
                  <li>
                    <p>Our company is not liable for any unauthorized use or access to personal information shared by users on our website.</p>
                  </li>
                  <li>
                    <p>We are not liable for any damages or losses arising from the use of our website or the information provided on it.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* pay policy end */}
    {/* payment section start */}
    <section className="section-ptb payment-method">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-capture">
              <div className="section-title">
                <span className="sub-title">We followed use</span>
                <h2><span>Popular methods</span></h2>
              </div>
            </div>
            <div className="method-wrap">
              <ul>
                <li>
               
                  <svg className="img-fluid" alt="pay-1" xmlns="http://www.w3.org/2000/svg" width="3.52em" height="1.4em" viewBox="0 0 512 204"><path fill="#5f6368" d="M362.927 55.057c14.075 0 24.952 3.839 33.27 11.517c8.317 7.677 12.155 17.914 12.155 30.71v61.42h-17.914V144.63h-.64c-7.677 11.517-18.554 17.275-31.35 17.275c-10.877 0-20.474-3.2-28.151-9.597c-7.038-6.398-11.517-15.355-11.517-24.952c0-10.237 3.84-18.555 11.517-24.953s18.554-8.957 31.35-8.957c11.516 0 20.474 1.92 27.511 6.398v-4.478c0-5.972-2.229-11.943-6.688-15.834l-.99-.801c-5.118-4.479-11.516-7.038-18.553-7.038c-10.877 0-19.194 4.479-24.953 13.436L321.34 74.89c10.236-13.436 23.672-19.834 41.587-19.834M272.715 11.55c11.48 0 22.39 3.995 31.113 11.445l1.517 1.35c8.957 7.678 13.435 19.195 13.435 31.351c0 12.156-4.478 23.033-13.435 31.35c-8.958 8.318-19.834 12.796-32.63 12.796l-30.71-.64v59.502H222.81V11.55zm92.77 97.25c-7.677 0-14.075 1.919-19.193 5.758c-5.119 3.199-7.678 7.677-7.678 13.435c0 5.119 2.56 9.597 6.398 12.157c4.479 3.199 9.597 5.118 14.716 5.118c7.165 0 14.331-2.787 19.936-7.84l1.177-1.117c6.398-5.758 9.597-12.796 9.597-20.474c-5.758-4.478-14.076-7.038-24.952-7.038m-91.49-79.336h-31.99V80.65h31.99c7.037 0 14.075-2.559 18.554-7.677c10.236-9.597 10.236-25.592.64-35.19l-.64-.64c-5.119-5.118-11.517-8.317-18.555-7.677M512 58.256l-63.34 145.235h-19.194l23.672-50.544l-41.587-94.051h20.474l30.07 72.297h.64l29.431-72.297H512z"/><path fill="#4285f4" d="M165.868 86.407c0-5.758-.64-11.516-1.28-17.274H84.615v32.63h45.425c-1.919 10.236-7.677 19.833-16.634 25.592v21.113h27.511c15.995-14.715 24.952-36.469 24.952-62.06"/><path fill="#34a853" d="M84.614 168.942c23.032 0 42.226-7.678 56.302-20.474l-27.511-21.113c-7.678 5.118-17.275 8.317-28.791 8.317c-21.754 0-40.948-14.715-47.346-35.189H9.118v21.753c14.715 28.791 43.506 46.706 75.496 46.706"/><path fill="#fbbc04" d="M37.268 100.483c-3.838-10.237-3.838-21.753 0-32.63V46.1H9.118c-12.157 23.673-12.157 51.824 0 76.136z"/><path fill="#ea4335" d="M84.614 33.304c12.156 0 23.672 4.479 32.63 12.796l24.312-24.312C126.2 7.712 105.727-.605 85.253.034c-31.99 0-61.42 17.915-75.496 46.706l28.151 21.753c5.758-20.474 24.952-35.189 46.706-35.189"/></svg>
                  <h6>Google Pay</h6>
                  <p>We followed GooglePay for payments</p>
                </li>
                <li>
                <svg className="img-fluid" alt="pay-2" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="#6a03bf" d="M10.206 9.941h2.949v4.692c-.402.201-.938.268-1.34.268c-1.072 0-1.609-.536-1.609-1.743zm13.47 4.816c-1.523 6.449-7.985 10.442-14.433 8.919C2.794 22.154-1.199 15.691.324 9.243C1.847 2.794 8.309-1.199 14.757.324c6.449 1.523 10.442 7.985 8.919 14.433m-6.231-5.888a.887.887 0 0 0-.871-.871h-1.609l-3.686-4.222c-.335-.402-.871-.536-1.407-.402l-1.274.401c-.201.067-.268.335-.134.469l4.021 3.82H6.386c-.201 0-.335.134-.335.335v.67c0 .469.402.871.871.871h.938v3.217c0 2.413 1.273 3.82 3.418 3.82c.67 0 1.206-.067 1.877-.335v2.145c0 .603.469 1.072 1.072 1.072h.938a.432.432 0 0 0 .402-.402V9.874h1.542c.201 0 .335-.134.335-.335z"/></svg>
                 
                  <h6>Phone pe</h6>
                  <p>We followed Phonepe for payments</p>
                </li>
                <li>
                 <img src={Ptym} className="img-fluid pty" alt="pay-3" />
                 
                  
                  <h6>Patym</h6>
                  <p>We followed Patym for payments</p>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* payment section end */}
  </main>
  {/* main section end*/}
  <div className="notification-bottom">
        <ul className="shop-element-menu navigation-menu">
          <li className="side-wrap home-wrap">
            <div className="home-wrapper">
            <Link to='/'><a className="home-modal">
                <span className="home-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.4em"
                    height="1.4em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="black"
                      d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75"
                    />
                  </svg>
                </span>
                <span className="header-title">Home</span>
              </a></Link> 
            </div>
          </li>
          <li className="side-wrap search-wrap">
            <div className="search-wrapper">
           <Link to='/userproduct'>
           <a  className="search-modal">
                <span className="search-icon">
                 <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="black" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"/></svg>
                </span>
                <span className="header-title">Product</span>
              </a></Link>  
            </div>
          </li>
          
          <li className="side-wrap cart-wrap">
            <div className="cart-wrapper">
              <div className="cart-det">
              <Link to='/cart'>       <a className="add-to-cart cart-count shopping-cart js-cart-drawer">
                  <span className="cart-icon" >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.4em"
                      height="1.4em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="black"
                        d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11q-.425 0-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11q-.425 0-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4q-.825 0-1.412.588T10 6M6 20V8z"
                      />
                    </svg>
                  </span>
                  <span className="cart-counter">{Cart.length}</span>
                  <span className="header-title">Cart</span>
                </a></Link>
              </div>
            </div>
          </li>
          <li className="side-wrap user-wrap">
            <div className="user-wrapper">
              <a href="login-account.html" className="user-login">
                <span className="user-icon">
                  <svg
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
                  </svg>
                </span>
                <span className="header-title">Orders</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
  <footer>
    <div className="footer-top-area section-ptb">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="footer-list-wrap">
              <ul className="footer-list">
                <li className="ftlink-li footer-company-detail">
                  <div className="footer-logo">
                    <a href="index.html" className="theme-footer-logo">
                      <img src="img/logo/logo.png" className="img-fluid" alt="logo" />
                    </a>
                  </div>
                  <div className="footer-details">
                    <p>Lorem ipsum is not simply random text roots to popular pular belief It has roots in a piece of classic</p>
                  </div>
                </li>
                <li className="ftlink-li">
                  <h2 className="ft-title">Information</h2>
                  <div className="footer-wrap-menu">
                    <ul className="footer-sublist">
                      <li className="ftsublink-li">
                        <a href="about-us.html" className="ft-sublink">About story</a>
                      </li>
                      <li className="ftsublink-li">
                        <a href="privacy-policy.html" className="ft-sublink">Privacy policy</a>
                      </li>
                      <li className="ftsublink-li">
                        <a href="order-history.html" className="ft-sublink">My order</a>
                      </li>
                      <li className="ftsublink-li">
                        <a href="track-page.html" className="ft-sublink">Track order</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="ftlink-li store-contact">
                  <h2 className="ft-title">Contact us</h2>
                  <div className="footer-wrap-menu">
                    <div className="contact">
                      <a href="tel:+00-1234567890" className="con-add">+00-1234567890</a>
                      <a href="mailto:demo@support.com" className="con-add">demo@support.com</a>
                    </div>
                    <div className="address">
                      <p>14 Ringe lane, las vegas,</p>
                      <p>nv, 89156  united states</p>
                    </div>
                  </div>
                </li>
                <li className="ftlink-li store-open">
                  <h2 className="ft-title">Store open</h2>
                  <div className="footer-wrap-menu">
                    <div className="time">
                      <p>Mon to Thu : 8:30AM to 6:30PM</p>
                      <p>Fri to Sat : 8:30AM to 4:30PM</p>
                      <p>Sunday : All sunday close</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="deal-section section-ptb">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="grid-wrap">
              <li className="grid-wrapper title-wrapper">
                <div className="section-title">
                  <span className="sub-title">Deal of the day</span>
                  <div className="product-timer">
                    <ul className="timer-section">
                      <li className="timer-count">
                        <span className="timer-text" id="day1">0</span>
                        <span className="small-text">Day</span>
                      </li>
                      <li className="timer-count">
                        <span className="timer-text" id="hrs1">0</span>
                        <span className="small-text">Hrs</span>
                      </li>
                      <li className="timer-count">
                        <span className="timer-text" id="min1">0</span>
                        <span className="small-text">Min</span>
                      </li>
                      <li className="timer-count">
                        <span className="timer-text" id="sec1">0</span>
                        <span className="small-text">Sec</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="grid-wrapper slider-wrapper">
                <div className="deal-slider swiper" id="deal-product">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="product-grid-list">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <a href="product-template.html" className="pro-img">
                              <img src="img/product/p-21.jpg" className="img-fluid img1 resp-img1" alt="p-21" />
                              <img src="img/product/p-22.jpg" className="img-fluid img2 resp-img2" alt="p-22" />
                            </a>
                          </div>
                          <div className="product-content">
                            <div className="product-rating">
                              <span className="star-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                            </div>
                            <h6>
                              <a href="product-template.html">Crackers for rasmalai</a>
                            </h6>
                            <div className="price-box">
                              <span className="new-price">€61,00</span>
                              <span className="old-price">€69,00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product-grid-list">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <a href="product-template.html" className="pro-img">
                              <img src="img/product/p-23.jpg" className="img-fluid img1 resp-img1" alt="p-23" />
                              <img src="img/product/p-24.jpg" className="img-fluid img2 resp-img2" alt="p-24" />
                            </a>
                          </div>
                          <div className="product-content">
                            <div className="product-rating">
                              <span className="star-rating">
                                <i className="far fa-star" />
                                <i className="far fa-star" />
                                <i className="far fa-star" />
                                <i className="far fa-star" />
                                <i className="far fa-star" />
                              </span>
                            </div>
                            <h6>
                              <a href="product-template.html">Fresh healthy doughnuts</a>
                            </h6>
                            <div className="price-box">
                              <span className="new-price">€69,00</span>
                              <span className="old-price">€89,00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product-grid-list">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <a href="product-template.html" className="pro-img">
                              <img src="img/product/p-1.jpg" className="img-fluid img1 resp-img1" alt="p-1" />
                              <img src="img/product/p-2.jpg" className="img-fluid img2 resp-img2" alt="p-2" />
                            </a>
                          </div>
                          <div className="product-content">
                            <div className="product-rating">
                              <span className="star-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                            </div>
                            <h6>
                              <a href="product-template.html">Candy nut chocolate</a>
                            </h6>
                            <div className="price-box">
                              <span className="new-price">€11,00</span>
                              <span className="old-price">€19,00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product-grid-list">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <a href="product-template.html" className="pro-img">
                              <img src="img/product/p-3.jpg" className="img-fluid img1 resp-img1" alt="p-3" />
                              <img src="img/product/p-4.jpg" className="img-fluid img2 resp-img2" alt="p-4" />
                            </a>
                          </div>
                          <div className="product-content">
                            <div className="product-rating">
                              <span className="star-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                            </div>
                            <h6>
                              <a href="product-template.html">A bekery doughnuts</a>
                            </h6>
                            <div className="price-box">
                              <span className="new-price">€21,00</span>
                              <span className="old-price">€25,00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product-grid-list">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <a href="product-template.html" className="pro-img">
                              <img src="img/product/p-5.jpg" className="img-fluid img1 resp-img1" alt="p-5" />
                              <img src="img/product/p-6.jpg" className="img-fluid img2 resp-img2" alt="p-6" />
                            </a>
                          </div>
                          <div className="product-content">
                            <div className="product-rating">
                              <span className="star-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                            </div>
                            <h6>
                              <a href="product-template.html">Fresh bread toast</a>
                            </h6>
                            <div className="price-box">
                              <span className="new-price">€25,00</span>
                              <span className="old-price">€45,00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product-grid-list">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <a href="product-template.html" className="pro-img">
                              <img src="img/product/p-7.jpg" className="img-fluid img1 resp-img1" alt="p-7" />
                              <img src="img/product/p-8.jpg" className="img-fluid img2 resp-img2" alt="p-8" />
                            </a>
                          </div>
                          <div className="product-content">
                            <div className="product-rating">
                              <span className="star-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                            </div>
                            <h6>
                              <a href="product-template.html">Free sugar toast</a>
                            </h6>
                            <div className="price-box">
                              <span className="new-price">€25,00</span>
                              <span className="old-price">€45,00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product-grid-list">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <a href="product-template.html" className="pro-img">
                              <img src="img/product/p-9.jpg" className="img-fluid img1 resp-img1" alt="p-9" />
                              <img src="img/product/p-10.jpg" className="img-fluid img2 resp-img2" alt="p-10" />
                            </a>
                          </div>
                          <div className="product-content">
                            <div className="product-rating">
                              <span className="star-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                            </div>
                            <h6>
                              <a href="product-template.html">The bread a fresh</a>
                            </h6>
                            <div className="price-box">
                              <span className="new-price">€25,00</span>
                              <span className="old-price">€35,00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product-grid-list">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <a href="product-template.html" className="pro-img">
                              <img src="img/product/p-11.jpg" className="img-fluid img1 resp-img1" alt="p-11" />
                              <img src="img/product/p-12.jpg" className="img-fluid img2 resp-img2" alt="p-12" />
                            </a>
                          </div>
                          <div className="product-content">
                            <div className="product-rating">
                              <span className="star-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                            </div>
                            <h6>
                              <a href="product-template.html">Jamun fruit pastry</a>
                            </h6>
                            <div className="price-box">
                              <span className="new-price">€25,00</span>
                              <span className="old-price">€35,00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product-grid-list">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <a href="product-template.html" className="pro-img">
                              <img src="img/product/p-13.jpg" className="img-fluid img1 resp-img1" alt="p-13" />
                              <img src="img/product/p-14.jpg" className="img-fluid img2 resp-img2" alt="p-14" />
                            </a>
                          </div>
                          <div className="product-content">
                            <div className="product-rating">
                              <span className="star-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                            </div>
                            <h6>
                              <a href="product-template.html">Sandwich olka bread</a>
                            </h6>
                            <div className="price-box">
                              <span className="new-price">€31,00</span>
                              <span className="old-price">€39,00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product-grid-list">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <a href="product-template.html" className="pro-img">
                              <img src="img/product/p-15.jpg" className="img-fluid img1 resp-img1" alt="p-15" />
                              <img src="img/product/p-16.jpg" className="img-fluid img2 resp-img2" alt="p-16" />
                            </a>
                          </div>
                          <div className="product-content">
                            <div className="product-rating">
                              <span className="star-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                            </div>
                            <h6>
                              <a href="product-template.html">Healthy cake pastry</a>
                            </h6>
                            <div className="price-box">
                              <span className="new-price">€44,00</span>
                              <span className="old-price">€49,00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product-grid-list">
                        <div className="single-product-wrap">
                          <div className="product-image">
                            <a href="product-template.html" className="pro-img">
                              <img src="img/product/p-17.jpg" className="img-fluid img1 resp-img1" alt="p-17" />
                              <img src="img/product/p-18.jpg" className="img-fluid img2 resp-img2" alt="p-18" />
                            </a>
                          </div>
                          <div className="product-content">
                            <div className="product-rating">
                              <span className="star-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </span>
                            </div>
                            <h6>
                              <a href="product-template.html">Crackers for rasmalai</a>
                            </h6>
                            <div className="price-box">
                              <span className="new-price">€61,00</span>
                              <span className="old-price">€69,00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom-area">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="ft-bottom">
              <li className="copy-right">
                <p>
                  <span>Copyright</span>
                  <span className="copy-icon"><i className="far fa-copyright" /></span>
                  <span>2023 by spacingtech<sup>TM</sup></span>
                </p>
              </li>
              <li className="social-icon">
                <ul className="social-icon">
                  <li>
                    <a href="https://facebook.com/">
                      <span className="icon-social facebook"><i className="fa-brands fa-facebook-f" /></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <span className="icon-social twitter"><i className="fa-brands fa-twitter" /></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://pinterest.com/">
                      <span className="icon-social pinterest"><i className="fa-brands fa-pinterest" /></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <span className="icon-social instagram"><i className="fa-brands fa-instagram" /></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <span className="icon-social linkedin"><i className="fa-brands fa-linkedin-in" /></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <span className="icon-social telegram"><i className="fa-brands fa-telegram" /></span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="ft-menu">
                <a href="terms-condition.html" className="ft-sublink">Terms &amp; condition</a>
                <a href="privacy-policy.html" className="ft-sublink">Privacy policy</a>
                <a href="faq.html" className="ft-sublink">Faqs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* search-popup start */}
  <div className="modal fade" id="seachmodal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="crap-search">
                  {/* search-button-close start */}
                  <div className="button-close">
                    <button type="button" className="search-close" data-bs-dismiss="modal"><i className="feather-x" /></button>
                  </div>
                  {/* search-button-close end */}
                  {/* search-form start */}
                  <form method="get" className="search-bar">
                    <div className="form-search">
                      <input type="search" name="q" placeholder="Search product here.." className="input-text" required />
                      <button type="submit" className="search-btn"><i className="feather-search" /></button>
                    </div>
                  </form>
                  {/* search-form end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* search-popup end */}
  {/* mobile-menu start */}
  
  {/* mobile-menu end */}
  {/* mini-cart start */}
  <div className="mini-cart">
    <div className="cart-text">
      {/* minicart-empty start */}
      <p className="d-none">No products in the cart.</p>
      {/* minicart-empty end */}
      {/* minicart-fill start */}
      <p>
        <span className="cart-count-desc">There are</span>
        <span className="cart-count">8</span>
        <span className="cart-count-desc">products</span>
      </p>
      {/* minicart-fill end */}
      {/* minicart-close start */}
      <button className="cart-close"><i className="feather-x" /></button>
      {/* minicart-close end */}
    </div>
    {/* minicart empty-content start */}
    <div className="empty-cart d-none">
      <span className="cart-icon"><i className="bi bi-bag-dash" /></span>
      <a href="collection.html" className="btn btn-style">Continue shopping</a>
    </div>
    {/* minicart empty-content end */}
    <ul className="cart-item">
      <li className="cart-product">
        <div className="cart-img">
          {/* minicart-img start */}
          <a href="product-template1.html" className="img-area">
            <img src="img/product-list/p-1.jpg" className="img-fluid" alt="p-1" />
          </a>
          {/* minicart-img end */}
        </div>
        <div className="cart-content">
          {/* minicart-title start */}
          <h6><a href="product-template2.html">Candy nut chocolate</a></h6>
          {/* minicart-title end */}
          <div className="product-info">
            {/* minicart-price start */}
            <div className="info-item">
              <span className="product-qty">1</span>
              <span>×</span>
              <span className="product-price">€11,00</span>
            </div>
            {/* minicart-price end */}
          </div>
          <div className="product-quantity-action">
            <div className="product-quantity">
              <div className="cart-plus-minus">
                <button className="dec qtybutton minus"><i className="feather-minus" /></button>
                <input type="text" name="quantity" defaultValue={1} />
                <button className="inc qtybutton plus"><i className="feather-plus" /></button>
              </div>
            </div>
            {/* minicart delete-icon start */}
            <div className="delete-cart">
              <a href="javascript:void(0)" className="delete-icon"><i className="feather-trash-2" /></a>
            </div>
            {/* minicart delete-icon end */}
          </div>
        </div>
      </li>
      <li className="cart-product">
        <div className="cart-img">
          {/* minicart-img start */}
          <a href="product-template1.html" className="img-area">
            <img src="img/product-list/p-2.jpg" className="img-fluid" alt="p-2" />
          </a>
          {/* minicart-img end */}
        </div>
        <div className="cart-content">
          {/* minicart-title start */}
          <h6><a href="product-template2.html">A bekery doughnuts</a></h6>
          {/* minicart-title end */}
          <div className="product-info">
            {/* minicart-price start */}
            <div className="info-item">
              <span className="product-qty">1</span>
              <span>×</span>
              <span className="product-price">€21,00</span>
            </div>
            {/* minicart-price end */}
          </div>
          <div className="product-quantity-action">
            <div className="product-quantity">
              <div className="cart-plus-minus">
                <button className="dec qtybutton minus"><i className="feather-minus" /></button>
                <input type="text" name="quantity" defaultValue={1} />
                <button className="inc qtybutton plus"><i className="feather-plus" /></button>
              </div>
            </div>
            {/* minicart delete-icon start */}
            <div className="delete-cart">
              <a href="javascript:void(0)" className="delete-icon"><i className="feather-trash-2" /></a>
            </div>
            {/* minicart delete-icon end */}
          </div>
        </div>
      </li>
      <li className="cart-product">
        <div className="cart-img">
          {/* minicart-img start */}
          <a href="product-template1.html" className="img-area">
            <img src="img/product-list/p-3.jpg" className="img-fluid" alt="p-3" />
          </a>
          {/* minicart-img end */}
        </div>
        <div className="cart-content">
          {/* minicart-title start */}
          <h6><a href="product-template2.html">Fresh bread toast</a></h6>
          {/* minicart-title end */}
          <div className="product-info">
            {/* minicart-price start */}
            <div className="info-item">
              <span className="product-qty">1</span>
              <span>×</span>
              <span className="product-price">€24,00</span>
            </div>
            {/* minicart-price end */}
          </div>
          <div className="product-quantity-action">
            <div className="product-quantity">
              <div className="cart-plus-minus">
                <button className="dec qtybutton minus"><i className="feather-minus" /></button>
                <input type="text" name="quantity" defaultValue={1} />
                <button className="inc qtybutton plus"><i className="feather-plus" /></button>
              </div>
            </div>
            {/* minicart delete-icon start */}
            <div className="delete-cart">
              <a href="javascript:void(0)" className="delete-icon"><i className="feather-trash-2" /></a>
            </div>
            {/* minicart delete-icon end */}
          </div>
        </div>
      </li>
      <li className="cart-product">
        <div className="cart-img">
          {/* minicart-img start */}
          <a href="product-template1.html" className="img-area">
            <img src="img/product-list/p-4.jpg" className="img-fluid" alt="p-4" />
          </a>
          {/* minicart-img end */}
        </div>
        <div className="cart-content">
          {/* minicart-title start */}
          <h6><a href="product-template2.html">Free sugar toast</a></h6>
          {/* minicart-title end */}
          <div className="product-info">
            {/* minicart-price start */}
            <div className="info-item">
              <span className="product-qty">1</span>
              <span>×</span>
              <span className="product-price">€25,00</span>
            </div>
            {/* minicart-price end */}
          </div>
          <div className="product-quantity-action">
            <div className="product-quantity">
              <div className="cart-plus-minus">
                <button className="dec qtybutton minus"><i className="feather-minus" /></button>
                <input type="text" name="quantity" defaultValue={1} />
                <button className="inc qtybutton plus"><i className="feather-plus" /></button>
              </div>
            </div>
            {/* minicart delete-icon start */}
            <div className="delete-cart">
              <a href="javascript:void(0)" className="delete-icon"><i className="feather-trash-2" /></a>
            </div>
            {/* minicart delete-icon end */}
          </div>
        </div>
      </li>
      <li className="cart-product">
        <div className="cart-img">
          {/* minicart-img start */}
          <a href="product-template1.html" className="img-area">
            <img src="img/product-list/p-5.jpg" className="img-fluid" alt="p-5" />
          </a>
          {/* minicart-img end */}
        </div>
        <div className="cart-content">
          {/* minicart-title start */}
          <h6><a href="product-template2.html">Sandwich olka bread</a></h6>
          {/* minicart-title end */}
          <div className="product-info">
            {/* minicart-price start */}
            <div className="info-item">
              <span className="product-qty">1</span>
              <span>×</span>
              <span className="product-price">€31,00</span>
            </div>
            {/* minicart-price end */}
          </div>
          <div className="product-quantity-action">
            <div className="product-quantity">
              <div className="cart-plus-minus">
                <button className="dec qtybutton minus"><i className="feather-minus" /></button>
                <input type="text" name="quantity" defaultValue={1} />
                <button className="inc qtybutton plus"><i className="feather-plus" /></button>
              </div>
            </div>
            {/* minicart delete-icon start */}
            <div className="delete-cart">
              <a href="javascript:void(0)" className="delete-icon"><i className="feather-trash-2" /></a>
            </div>
            {/* minicart delete-icon end */}
          </div>
        </div>
      </li>
      <li className="cart-product">
        <div className="cart-img">
          {/* minicart-img start */}
          <a href="product-template1.html" className="img-area">
            <img src="img/product-list/p-6.jpg" className="img-fluid" alt="p-6" />
          </a>
          {/* minicart-img end */}
        </div>
        <div className="cart-content">
          {/* minicart-title start */}
          <h6><a href="product-template2.html">Red sugar biscuit</a></h6>
          {/* minicart-title end */}
          <div className="product-info">
            {/* minicart-price start */}
            <div className="info-item">
              <span className="product-qty">1</span>
              <span>×</span>
              <span className="product-price">€61,00</span>
            </div>
            {/* minicart-price end */}
          </div>
          <div className="product-quantity-action">
            <div className="product-quantity">
              <div className="cart-plus-minus">
                <button className="dec qtybutton minus"><i className="feather-minus" /></button>
                <input type="text" name="quantity" defaultValue={1} />
                <button className="inc qtybutton plus"><i className="feather-plus" /></button>
              </div>
            </div>
            {/* minicart delete-icon start */}
            <div className="delete-cart">
              <a href="javascript:void(0)" className="delete-icon"><i className="feather-trash-2" /></a>
            </div>
            {/* minicart delete-icon end */}
          </div>
        </div>
      </li>
      <li className="cart-product">
        <div className="cart-img">
          {/* minicart-img start */}
          <a href="product-template1.html" className="img-area">
            <img src="img/product-list/p-7.jpg" className="img-fluid" alt="p-7" />
          </a>
          {/* minicart-img end */}
        </div>
        <div className="cart-content">
          {/* minicart-title start */}
          <h6><a href="product-template2.html">Crackers for rasmalai</a></h6>
          {/* minicart-title end */}
          <div className="product-info">
            {/* minicart-price start */}
            <div className="info-item">
              <span className="product-qty">1</span>
              <span>×</span>
              <span className="product-price">€61,00</span>
            </div>
            {/* minicart-price end */}
          </div>
          <div className="product-quantity-action">
            <div className="product-quantity">
              <div className="cart-plus-minus">
                <button className="dec qtybutton minus"><i className="feather-minus" /></button>
                <input type="text" name="quantity" defaultValue={1} />
                <button className="inc qtybutton plus"><i className="feather-plus" /></button>
              </div>
            </div>
            {/* minicart delete-icon start */}
            <div className="delete-cart">
              <a href="javascript:void(0)" className="delete-icon"><i className="feather-trash-2" /></a>
            </div>
            {/* minicart delete-icon end */}
          </div>
        </div>
      </li>
      <li className="cart-product">
        <div className="cart-img">
          {/* minicart-img start */}
          <a href="product-template1.html" className="img-area">
            <img src="img/product-list/p-8.jpg" className="img-fluid" alt="p-8" />
          </a>
          {/* minicart-img end */}
        </div>
        <div className="cart-content">
          {/* minicart-title start */}
          <h6><a href="product-template2.html">Healthy cake pastry</a></h6>
          {/* minicart-title end */}
          <div className="product-info">
            {/* minicart-price start */}
            <div className="info-item">
              <span className="product-qty">1</span>
              <span>×</span>
              <span className="product-price">€44,00</span>
            </div>
            {/* minicart-price end */}
          </div>
          <div className="product-quantity-action">
            <div className="product-quantity">
              <div className="cart-plus-minus">
                <button className="dec qtybutton minus"><i className="feather-minus" /></button>
                <input type="text" name="quantity" defaultValue={1} />
                <button className="inc qtybutton plus"><i className="feather-plus" /></button>
              </div>
            </div>
            {/* minicart delete-icon start */}
            <div className="delete-cart">
              <a href="javascript:void(0)" className="delete-icon"><i className="feather-trash-2" /></a>
            </div>
            {/* minicart delete-icon end */}
          </div>
        </div>
      </li>
    </ul>
    {/* minicart-total start */}
    <ul className="subtotal-area">
      <li className="subtotal-info">
        <div className="subtotal-titles">
          {/* minicart total-title start */}
          <h6 className="cart-total">Subtotal:</h6>
          {/* minicart total-title end */}
          {/* minicart total-price start */}
          <span className="subtotal-price">€369,00</span>
          {/* minicart total-price end */}
        </div>
      </li>
      <li className="mini-info">
        {/* minicart agree-text start */}
        <label className="box-area">
          <span className="agree-text">I have read and agree with the <a href="terms-condition.html">terms &amp; condition.</a></span>
          <input type="checkbox" className="cust-checkbox" />
          <span className="cust-check" />
        </label>
        {/* minicart agree-text end */}
        {/* minicart button start */}
        <div className="cart-btn">
          <a href="cart-page.html" className="btn btn-style2">View cart</a>
          <a href="checkout-style1.html" className="btn btn-style2 checkout disabled">Checkout</a>
        </div>
        {/* minicart button end */}
      </li>
    </ul>
    {/* minicart-total end */}
  </div>
  {/* minicart end */}
  {/* quickview modal start */}
  <div className="productmodal">
    <div className="modal fade" id="quickview" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-quickview">Quickview</h6>
            <button type="button" className="close" data-bs-dismiss="modal"><i className="feather-x" /></button>
          </div>
          <div className="modal-body">
            {/* swiper slider start */}
            <div className="quickview-main-area">
              <div className="quickview-slider">
                <div className="swiper gallery-top">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <a href="product-template.html"><img src="img/product/p-1.jpg" className="img-fluid" alt="p-1" /></a>
                    </div>
                    <div className="swiper-slide">
                      <a href="product-template.html"><img src="img/product/p-2.jpg" className="img-fluid" alt="p-2" /></a>
                    </div>
                    <div className="swiper-slide">
                      <a href="product-template.html"><img src="img/product/p-3.jpg" className="img-fluid" alt="p-3" /></a>
                    </div>
                    <div className="swiper-slide">
                      <a href="product-template.html"><img src="img/product/p-4.jpg" className="img-fluid" alt="p-4" /></a>
                    </div>
                    <div className="swiper-slide">
                      <a href="product-template.html"><img src="img/product/p-5.jpg" className="img-fluid" alt="p-5" /></a>
                    </div>
                  </div>
                  <div className="swiper-button">
                    <button className="quick-prev"><i className="fas fa-chevron-left" /></button>
                    <button className="quick-next"><i className="fas fa-chevron-right" /></button>
                  </div>
                </div>
                <div className="swiper gallery-thumbs">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <a href="javascript:void(0)"><img src="img/product/p-1.jpg" className="img-fluid" alt="p-1" /></a>
                    </div>
                    <div className="swiper-slide">
                      <a href="javascript:void(0)"><img src="img/product/p-2.jpg" className="img-fluid" alt="p-2" /></a>
                    </div>
                    <div className="swiper-slide">
                      <a href="javascript:void(0)"><img src="img/product/p-3.jpg" className="img-fluid" alt="p-3" /></a>
                    </div>
                    <div className="swiper-slide">
                      <a href="javascript:void(0)"><img src="img/product/p-4.jpg" className="img-fluid" alt="p-4" /></a>
                    </div>
                    <div className="swiper-slide">
                      <a href="javascript:void(0)"><img src="img/product/p-5.jpg" className="img-fluid" alt="p-5" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* swiper slider end */}
              {/* quick-view content start */}
              <div className="quick-view-content">
                <div className="product-rating">
                  <span className="star-rating">
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                  </span>
                </div>
                <div className="product-title"><h6 className="product_title">Candy nut chocolate</h6></div>
                {/* product-price start */}
                <div className="price-box">
                  <span className="new-price">€11,00</span>
                  <span className="old-price">€19,00</span>
                </div>
                {/* product-price end */}
                <div className="product-desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn</p></div>
                <form method="post">
                  <div className="quick-view-select variants select-option-part">
                    <div className="variants_selects">
                      <div className="selector-wrapper">
                        <label>Flavor</label>
                      </div>
                      <div className="select-icon">
                        <select className="single-option-selector select--wd">
                          <option value="Sponge">Sponge</option>
                          <option value="Pumpkin">Pumpkin</option>
                          <option value="Velvet">Velvet</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="product-quantity-action">
                    <h6>Quantity:</h6>
                    <div className="product-quantity">
                      <div className="cart-plus-minus">
                        <button className="dec qtybutton minus"><i className="fa-solid fa-minus" /></button>
                        <input type="text" name="quantity" defaultValue={1} />
                        <button className="inc qtybutton plus"><i className="fa-solid fa-plus" /></button>
                      </div>
                    </div>
                  </div>
                  <div className="quickview-buttons">
                    <button type="submit" className="addtocartqv"><span className="cart-title">Add to cart</span></button>
                  </div>
                </form>
              </div>
              {/* quick-view content end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* quickview modal end */}
  {/* screen-bg start */}
  <div className="screen-bg" />
      <a  id="top" className="scroll" onClick={handleScrollToTop}>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><g fill="none" ><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="white" d="M11.293 8.293a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414L12 10.414l-4.95 4.95a1 1 0 0 1-1.414-1.414z"/></g></svg>
        </span>
      </a>
  {/* preloader end */}
  {/* back-to-top start */}
  <a href="javascript:void(0)" id="top" className="scroll">
    <span><i className="feather-arrow-up" /></span>
  </a>
  {/* back-to-top end */}
  {/* notification-bottom start */}

  {/* notification-bottom end */}
  {/* jquery */}
  {/* bootstrap js */}
  {/* magnific-popup js */}
  {/* owl js */}
  {/* swiper-bundle js */}
  {/* slick js */}
  {/* waypoints js */}
  {/* counter js */}
  {/* main js */}
  {/* Mirrored from spacingtech.com/html/banno/banno-ltr/privacy-policy.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 17 Mar 2024 10:19:10 GMT */}
</div>

  )
}

export default PrivacyPolicy