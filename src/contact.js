import React from 'react'
import './css/other-page.css'
import Navbar from 'navbar'
function Contact() {
  return (
    <div>
 <Navbar />
  {/* top-notification start */}

  {/* top-notification end */}
  {/* header start */}

  {/* header end */}
  {/* main section start*/}
  <main>
    {/* breadcrumb start */}
    <section className="breadcrumb-area">
      <div className="container">
        <div className="col">
          <div className="row">
            <div className="breadcrumb-index">
              {/* breadcrumb main-title start*/}
              <div className="breadcrumb-title">
                <h2>Contact us 2</h2>
              </div>
              {/* breadcrumb main-title end*/}
              {/* breadcrumb-list start */}
              <ul className="breadcrumb-list">
                <li className="breadcrumb-item-link">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item-link">
                  <span>Contact us</span>
                </li>
              </ul>
              {/* breadcrumb-list end */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* breadcrumb end */}
    <section className="main-content-wrap contact-us-page">
      <div className="container">
        <div className="row">
          <div className="col">
            {/* contact title start */}
            <div className="section-capture">
              <div className="section-title">
                <span className="sub-title">Hear from you</span>
                <h2><span>Contact us</span></h2>
              </div>
            </div>
            {/* contact title end */}
            {/* contact map start */}
            <div className="google-map-area">
              <div className="map" id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655.456512278146!2d76.05607184479616!3d11.197687273643568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba647e039ba5631%3A0x75e8525207ee2321!2sKavanur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1713170668865!5m2!1sen!2sin"  allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
            {/* contact map end */}
          </div>
        </div>
      </div>
    </section>
    <section className="form-contact">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="contact-content">
              {/* contact us from start */}
              <div className="contact-detail form-warp">
                <div className="form-title">
                  <h6>Drop us message</h6>
                </div>
                <div className="contact-form-list">
                  <form method="post">
                    <ul className="form-fill">
                      <li className="name">
                        <label>Name</label>
                        <input type="text" name="q" autoComplete="name" placeholder="Name" />
                      </li>
                      <li className="email">
                        <label>Email address</label>
                        <input type="email" name="q" autoComplete="email" placeholder="Email address" />
                      </li>
                      <li className="phone number">
                        <label>Phone number</label>
                        <input type="tel" name="q" placeholder="Phone number" />
                      </li>
                      <li className="message phone number">
                        <label>Message</label>
                        <textarea rows={10} placeholder="Message" className="custom-textarea" defaultValue={""} />
                      </li>
                    </ul>
                    <div className="contact-submit">
                      <button type="submit" className="btn btn-style2">
                        <span>Send</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* contact us from start */}
              {/* contact get info. start */}
              <div className="contact-detail get-info">
                <div className="form-title">
                  <h6>Get in touch</h6>
                </div>
                <ul className="contact-info-list">
                  <li className="ftcon-li">
                    <span className="con-icon"><i className="bi bi-geo" /></span>
                    <span className="con-add">
                      <span>7882, Reliance GIDC</span>
                      <span>Chowk bazzar, New York</span>
                    </span>
                  </li>
                  <li className="ftcon-li">
                    <span className="con-icon"><i className="bi bi-telephone" /></span>
                    <div className="contact-block">
                      <a href="tel:(+91)123456789" className="con-add">(+33) 1 23 45 67 89</a>
                      <a href="tel:(+91)123456789" className="con-add">(+33) 1 23 45 67 89</a>
                    </div>
                  </li>
                  <li className="ftcon-li">
                    <span className="con-icon"><i className="bi bi-envelope" /></span>
                    <div className="contact-block">
                      <a href="mailto:demo@support.com" className="con-add">demo@support.com</a>
                      <a href="mailto:support@spacingtech.com" className="con-add">support@spacingtech.com</a>
                    </div>
                  </li>
                </ul>
              </div>
              {/* contact get info. end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* main section end*/}
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
  <div className="mobile-menu" id="menu-toggle">
    <div className="main-menu-area">
      {/* box-header start */}
      <div className="box-header"><button className="close-menu" type="button"><i className="feather-x" /></button></div>
      {/* box-header end */}
      <div className="megamenu-content">
        <a href="#resp-main" className="browse-cat" data-bs-toggle="collapse" aria-expanded="true">
          <span className="line" />
          <span className="menu-title">Menu</span>
          <span className="menu-arrow"><i className="feather-chevron-down" /></span>
        </a>
        <div className="mainwrap collapse show" id="resp-main">
          <ul className="main-menu">
            <li className="menu-link">
              <a href="index.html" className="link-title">
                <span className="sp-link-title">Home</span>
                <span className="menu-arrow"><i className="feather-chevron-down" /></span>
              </a>
              <a href="#resp-home" data-bs-toggle="collapse" className="link-title link-title-lg">
                <span className="sp-link-title">Home</span>
                <span className="menu-arrow"><i className="feather-chevron-down" /></span>
              </a>
              <div className="menu-dropdown single-menu collapse" id="resp-home">
                <ul className="container ul p-0">
                  <li className="singlemenu-li">
                    <a href="index.html" className="singlelink-title">
                      <span className="sp-link-title">01 Home</span>
                    </a>
                  </li>
                  <li className="singlemenu-li">
                    <a href="index-2.html" className="singlelink-title">
                      <span className="sp-link-title">02 Home</span>
                    </a>
                  </li>
                  <li className="singlemenu-li">
                    <a href="index-3.html" className="singlelink-title">
                      <span className="sp-link-title">03 Home</span>
                    </a>
                  </li>
                  <li className="singlemenu-li">
                    <a href="index-4.html" className="singlelink-title">
                      <span className="sp-link-title">04 Home</span>
                    </a>
                  </li>
                  <li className="singlemenu-li">
                    <a href="index-5.html" className="singlelink-title">
                      <span className="sp-link-title">05 Home</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-link">
              <a href="collection.html" className="link-title">
                <span className="sp-link-title">Product</span>
                <span className="menu-arrow"><i className="feather-chevron-down" /></span>
              </a>
              <a href="#resp-single-product" data-bs-toggle="collapse" className="link-title link-title-lg">
                <span className="sp-link-title">Product</span>
                <span className="menu-arrow"><i className="feather-chevron-down" /></span>
              </a>
              <div className="menu-dropdown product-menu collapse" id="resp-single-product">
                <ul className="container ul p-0">
                  <li className="productlink-li">
                    <a href="collection.html" className="productlink-title">
                      <span className="sp-link-title">Shop page</span>
                    </a>
                    <a href="#resp-product-page" className="productlink-title productlink-title-lg" data-bs-toggle="collapse">
                      <span className="sp-link-title">Shop page</span>
                      <span className="menu-arrow"><i className="feather-chevron-down" /></span>
                    </a>
                    <ul className="productsupmenu-dropdown collapse" id="resp-product-page">
                      <li className="productsupmenu-li">
                        <a href="collection.html" className="productsuplink-title">
                          <span className="sp-link-title">01 Collection</span>
                        </a>
                      </li>
                      <li className="productsupmenu-li">
                        <a href="collection-without.html" className="productsuplink-title">
                          <span className="sp-link-title">02 Collection left</span>
                        </a>
                      </li>
                      <li className="productsupmenu-li">
                        <a href="collection-right.html" className="productsuplink-title">
                          <span className="sp-link-title">03 Collection right</span>
                        </a>
                      </li>
                      <li className="productsupmenu-li">
                        <a href="collection-list.html" className="productsuplink-title">
                          <span className="sp-link-title">04 Collection list</span>
                        </a>
                      </li>
                      <li className="productsupmenu-li">
                        <a href="collection-list-without.html" className="productsuplink-title">
                          <span className="sp-link-title">05 Collection list left</span>
                        </a>
                      </li>
                      <li className="productsupmenu-li">
                        <a href="collection-list-right.html" className="productsuplink-title">
                          <span className="sp-link-title">06 Collection list right</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="productlink-li">
                    <a href="collection.html" className="productlink-title">
                      <span className="sp-link-title">Product page</span>
                    </a>
                    <a href="#resp-shop-page" className="productlink-title productlink-title-lg" data-bs-toggle="collapse">
                      <span className="sp-link-title">Product page</span>
                      <span className="menu-arrow"><i className="feather-chevron-down" /></span>
                    </a>
                    <ul className="productsupmenu-dropdown collapse" id="resp-shop-page">
                      <li className="productsupmenu-li">
                        <a href="product-template.html" className="productsuplink-title">
                          <span className="sp-link-title">01 Product style</span>
                        </a>
                      </li>
                      <li className="productsupmenu-li">
                        <a href="product-template2.html" className="productsuplink-title">
                          <span className="sp-link-title">02 Product style</span>
                        </a>
                      </li>
                      <li className="productsupmenu-li">
                        <a href="product-template3.html" className="productsuplink-title">
                          <span className="sp-link-title">03 Product style</span>
                        </a>
                      </li>
                      <li className="productsupmenu-li">
                        <a href="product-template4.html" className="productsuplink-title">
                          <span className="sp-link-title">04 Product style</span>
                        </a>
                      </li>
                      <li className="productsupmenu-li">
                        <a href="product-template5.html" className="productsuplink-title">
                          <span className="sp-link-title">05 Product style</span>
                        </a>
                      </li>
                      <li className="productsupmenu-li">
                        <a href="product-template6.html" className="productsuplink-title">
                          <span className="sp-link-title">06 Product style</span>
                        </a>
                      </li>
                      <li className="productsupmenu-li">
                        <a href="product-template7.html" className="productsuplink-title">
                          <span className="sp-link-title">07 Product style</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="productlink-li">
                    <div className="menu-product">
                      <ul className="product-ul">
                        <li className="product-li">
                          <div className="product-menu-list">
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-template.html" className="pro-img">
                                  <img src="img/product/p-3.jpg" className="img-fluid img1" alt="p-3" />
                                  <img src="img/product/p-4.jpg" className="img-fluid img2" alt="p-4" />
                                </a>
                              </div>
                              <div className="product-content">
                                <h6><a href="product-template.html">A bekery doughnuts</a></h6>
                                <div className="price-box">
                                  <span className="new-price">€21,00</span>
                                  <span className="old-price">€25,00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="product-li">
                          <div className="product-menu-list">
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-template.html" className="pro-img">
                                  <img src="img/product/p-9.jpg" className="img-fluid img1" alt="p-9" />
                                  <img src="img/product/p-10.jpg" className="img-fluid img2" alt="p-10" />
                                </a>
                              </div>
                              <div className="product-content">
                                <h6><a href="product-template.html">The bread a fresh</a></h6>
                                <div className="price-box">
                                  <span className="new-price">€25,00</span>
                                  <span className="old-price">€35,00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="menu-product-btn">
                        <a href="collection.html" className="menu-pro-link">
                          <span className="menu-title">See more</span>
                          <span className="menu-icon"><i className="bi bi-chevron-right" /></span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="productlink-li">
                    <div className="menu-product">
                      <ul className="product-ul">
                        <li className="product-li">
                          <div className="product-menu-list">
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-template.html" className="pro-img">
                                  <img src="img/product/p-1.jpg" className="img-fluid img1" alt="p-1" />
                                  <img src="img/product/p-2.jpg" className="img-fluid img2" alt="p-2" />
                                </a>
                              </div>
                              <div className="product-content">
                                <h6><a href="product-template.html">Candy nut chocolate</a></h6>
                                <div className="price-box">
                                  <span className="new-price">€11,00</span>
                                  <span className="old-price">€19,00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="product-li">
                          <div className="product-menu-list">
                            <div className="single-product-wrap">
                              <div className="product-image">
                                <a href="product-template.html" className="pro-img">
                                  <img src="img/product/p-7.jpg" className="img-fluid img1" alt="p-7" />
                                  <img src="img/product/p-8.jpg" className="img-fluid img2" alt="p-8" />
                                </a>
                              </div>
                              <div className="product-content">
                                <h6><a href="product-template.html">Sandwich olka bread</a></h6>
                                <div className="price-box">
                                  <span className="new-price">$45.00</span>
                                  <span className="old-price">$54.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="menu-product-btn">
                        <a href="collection.html" className="menu-pro-link">
                          <span className="menu-title">See more</span>
                          <span className="menu-icon"><i className="feather-chevron-right" /></span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-link">
              <a href="collection.html" className="link-title">
                <span className="sp-link-title">Collection</span>
                <span className="menu-arrow"><i className="feather-chevron-down" /></span>
              </a>
              <a href="#resp-single-collection" className="link-title link-title-lg" data-bs-toggle="collapse">
                <span className="sp-link-title">Collection</span>
                <span className="menu-arrow"><i className="feather-chevron-down" /></span>
              </a>
              <div className="menu-dropdown banner-menu collapse" id="resp-single-collection">
                <ul className="container ul p-0">
                  <li className="bannermenu-li banner-hover">
                    <a href="collection.html" className="collection-img banner-img">
                      <img src="img/menu/menu-banner-01.jpg" className="img-fluid" alt="menu-banner-01" />
                    </a>
                    <a href="collection.html" className="collection-title">
                      <span>Bread</span>
                    </a>
                  </li>
                  <li className="bannermenu-li banner-hover">
                    <a href="collection.html" className="collection-img banner-img">
                      <img src="img/menu/menu-banner-02.jpg" className="img-fluid" alt="menu-banner-02" />
                    </a>
                    <a href="collection.html" className="collection-title">
                      <span>Cakes</span>
                    </a>
                  </li>
                  <li className="bannermenu-li banner-hover">
                    <a href="collection.html" className="collection-img banner-img">
                      <img src="img/menu/menu-banner-03.jpg" className="img-fluid" alt="menu-banner-03" />
                    </a>
                    <a href="collection.html" className="collection-title">
                      <span>Bun</span>
                    </a>
                  </li>
                  <li className="bannermenu-li banner-hover">
                    <a href="collection.html" className="collection-img banner-img">
                      <img src="img/menu/menu-banner-04.jpg" className="img-fluid" alt="menu-banner-04" />
                    </a>
                    <a href="collection.html" className="collection-title">
                      <span>Pastries</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-link">
              <a href="blog-grid.html" className="link-title">
                <span className="sp-link-title">Blogs</span>
                <span className="menu-arrow"><i className="feather-chevron-down" /></span>
              </a>
              <a href="#resp-single-blog" data-bs-toggle="collapse" className="link-title link-title-lg">
                <span className="sp-link-title">Blogs</span>
                <span className="menu-arrow"><i className="feather-chevron-down" /></span>
              </a>
              <div className="menu-dropdown single-menu collapse" id="resp-single-blog">
                <ul className="container ul p-0">
                  <li className="singlemenu-li">
                    <a href="blog-grid-without.html" className="singlelink-title">
                      <span className="sp-link-title">01 Blog grid</span>
                    </a>
                  </li>
                  <li className="singlemenu-li">
                    <a href="blog-grid.html" className="singlelink-title">
                      <span className="sp-link-title">02 Blog grid left</span>
                    </a>
                  </li>
                  <li className="singlemenu-li">
                    <a href="blog-grid-right.html" className="singlelink-title">
                      <span className="sp-link-title">03 Blog grid right</span>
                    </a>
                  </li>
                  <li className="singlemenu-li">
                    <a href="article-post-without.html" className="singlelink-title">
                      <span className="sp-link-title">04 Article post</span>
                    </a>
                  </li>
                  <li className="singlemenu-li">
                    <a href="article-post.html" className="singlelink-title">
                      <span className="sp-link-title">05 Article post left</span>
                    </a>
                  </li>
                  <li className="singlemenu-li">
                    <a href="article-post-right.html" className="singlelink-title">
                      <span className="sp-link-title">06 Article post right</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-link">
              <a href="about-us.html" className="link-title">
                <span className="sp-link-title">Pages</span>
                <span className="menu-arrow"><i className="feather-chevron-down" /></span>
              </a>
              <a href="#resp-pages" className="link-title link-title-lg" data-bs-toggle="collapse">
                <span className="sp-link-title">Pages</span>
                <span className="menu-arrow"><i className="feather-chevron-down" /></span>
              </a>
              <div className="menu-dropdown sub-menu collapse" id="resp-pages">
                <ul className="container p-0 ul">
                  <li className="submenu-li">
                    <a href="about-us.html" className="sublink-title">
                      <span className="sp-link-title">About us</span>
                      <span className="menu-arrow"><i className="feather-chevron-right" /></span>
                    </a>
                    <a href="#resp-about-us" className="sublink-title sublink-title-lg" data-bs-toggle="collapse">
                      <span className="sp-link-title">About us</span>
                      <span className="menu-arrow"><i className="feather-chevron-right" /></span>
                    </a>
                    <ul className="supmenu-dropdown collapse" id="resp-about-us">
                      <li className="supmenu-li">
                        <a href="about-us.html" className="suplink-title">
                          <span className="sp-link-title">About us</span>
                        </a>
                      </li>
                      <li className="supmenu-li">
                        <a href="about-us-2.html" className="suplink-title">
                          <span className="sp-link-title">About us 2</span>
                        </a>
                      </li>
                      <li className="supmenu-li">
                        <a href="about-us-3.html" className="suplink-title">
                          <span className="sp-link-title">About us 3</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu-li">
                    <a href="my-account.html" className="sublink-title">
                      <span className="sp-link-title">My account</span>
                      <span className="menu-arrow"><i className="feather-chevron-right" /></span>
                    </a>
                    <a href="#resp-account" className="sublink-title sublink-title-lg" data-bs-toggle="collapse">
                      <span className="sp-link-title">My account</span>
                      <span className="menu-arrow"><i className="feather-chevron-right" /></span>
                    </a>
                    <ul className="supmenu-dropdown collapse" id="resp-account">
                      <li className="supmenu-li">
                        <a href="order-history.html" className="suplink-title">
                          <span className="supmenu-title">Order</span>
                        </a>
                      </li>
                      <li className="supmenu-li">
                        <a href="profile.html" className="suplink-title">
                          <span className="supmenu-title">Profile</span>
                        </a>
                      </li>
                      <li className="supmenu-li">
                        <a href="pro-address.html" className="suplink-title">
                          <span className="supmenu-title">Address</span>
                        </a>
                      </li>
                      <li className="supmenu-li">
                        <a href="pro-wishlist.html" className="suplink-title">
                          <span className="supmenu-title">Wishlist</span>
                        </a>
                      </li>
                      <li className="supmenu-li">
                        <a href="pro-tickets.html" className="suplink-title">
                          <span className="supmenu-title">My tickets</span>
                        </a>
                      </li>
                      <li className="supmenu-li">
                        <a href="billing-info.html" className="suplink-title">
                          <span className="supmenu-title">Billing info</span>
                        </a>
                      </li>
                      <li className="supmenu-li">
                        <a href="track-page.html" className="suplink-title">
                          <span className="supmenu-title">Track page</span>
                        </a>
                      </li>
                      <li className="supmenu-li">
                        <a href="order-complete.html" className="suplink-title">
                          <span className="supmenu-title">Order complete</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu-li">
                    <a href="contact-us.html" className="sublink-title">
                      <span className="sp-link-title">Contact us</span>
                      <span className="menu-arrow"><i className="feather-chevron-right" /></span>
                    </a>
                    <a href="#resp-contact-us" className="sublink-title sublink-title-lg" data-bs-toggle="collapse">
                      <span className="sp-link-title">Contact us</span>
                      <span className="menu-arrow"><i className="feather-chevron-right" /></span>
                    </a>
                    <ul className="supmenu-dropdown collapse" id="resp-contact-us">
                      <li className="supmenu-li">
                        <a href="contact-us.html" className="suplink-title">
                          <span className="supmenu-title">Contact us</span>
                        </a>
                      </li>
                      <li className="supmenu-li">
                        <a href="contact-us-2.html" className="suplink-title">
                          <span className="supmenu-title">Contact us 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu-li">
                    <a href="javascript:void(0)" className="sublink-title">
                      <span className="sp-link-title">Checkout</span>
                      <span className="menu-arrow"><i className="feather-chevron-right" /></span>
                    </a>
                    <a href="#resp-checkout" className="sublink-title sublink-title-lg" data-bs-toggle="collapse">
                      <span className="sp-link-title">Checkout</span>
                      <span className="menu-arrow"><i className="feather-chevron-right" /></span>
                    </a>
                    <ul className="supmenu-dropdown collapse" id="resp-checkout">
                      <li className="supmenu-li">
                        <a href="checkout-style1.html" className="suplink-title">
                          <span className="supmenu-title">Checkout style 1</span>
                        </a>
                      </li>
                      <li className="supmenu-li">
                        <a href="checkout-style2.html" className="suplink-title">
                          <span className="supmenu-title">Checkout style 2</span>
                        </a>
                      </li>
                      <li className="supmenu-li">
                        <a href="checkout-style3.html" className="suplink-title">
                          <span className="supmenu-title">Checkout style 3</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu-li">
                    <a href="javascript:void(0)" className="sublink-title">
                      <span className="sp-link-title">Features</span>
                      <span className="menu-arrow"><i className="feather-chevron-right" /></span>
                    </a>
                    <a href="#resp-feature" className="sublink-title sublink-title-lg" data-bs-toggle="collapse">
                      <span className="sp-link-title">Features</span>
                      <span className="menu-arrow"><i className="feather-chevron-right" /></span>
                    </a>
                    <ul className="supmenu-dropdown collapse" id="resp-feature">
                      <li className="supmenu-li">
                        <a href="cancellation.html" className="suplink-title">
                          <span className="supmenu-title">Cancellation</span>
                        </a>
                      </li>
                      <li className="supmenu-li">
                        <a href="cart-page.html" className="suplink-title">
                          <span className="supmenu-title">Cart page</span>
                        </a>
                      </li>
                      <li className="supmenu-li">
                        <a href="wishlist-product.html" className="suplink-title">
                          <span className="supmenu-title">Wishlist product</span>
                        </a>
                      </li>
                      <li className="supmenu-li">
                        <a href="sitemap.html" className="suplink-title">
                          <span className="supmenu-title">Sitemap</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu-li">
                    <a href="faq.html" className="sublink-title">
                      <span className="sp-link-title">Faqs</span>
                    </a>
                    <a href="faq.html" className="sublink-title sublink-title-lg">
                      <span className="sp-link-title">Faqs</span>
                    </a>
                  </li>
                  <li className="submenu-li">
                    <a href="privacy-policy.html" className="sublink-title">
                      <span className="sp-link-title">Privacy policy</span>
                    </a>
                    <a href="privacy-policy.html" className="sublink-title sublink-title-lg">
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
                  <li className="submenu-li">
                    <a href="return-policy.html" className="sublink-title">
                      <span className="sp-link-title">Return policy</span>
                    </a>
                    <a href="return-policy.html" className="sublink-title sublink-title-lg">
                      <span className="sp-link-title">Return policy</span>
                    </a>
                  </li>
                  <li className="submenu-li">
                    <a href="404.html" className="sublink-title">
                      <span className="sp-link-title">404</span>
                    </a>
                    <a href="404.html" className="sublink-title sublink-title-lg">
                      <span className="sp-link-title">404</span>
                    </a>
                  </li>
                  <li className="submenu-li">
                    <a href="coming-soon.html" className="sublink-title">
                      <span className="sp-link-title">Coming soon</span>
                    </a>
                    <a href="coming-soon.html" className="sublink-title sublink-title-lg">
                      <span className="sp-link-title">Coming soon</span>
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
 
  {/* preloader end */}
  {/* notification-bottom start */}
  <div className="notification-bottom">
    <ul className="shop-element-menu navigation-menu">
      <li className="side-wrap home-wrap">
        <div className="home-wrapper">
          <a href="index.html" className="home-modal">
            <span className="home-icon"><i className="feather-home" /></span>
            <span className="header-title">Home</span>
          </a>
        </div>
      </li>
      <li className="side-wrap search-wrap">
        <div className="search-wrapper">
          <a href="#seachmodal" data-bs-toggle="modal" className="search-modal">
            <span className="search-icon"><i className="feather-search" /></span>
            <span className="header-title">Search</span>
          </a>
        </div>
      </li>
      <li className="side-wrap wishlist-wrap">
        <div className="wishlist-wrapper">
          <div className="wish-det">
            <a href="wishlist-product.html" className="wishlist-count">
              <span className="wishlist-icon"><i className="feather-heart" /></span>
              <span className="wishlist-counter">5</span>
              <span className="header-title">Wishlist</span>
            </a>
          </div>
        </div>
      </li>
      <li className="side-wrap cart-wrap">
        <div className="cart-wrapper">
          <div className="cart-det">
            <a href="javascript:void(0)" className="add-to-cart cart-count">
              <span className="cart-icon"><i className="feather-shopping-bag" /></span>
              <span className="cart-counter">8</span>
              <span className="header-title">Cart</span>
            </a>
          </div>
        </div>
      </li>
      <li className="side-wrap user-wrap">
        <div className="user-wrapper">
          <a href="login-account.html" className="user-login">
            <span className="user-icon"><i className="feather-user" /></span>
            <span className="header-title">User</span>
          </a>
        </div>
      </li>
    </ul>
  </div>
  {/* notification-bottom end */}
  {/* back-to-top start */}
  <a href="javascript:void(0)" id="top" className="scroll">
    <span><i className="feather-arrow-up" /></span>
  </a>
 
  {/* Mirrored from spacingtech.com/html/banno/banno-ltr/contact-us-2.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 17 Mar 2024 10:19:06 GMT */}
</div>

  )
}

export default Contact