
import React, { useEffect, useState } from 'react'
import Navbar from "./navbar";
import './css/other-page.css'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function orderplaced() {
    const backendUrl = process.env.REACT_APP_BHARANI_BACKEND_URL;
    const [Cart, setCart] = useState([]);
    const [data,setData] = useState({
        orderid:'',
        appartment:'',
        address:'',
        city:'',
        state:'',
        date:'',
        total:'',
        name:'',
        pincode:'',
        country:'',
        phone:'',
        email:'', 
        products:[],
        paymentType:''

    });
    const location = useLocation()
    
    const query = new URLSearchParams(location.search);
    const encodedData = query.get('data');

    // Decode the Base64 string to get the original data
    const decodedData = JSON.parse(atob(encodedData));
   

    useEffect(()=>{
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCart(cartItems)
        
       
        fetchData()
      },[])

      const fetchData = async()=>{
        
        try{
            const response = await axios.get(`${backendUrl}/index/getOrdersbyid/${decodedData}`);
            const data = await response.data;
            console.log('121122',data);
            setData({
                orderid: data.orderId,
                appartment: data.appartment,
                date: data.date,
                total:data.Amount,
                name: data.firstname +" "+ data.lastname,
                address: data.address,
                pincode:data.pincode,
                city:data.city,
                country:data.country,
                phone:data.Phone,
                email:data.email,
                products:data.product,
                paymentType:data.orderType
            });
        }catch(err){
            console.log(err);
        }
    }
    const shipping = data.total < 500 ?   100 : 0
  return (
    <div>

    <Navbar/>
  <main>
    {/* breadcrumb start */}
    <section className="breadcrumb-area">
      <div className="container">
        <div className="col">
          <div className="row">
            <div className="breadcrumb-index">
              {/* breadcrumb main-title start*/}
              <div className="breadcrumb-title">
                <h2>Order complete</h2>
              </div>
              {/* breadcrumb main-title end*/}
              {/* breadcrumb-list start */}
              <ul className="breadcrumb-list">
                <li className="breadcrumb-item-link">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item-link">
                  <span>Order complete</span>
                </li>
              </ul>
              {/* breadcrumb-list end */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* breadcrumb end */}
    {/* order-complete start */}
    <section className="section-ptb">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="order-area">
              {/* order-price start */}
              <div className="order-price">
                <ul className="total-order">
                  <li>
                    <span className="order-no">Order no. {data.orderid}</span>
                    <span className="order-date"><span className="order-no">Date. {data.date.slice(0,10)}</span></span>
                  </li>
                  <li>
                    <span className="total-price">Order total</span>
                    <span className="amount">₹{data.total}</span>
                  </li>
                </ul>
              </div>
              {/* order-price end */}
              {/* order-details start */}
              <div className="order-details">
                <span className="text-success order-i"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="#019812" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248s248-111.033 248-248S392.967 8 256 8m0 48c110.532 0 200 89.451 200 200c0 110.532-89.451 200-200 200c-110.532 0-200-89.451-200-200c0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971"/></svg></span>
                <h4>Thank you for order</h4>
                <span className="order-s">Your order will ship within few hours</span>
                <a href="track-page.html" className="tracking-link btn btn-style">Tracking details</a>
              </div>
              {/* order-details start */}
              {/* order-delivery start */}
              <div className="order-delivery">
                <ul className="delivery-payment">
                  <li className="delivery">
                    <h5>Delivery address</h5>
                    <span className="order-span" style={{textTransform:"uppercase"}}>{data.name}</span>
                    <span className="order-span">{data.address},{data.pincode}</span>
                    <span className="order-span">{data.city}</span>
                    <span className="order-span">{data.state}</span>
                    <span className="order-span">{data.country}</span>
                    <span className="order-span">{data.email}</span>
                    <span className="order-span">Mobile No :{data.phone}</span>
                  </li>
                  <li className="pay">
                    <h5>Order summary</h5>
                    <p className="o-price">Payment Type: <span className="o-price">{data.paymentType}</span></p>
                    <span className="order-span p-label">
                        {data.total>= 500 ? (
                            <>
                             <span className="n-price"> Product Total Price</span>
                             <span className="o-price">₹{data.total}</span>
                             </>
                        ):(
                            <>
                             <span className="n-price"> Price </span>
                             <span className="o-price">₹{data.total< 500 ? data.total - 100: data.total}</span>
                             
                             </>
                        )}
                     
   

                    </span>
                    {data.total< 500 ? (
                            <>
                             <span className="order-span p-label">
                      <span className="n-price">Shipping charge</span>
                      <span className="o-price">₹{shipping}</span>
                    </span>
                             </>
                        ):(
                            <><span className="order-span p-label">
                            <span className="n-price">Shipping charge</span>
                            <span className="o-price">₹0</span>
                          </span></>
                        )}
                    
                    <span className="order-span p-label">
                      <span className="n-price">Order Total</span>
                      <span className="o-price">₹{data.total}</span>
                    </span>
                  </li>
                </ul>
              </div>
              {/* order-delivery start */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* order-complete end */}
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
              <Link to='/cart'>   <a className="add-to-cart cart-count shopping-cart js-cart-drawer">
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
  {/* notification-bottom end */}
  {/* back-to-top start */}
  <a href="javascript:void(0)" id="top" className="scroll">
    <span><i className="feather-arrow-up" /></span>
  </a>
  {/* back-to-top end */}
  {/* jquery */}
  {/* bootstrap js */}
  {/* magnific-popup js */}
  {/* owl js */}
  {/* swiper-bundle js */}
  {/* slick js */}
  {/* waypoints js */}
  {/* counter js */}
  {/* main js */}
  {/* Mirrored from spacingtech.com/html/banno/banno-ltr/order-complete.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 17 Mar 2024 10:19:06 GMT */}
</div>

  )
}

export default orderplaced
