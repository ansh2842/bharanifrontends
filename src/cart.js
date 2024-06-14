import React, { useEffect, useRef, useState } from 'react'
import "./css/account.css";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/topstore.css";
import Navbar from "./navbar";
import axios from 'axios';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
function Cart() {
     const backendUrl = process.env.REACT_APP_BHARANI_BACKEND_URL;
     const [category, setCategory] = useState([]);
     const [Cart, setCart] = useState([]);
     const [quantity, setQuantity] = useState(1);
    const swiperRef = useRef(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [newrr,setnewarr]= useState([]);
    const [model,newModel] = useState({
      image:null,
      name:'',
      flavour:'',
      text:'',
      price:'',
      mrp:'',
      category:''
    });
    useEffect(()=>{
      const topElement = document.getElementById('top');

      window.addEventListener('scroll', () => {
        
        if (window.scrollY > 0) {
          
          topElement.classList.add('show');
        } else {
         
          topElement.classList.remove('show');
        }
      });
        const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
       setCart(existingCartItems)

       const fetchData = async()=>{
        try {
          const response = await axios.get(`${backendUrl}/users/getCategoryDetails`);
          setCategory(response.data);
        } catch (err) {
          console.log(err);
        }
        try {
          const response = await axios.get(`${backendUrl}/users/getnewarrivalDetails`);
          setnewarr(response.data);
        } catch (err) {
          console.log(err);
        }
       }

       
       fetchData();
    },[])
    const addcart = async (id) => {
      setQuantity(1);
        var miniCart = document.querySelector(".mini-cart");
        miniCart.classList.add("active");
    
        try {
           
    
            const response = await axios.get(`${backendUrl}/index/editgetProdcut/${id}`);
            const data = response.data;
    
            const newCartItem = {
                id: data._id ,
                image: data.image || [],
                name: data.name || "",
                mrp: data.mrp  || 0,
                quantity: quantity || 1,
                price: data.price ||  0,
                category: data.category ||  "",
                flavour: data.flavour ||  "",
            };
    
            const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            existingCartItems.push(newCartItem);
            localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
    
            setCart(existingCartItems);
        } catch (err) {
            console.log(err);
        }
        try{
          const responses = await axios.get(`${backendUrl}/index/editnewgetProdcut/${id}`);
          const datas = responses.data;
          const newCartItem = {
            id:  datas._id,
            image: datas.image || [],
            name:  datas.name || "",
            mrp:  datas.mrp || 0,
            quantity: quantity || 1,
            price:  datas.price || 0,
            category:  datas.category || "",
            flavour:  datas.flavour || "",
        };
    
        const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        existingCartItems.push(newCartItem);
        localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
    
        setCart(existingCartItems);
        }catch(err){
          console.log(err);
        }
    };
    const increase = (id) => {
      setQuantity(prevQuantity => prevQuantity + 1);
    
      const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
      const index = existingCartItems.findIndex((item) => item.id === id);
  
      if (index !== -1) {
        existingCartItems[index].quantity++;
  
        localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
  
        setCart(existingCartItems);
      }
    };
    const decrease = (id) => {
      setQuantity(prevQuantity => prevQuantity - 1);
    
      const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
      const index = existingCartItems.findIndex((item) => item.id === id);
  
      if (index !== -1) {
        if (existingCartItems[index].quantity > 1) {
          existingCartItems[index].quantity--;
        }
        localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
        setCart(existingCartItems);
      }
    };
      
      const subtotal = Cart.reduce((acc, item) => {
        return acc + (item.quantity * item.price);
      }, 0);
      
      const deletecart = (id) => {
        
        try {
      
          let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      
          
          const index = cartItems.findIndex((item) => item.id === id);
      
          if (index !== -1) {
            cartItems.splice(index, 1);
            
            
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            setCart(cartItems);
            console.log("Item deleted from cart successfully.");
          } else {
            console.log("Item not found in cart.");
          }
        } catch (error) {
          console.error("Error deleting item from cart:", error);
        }
      };
      
      function clear (){
       localStorage.removeItem('cartItems');
       window.location.reload();
        
      }

      const productviewnew =async(id)=>{

        setQuantity(1)
        
          try {
            const response = await axios.get(`${backendUrl}/index/editnewgetProdcut/${id}`);
            const data = await response.data;
            newModel({
              name: data.name,
              image: data.image,
              text: data.text,
              mrp: data.mrp,
              price: data.price,
              category: data.category,
              flavour: data.flavour,
              id:data._id,
            })
           
      
           
          } catch (err) {
            console.log(err);
          }
        
        }
        
        const handleThumbnailClick = (index) => {
          if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
          }
        };

        const cartclose = () => {
          var miniCart = document.querySelector(".mini-cart");
          miniCart.classList.remove("active");
        };
      
        function cart() {
          var miniCart = document.querySelector(".mini-cart");
          miniCart.classList.toggle("active");
        }
      
        
        const handleScrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth' // Add smooth scrolling behavior
          });
        };


  return (
    <div>


  
  <main>
    <Navbar />
    {/* breadcrumb start */}
    <section className="breadcrumb-area">
      <div className="container">
        <div className="col">
          <div className="row">
            <div className="breadcrumb-index">
              
              <div className="breadcrumb-title">
                <h2>Your Shopping Cart</h2>
              </div>
              {/* breadcrumb main-title end*/}
              {/* breadcrumb-list start */}
              <ul className="breadcrumb-list">
                <li className="breadcrumb-item-link">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item-link">
                  <span>Your Shopping Cart</span>
                </li>
              </ul>
              {/* breadcrumb-list end */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* breadcrumb end */}
    <section className="cart-page section-ptb">
      <form method="post">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="cart-page-wrap">
                <div className="cart-wrap-info">
                  <div className="cart-item-wrap">
                    <div className="cart-title">
                      <h6>My cart:</h6>
                      <span className="cart-count">
                        <span className="cart-counter">{Cart.length}</span>
                        <span className="cart-item-title">Item</span>
                      </span>
                    </div>
                    <div className="item-wrap">
                        {Cart.map((item,indx)=>(
                      <ul className="cart-wrap" key={indx}>
                       
                            <>
                            <li className="item-info" >
                         
                            <div className="item-img">
                              <a href="product-template.html">
                                <img src={`${backendUrl}/uploads/${item.image[1]}`} className="img-fluid" alt="p-1" />
                              </a>
                            </div>
                           
                            <div className="item-title">
                              <a href="product-template.html">{item.name}</a>
                              <span className="item-option">
                                <span className="pro-variant-title">Flavor:</span>
                                <span className="pro-variant-type">{item.flavour}</span>
                              </span>
                              <span className="item-option">
                                <span className="item-price">₹{item.price}</span>
                              </span>
                            </div>
                           
                          </li>
                          <form onSubmit={(e) => e.preventDefault()}>
    <li className="item-qty">
      <div className="product-quantity-action">
        <div className="product-quantity">
          <div className="cart-plus-minus">
            <button type="button" className="dec qtybutton minus" onClick={() => decrease(item.id)}>-</button>
            <input type="text" name="quantity" value={item.quantity} readOnly />
            <button type="button" className="inc qtybutton plus" onClick={() => increase(item.id)}>+</button>
          </div>
        </div>
      </div>
      <div className="item-remove">
        <span className="remove-wrap">
          <a onClick={() => deletecart(item.id)} style={{cursor:"pointer"}} className="text-danger">Remove</a>
        </span>
      </div>
    </li>
  </form>
  <li className="item-price">
    <span className="amount full-price">₹{item.quantity * item.price}</span>
  </li>
                           
                        </>
                      </ul>
                        ))}
                        {/* cart-price end */}
                     
                     
                    </div>
                    <div className="cart-buttons">
                     <Link to='/userproduct'><a  className="btn-style2">Continue shopping</a></Link> 
                      <a  onClick={()=>clear()} style={{cursor:"pointer"}} className="btn-style2">Clear cart</a>
                    </div>
                  </div>
                  <div className="special-notes">
                    <label>Special instructions for seller</label>
                    <textarea rows={10} name="note" defaultValue={""} />
                  </div>
                </div>
                <div className="cart-info-wrap">
                  {/* <div className="cart-calculator cart-info">
                    <h6>Shipping info</h6>
                    <div className="culculate-shipping" id="shipping-calculator">
                      <ul>
                        <li className="field">
                          <label>Country</label>
                          <select>
                            <option>India</option>
                            <option>Afghanistan</option>
                            <option>Austria </option>
                            <option>Belgium</option>
                            <option>Bhutan</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                            <option>Maldives</option>
                            <option>Nepal</option>
                          </select>
                        </li>
                        <li className="field">
                          <label>State</label>
                          <select>
                            <option>Gujarat</option>
                            <option>Andaman and Nicobar Islands</option>
                            <option>Andhra Pradesh</option>
                            <option>Bihar</option>
                            <option>Chandigarh</option>
                            <option>Delhi</option>
                            <option>Haryana</option>
                            <option>Jammu and Kashmir</option>
                            <option>Karnataka</option>
                            <option>Ladakh</option>
                          </select>
                        </li>
                        <li className="field cpn-code">
                          <label>Postal/Zip Codes</label>
                          <input type="text" name="q" placeholder="Zip/Postal Code" />
                        </li>
                      </ul>
                      <div className="shipping-info">
                        <a href="javascript:void(0)" className="get-rates">Calculate</a>
                      </div>
                    </div>
                  </div> */}
                  <div className="cart-total-wrap cart-info">
                    <div className="cart-total">
                      <div className="total-amount">
                        <h6 className="total-title">Total</h6>
                        <span className="amount total-price">€{subtotal}</span>
                      </div>
                      <div className="proceed-to-discount">
                        <input type="text" disabled name="discount" placeholder="Discount code" />
                      </div>
                      <Link to='/checkout'>
                      <div  className="proceed-to-checkout">
                   
                   <a >Checkout</a>
                 </div>
                      </Link>
                     
                      <div className="cart-payment-icon">
                        <a href="javascript:void(0)" className="payment-icon">
                          <img src="img/payment/visa.svg" className="img-fluid" alt="visa" />
                          <img src="img/payment/master.svg" className="img-fluid" alt="master" />
                          <img src="img/payment/express.svg" className="img-fluid" alt="express" />
                          <img src="img/payment/paypal.svg" className="img-fluid" alt="paypal" />
                          <img src="img/payment/diners.svg" className="img-fluid" alt="diners" />
                          <img src="img/payment/discover.svg" className="img-fluid" alt="discover" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
    {newrr.length && newrr.length >0 ?(
      <section className="special-category collection-category-template section-ptb">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="collection-category">
              <div className="section-capture">
                <div className="section-title">
                  <span className="sub-title">New Arrival Product</span>
                  <h2>
                    <span>New Arrivals</span>
                  </h2>
                </div>
              </div>
              <div className="collection-wrap">
                <div className="collection-slider swiper" id="pro-template-2">
                <Swiper
                id="pro-template-2"
                slidesPerView={window.innerWidth < 700 ? 2 : 4}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
            >
                    
             
                   
                  {newrr.map((item,index)=>(
                     <SwiperSlide className="swiper-slide" key={index}>
                     {/* product start */}
                     <div className="single-product-wrap">
                       {/* product-img start */}
                       <div className="product-image">
                         <a href="product-template2.html" className="pro-img">
                           <img
                             src={`${backendUrl}/uploads/${item.image[0]}`}
                             className="img-fluid img1"
                             alt="p-45"
                           />
                           <img
                              src={`${backendUrl}/uploads/${item.image[1]}`}
                             className="img-fluid img2"
                             alt="p-46"
                           />
                         </a>
                         {/* product-action start */}
                         <div className="product-action" style={{ cursor: "pointer" }}>
                              <a className="wishlist-product">
                                <span className="tooltip-text">Buy Now</span>
                                <span className="wishlist-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="white"
                                      d="M8 3h10l-1 2h-3.26c.48.58.84 1.26 1.05 2H18l-1 2h-2a5.558 5.558 0 0 1-4.8 4.96V14h-.7l6 7H13l-6-7v-2h2.5c1.76 0 3.22-1.3 3.46-3H7l1-2h4.66C12.1 5.82 10.9 5 9.5 5H7z"
                                    />
                                  </svg>
                                </span>
                              </a>
                              <a className="add-to-cart" onClick={() => addcart(item._id)}>
                                <span className="tooltip-text">Add to cart</span>
                                <span className="cart-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="white"
                                      d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11q-.425 0-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11q-.425 0-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4q-.825 0-1.412.588T10 6M6 20V8z"
                                    />
                                  </svg>
                                </span>
                              </a>
                              <a  data-toggle="modal" href="#quickviews" onClick={()=>productviewnew(item._id)}>
                                <span className="tooltip-text" style={{ cursor: "pointer" }}>
                                  Quickview
                                </span>
                                <span className="quickview-icon" style={{ cursor: "pointer" }}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 256 256"
                                  >
                                    <path
                                      fill="white"
                                      d="M251 123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63 57.67 164 44 128 44S59.37 57.67 33.51 83.52C14.16 102.87 5.4 122.32 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212s68.63-13.66 94.48-39.51c19.36-19.35 28.12-38.79 28.49-39.61a12.08 12.08 0 0 0 .03-9.75m-46.06 33C183.47 177.27 157.59 188 128 188s-55.47-10.73-76.91-31.88A130.36 130.36 0 0 1 29.52 128a130.45 130.45 0 0 1 21.57-28.11C72.54 78.73 98.41 68 128 68s55.46 10.73 76.91 31.89A130.36 130.36 0 0 1 226.48 128a130.45 130.45 0 0 1-21.57 28.12ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20"
                                    />
                                  </svg>
                                </span>
                              </a>
                            </div>
                         {/* product-action end */}
                       </div>
                       {/* product-img end */}
                       {/* product-content start */}
                       <div className="product-content">
                       <h6>
                           <a>{item.name}</a>
                         </h6>
                         <div className="type-vendor">
                          
                           <a style={{textTransform:'capitalize'}} className="product-type">
                           {category.find((name) => name._id === item.category)?.name || ""}
                           </a>
                           <span>/</span>
                           
                         </div>
                         {/* product-title start */}
                        
                         {/* product-title end */}
                         {/* product-price start */}
                         <div className="price-box">
                            <span className="new-price">₹{item.price}</span>
                            <span className="old-price">₹{item.mrp}</span>
                          </div>
                          {/* Product rating */}
                          <div className="product-rating">
                              <span className="star-rating">
                                {[1, 2, 3, 4, 5].map((index) => (
                                  <FontAwesomeIcon
                                    key={index}
                                    style={{ color: "#fe9704" }}
                                    icon={faStar}
                                  />
                                ))}
                              </span>
                            </div>
                         {/* product-rating end */}
                         {/* product-action start */}
                         <div className="product-action">
                              <a className="wishlist-product">
                                <span className="tooltip-text">Buy Now</span>
                                <span className="wishlist-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="white"
                                      d="M8 3h10l-1 2h-3.26c.48.58.84 1.26 1.05 2H18l-1 2h-2a5.558 5.558 0 0 1-4.8 4.96V14h-.7l6 7H13l-6-7v-2h2.5c1.76 0 3.22-1.3 3.46-3H7l1-2h4.66C12.1 5.82 10.9 5 9.5 5H7z"
                                    />
                                  </svg>
                                </span>
                              </a>
                              <a  className="add-to-cart">
                                <span className="tooltip-text">Add to cart</span>
                                <span className="cart-icon" onClick={() => addcart(item._id)}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="white"
                                      d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11q-.425 0-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11q-.425 0-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4q-.825 0-1.412.588T10 6M6 20V8z"
                                    />
                                  </svg>
                                </span>
                              </a>
                              
                                <a  data-toggle="modal" href="#quickview" onClick={()=>productview(item._id)}>
                              
                                <span className="tooltip-text">Quickview</span>
                                <span className="quickview-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 256 256"
                                  >
                                    <path
                                      fill="white"
                                      d="M251 123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63 57.67 164 44 128 44S59.37 57.67 33.51 83.52C14.16 102.87 5.4 122.32 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212s68.63-13.66 94.48-39.51c19.36-19.35 28.12-38.79 28.49-39.61a12.08 12.08 0 0 0 .03-9.75m-46.06 33C183.47 177.27 157.59 188 128 188s-55.47-10.73-76.91-31.88A130.36 130.36 0 0 1 29.52 128a130.45 130.45 0 0 1 21.57-28.11C72.54 78.73 98.41 68 128 68s55.46 10.73 76.91 31.89A130.36 130.36 0 0 1 226.48 128a130.45 130.45 0 0 1-21.57 28.12ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20"
                                    />
                                  </svg>
                                </span>
                              </a>
                            </div>
                         {/* product-action end */}
                       </div>
                       {/* product-content end */}
                     </div>
                     {/* product end */}
                   </SwiperSlide>
                  ))}

                    
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    ):(
      <></>
    )}
        
    {/* instra start */}
   
    {/* instra end */}
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

  <div className="productmodal">
        <div className="modal fade" id="quickviews" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-quickview">Quickview</h6>
                <button type="button" className="close-btn" data-dismiss="modal">
     <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
              />
            </svg>
</button>

              </div>
              
              <div className="modal-body">
                {/* swiper slider start */}
                <div className="quickview-main-area">
                  <div className="quickview-slider">
                    <div className="swiper gallery-top">
                      {model.image && model.image.length > 0 ?(

                      <Swiper className="swiper-wrapper"
                      ref={swiperRef}
                    
                      
                      >
                          {model.image.map((item, index) => (
            <SwiperSlide  key={index}
            
            >
              <a href="product-template.html">
                <img src={`${backendUrl}/uploads/${item}`} className="img-fluid" alt={`p-${index}`} />
              </a>
            </SwiperSlide>
          ))}
         
                      </Swiper>
                      ):(
                        <> </>
                      )}


                    
                 
                    <div className="swiper-button">
                    <button className="quick-prev hh" onClick={() =>  swiperRef.current.swiper.slidePrev()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 20 20"><path fill="black" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"/></svg>
                    </button>
                    <button className="quick-next hh" onClick={() =>  swiperRef.current.swiper.slideNext()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 48 48"><path fill="black" d="M17.1 5L14 8.1L29.9 24L14 39.9l3.1 3.1L36 24z"/></svg>
                    </button>
                </div>
            
                  
    
                    </div>
                    <div className="swiper gallery-thumbs">
        <Swiper className="swiper-wrapper"
         onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        >
          {model.image && model.image.length > 0 ? (
            model.image.map((item, index) => (
              <SwiperSlide style={{width:"26%"}} className="swiper-slide" key={index}>
                <a  onClick={() => handleThumbnailClick(index)}>
                  <img  src={`${backendUrl}/uploads/${item}`} className="img-fluid" alt={`thumb-${index}`} />
                </a>
              </SwiperSlide>
            ))
          ) : (
            <div className="swiper-slide">
              <a href="#">
                {/* Placeholder image or text */}
                No Image Available
              </a>
            </div>
          )}
        </Swiper>
      </div>
    </div>

    
  
                  {/* swiper slider end */}
                  {/* quick-view content start */}
                  <div className="quick-view-content">
                   
                    <div className="product-title">
                      <h6 className="product_title" style={{textTransform:"capitalize",fontSize:"17px"}}>{model.name}</h6>
                    </div>
                    {/* product-price start */}
                    <div className="price-box">
                      <span className="new-price">₹{model.price}</span>
                      <span className="old-price">₹{model.mrp}</span>
                    </div>
                    {/* product-price end */}
                    <div style={{position:'relative',left:"10px"}} className="product-desc">
                      <p  className="listts" dangerouslySetInnerHTML={{__html:model.text} }>
                        
                      </p>
                    </div>
                    <form onSubmit={(e)=> e.preventDefault()}>
                      <div className="quick-view-select variants select-option-part">
                        <div className="variants_selects">
                          <div className="selector-wrapper">
                            <label>Flavor:</label>
                          </div>
                          <div className="product-desc">
                            <p style={{textTransform:"capitalize",fontSize:"15px"}}>{model.flavour}</p>
                          </div>
                        </div>
                      </div>
                      <div className="product-quantity-action">
                        <h6>Quantity:</h6>
                        <div className="product-quantity">
                    <div className="cart-plus-minus">
                      <button onClick={() => decrease(model.id)} className="dec qtybutton minus">
                        -
                      </button>
                      <input type="text" name="quantity" value={quantity} readOnly />
                      <button className="inc qtybutton plus" onClick={() => increase(model.id)}>
                        +
                      </button>
                    </div>
                  </div>
                      </div>
                      <div className="quickview-buttons">
                        <button type="submit" className="addtocartqv" data-dismiss="modal" onClick={() => addcart(model.id)}>
                          <span className="cart-title">Add to cart</span>
                        </button>
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
          {Cart.length == 1 ? (
            <p>
              <span className="cart-count-desc">There is only </span>

              <span style={{ color: "black", fontWeight: "bolder" }}>&nbsp;1&nbsp;</span>
              <span className="cart-count-desc">product</span>
            </p>
          ) : (
            <p>
              <span className="cart-count-desc">There are </span>

              <span style={{ color: "black", fontWeight: "bolder" }}>
                &nbsp;{Cart.length}&nbsp;
              </span>
              <span className="cart-count-desc">products</span>
            </p>
          )}
          {/* minicart-fill end */}
          {/* minicart-close start */}
          <button className="cart-close" onClick={() => cartclose()}>
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
          {/* minicart-close end */}
        </div>
        {/* minicart empty-content start */}
        <div className="empty-cart d-none">
          <span className="cart-icon">
            <i className="bi bi-bag-dash" />
          </span>
          <a href="collection.html" className="btn btn-style">
            Continue shopping
          </a>
        </div>
        {/* minicart empty-content end */}
        <ul className="cart-item">
          {Cart.map((item, index) => (
            <li className="cart-product" key={index}>
              <div className="cart-img">
                {/* minicart-img start */}
                <a href="product-template1.html" className="img-area">
                  <img
                    src={`${backendUrl}/uploads/${item.image[1]}`}
                    className="img-fluid"
                    alt="p-1"
                  />
                </a>
                {/* minicart-img end */}
              </div>
              <div className="cart-content">
                {/* minicart-title start */}
                <h6>
                  <a href="product-template2.html">{item.name}</a>
                </h6>
                {/* minicart-title end */}
                <div className="product-info">
                  {/* minicart-price start */}
                  <div className="info-item">
                    <span className="product-qty">1</span>
                    <span>×</span>
                    <span className="product-price">{item.price}</span>
                  </div>
                  {/* minicart-price end */}
                </div>
                <div className="product-quantity-action">
                  <div className="product-quantity">
                    <div className="cart-plus-minus">
                      <button onClick={() => decrease(item.id)} className="dec qtybutton minus">
                        -
                      </button>
                      <input type="text" name="quantity" value={item.quantity} />
                      <button className="inc qtybutton plus" onClick={() => increase(item.id)}>
                        +
                      </button>
                    </div>
                  </div>
                  {/* minicart delete-icon start */}
                  <div className="delete-cart">
                    <a
                     
                      onClick={() => deletecart(item.id)}
                      className="delete-icon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.4em"
                        height="1.4em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="black"
                          d="M7.615 20q-.67 0-1.143-.472Q6 19.056 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463zM17 6H7v12.385q0 .269.173.442t.442.173h8.77q.23 0 .423-.192q.192-.193.192-.423zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"
                        />
                      </svg>
                    </a>
                  </div>
                  {/* minicart delete-icon end */}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className="subtotal-area">
          <li className="subtotal-info">
            <div className="subtotal-titles">
              {/* minicart total-title start */}
              <h6 className="cart-total">Subtotal:</h6>
              {/* minicart total-title end */}
              {/* minicart total-price start */}
              <span className="subtotal-price">{subtotal}</span>
              {/* minicart total-price end */}
            </div>
          </li>

          <li className="mini-info">
            {/* minicart agree-text start */}

            {/* minicart agree-text end */}
            {/* minicart button start */}
            <div className="cart-btn">
              <Link to='/cart'> <a  className="btn btn-style2">
                View cart
              </a></Link>
             <Link to='/checkout'> <a  className={`btn btn-style2 checkout`}>
                Checkout
              </a></Link>
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
  {/* screen-bg end */}
  {/* preloader start */}
  {/* <div className="preloader">
    <div className="loader" />
  </div> */}
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
              <Link to='/cart'>    <a className="add-to-cart cart-count shopping-cart js-cart-drawer">
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
  <div className="screen-bg" />
      <a  id="top" className="scroll" onClick={handleScrollToTop}>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><g fill="none" ><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="white" d="M11.293 8.293a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414L12 10.414l-4.95 4.95a1 1 0 0 1-1.414-1.414z"/></g></svg>
        </span>
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
  {/* Mirrored from spacingtech.com/html/banno/banno-ltr/cart-page.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 17 Mar 2024 10:19:06 GMT */}
</div>

  )
}

export default Cart

