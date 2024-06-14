import React, { useEffect, useState } from 'react'
import Navbar from "./navbar";
import './css/other-page.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const generateId = () =>{
  
  const letters = Array.from({ length: 8 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('');
  return `${letters}`
}
function Checkout() {


  const backendUrl = process.env.REACT_APP_BHARANI_BACKEND_URL;
  const  navigate =useNavigate()
  const [firstName,SetFirstName] = useState()
  const [lastName,SetLastName] = useState()
  const [email,SetEmail] = useState()
  const [phoneNumber,setPhoneNumber] = useState()
  const [pinCode,setPinCode] = useState()
  const [state,setState] = useState()
  const [address,setAddress] = useState()
  const [city,setCity] = useState()
  const [appartment,setAppartment] = useState()
  const [companyname,setCompanyName] = useState()
  const [shippingDetails,setShippingDetails] = useState()
  const [Cart,setCart] = useState([])
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const key = process.env.REACT_APP_RAZORPAY_KEYID
  const shipping = 100
  
  const [fnameerr,setfnamerr] = useState('')
  const [lnamerr ,setlnamerr] = useState('')
  const [femailrr,SetfEmailrr] = useState()
  const [fphoneNumberrr,setfPhoneNumberrr] = useState()
  const [fpinCoderr,setfPinCoderr] = useState()
  const [fstaterr,setfStaterr] = useState()
  const [faddressrr,setfAddressrr] = useState()
  const [fcityrr,fsetCityrr] = useState()
  const [fapprtmmentrr,fsetappartmentrr] = useState()

 

  
  useEffect(()=>{
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(cartItems)

    const btnscl = document.querySelectorAll('.checks')
    const bnt =  document.querySelector('.btns')

    btnscl.forEach(items=>{
      items.addEventListener("click",()=>{
        bnt.classList.remove('disabled')
      }
    )})
  },[])

  const subtotal = Cart.reduce((acc, item) => {
    return acc + (item.quantity * item.price);
  }, 0);
  const amount = subtotal < 500 ?  subtotal + 100 : subtotal;

  

  const handleChange = (event) => {
    const { id } = event.target;
    setSelectedPaymentMethod(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createOrder();
  };

  const createOrder = async () => {
    let hasError = false;
  
    if (!firstName || firstName.length === 0) {
      setfnamerr('Enter your first name');
      hasError = true;
    } else {
      setfnamerr('');
    }
  
    if (!lastName || lastName.length === 0) {
      setlnamerr('Enter your last name');
      hasError = true;
    } else {
      setlnamerr('');
    }
  
    if (!email || email.length === 0) {
      SetfEmailrr('Enter your email address');
      hasError = true;
    } else {
      SetfEmailrr('');
    }
  
    if (!phoneNumber || phoneNumber.length === 0) {
      setfPhoneNumberrr('Enter your Phone Number');
      hasError = true;
    } else {
      setfPhoneNumberrr('');
    }
  
    if (!pinCode || pinCode.length === 0) {
      setfPinCoderr('Enter your pincode');
      hasError = true;
    } else {
      setfPinCoderr('');
    }
  
    if (!state || state.length === 0) {
      setfStaterr('Enter your state');
      hasError = true;
    } else {
      setfStaterr('');
    }
  
    if (!address || address.length === 0) {
      setfAddressrr('Enter your address');
      hasError = true;
    } else {
      setfAddressrr('');
    }
  
    if (!city || city.length === 0) {
      fsetCityrr('Enter your city');
      hasError = true;
    } else {
      fsetCityrr('');
    }
  
    if (!appartment || appartment.length === 0) {
      fsetappartmentrr('Enter your appartment');
      hasError = true;
    } else {
      fsetappartmentrr('');
    }
  
    if (hasError) {
      return; // Stop further execution if there's an error
    }
  
    const data = {
      orderplacedID: generateId(),
      firstname: firstName,
      lastname: lastName,
      email: email,
      Phone: phoneNumber,
      pincode: pinCode,
      state: state,
      address: address,
      city: city,
      appartment: appartment,
      companyname: companyname,
      shippingDetails: shippingDetails,
      cart: Cart,
      Amount: amount
    };
  
    if (selectedPaymentMethod === 'cod') {
      try {
        await axios.post(`${backendUrl}/index/codposts`, data);
        console.log('done');
        const encodedData = btoa(JSON.stringify(data.orderplacedID));
        navigate(`/orderplaced?data=${encodedData}`);
      } catch (err) {
        console.log(err);
      }
    }
  
    if (selectedPaymentMethod === 'upi') {
      const currency = 'INR';
      const reciptId = '152685';
      try {
        const response = await fetch(`${backendUrl}/index/pay`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            amount: amount * 100,
            currency,
            receipt: reciptId
          })
        });
  
        const order = await response.json();
        console.log('order:', order);
  
        const option = {
          key: key,
          amount: amount * 100, 
          currency,
          name: 'Bharani',
          description: 'The product description',
          image: 'https://fitnesshpclient.web.app/static/media/gym%20logo.77aef7195e0315dcb50d.png',
          order_id: order.id,
          handler: async function(response) {
            const body = {
              ...response,
              orderplacedID: generateId(),
              firstname: firstName,
              lastname: lastName,
              email: email,
              Phone: phoneNumber,
              pincode: pinCode,
              state: state,
              address: address,
              city: city,
              appartment: appartment,
              companyname: companyname,
              shippingDetails: shippingDetails,
              cart: Cart,
              Amount: amount,
            };
            const validateResponse = await fetch(`${backendUrl}/index/validate`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            });
            const jsonResponse = await validateResponse.json();
            console.log('jsonResponse:', jsonResponse);
            const encodedData = btoa(JSON.stringify(body.orderplacedID));
            navigate(`/orderplaced?data=${encodedData}`);
          },
          prefill: {
            name: 'payment',
            email: 'email',
            contact: 'phoneNumber'
          },
          notes: {
            address: 'This is the sample address'
          },
          theme: {
            color: '#3399cc'
          }
        };
  
        const rzp1 = new Razorpay(option);
        rzp1.on('payment.failed', function(response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
  
        rzp1.open();
        event.preventDefault();
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  
  return (
    <div>

<Navbar/>

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
                  <h2>Checkout</h2>
                </div>
                {/* breadcrumb main-title end*/}
                {/* breadcrumb-list start */}
                <ul className="breadcrumb-list">
                  <li className="breadcrumb-item-link">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item-link">
                    <span>Checkout 1</span>
                  </li>
                </ul>
                {/* breadcrumb-list end */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb end */}
      <section className="section-ptb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="checkout-area">
                <div className="billing-area">
                  <form>
                    <h2>Billing details</h2>
                    <div className="billing-form">
                      <ul className="billing-ul input-2">
                        <li className="billing-li input">
                          <label>First name</label>
                          <input type="text" onChange={(e)=> SetFirstName(e.target.value)} name="f-name" placeholder="First name" />
                          <label style={{color:"red"}}>{fnameerr}</label>
                        </li>
                        <li className="billing-li">
                          <label>Last name</label>
                          <input type="text" onChange={(e)=> SetLastName(e.target.value)}  name="l-name" placeholder="Last name" />
                          <label style={{color:"red"}}>{lnamerr}</label>
                        </li>
                      </ul>
                      <ul className="billing-ul">
                        <li className="billing-li">
                          <label>Company name (Optional)</label>
                          <input type="text" onChange={(e)=> setCompanyName(e.target.value)}  name="company details" placeholder="Company name" />
                        </li>
                      </ul>
                      <ul className="billing-ul">
                        <li className="billing-li">
                          <label>Country</label>
                          <select>
                           <option selected>India</option>
                          </select>
                        </li>
                      </ul>
                      <ul className="billing-ul">
                        <li className="billing-li">
                          <label>Street address</label>
                          <input type="text" onChange={(e)=> setAddress(e.target.value)}  name="address" placeholder="Street address" />
                          <label style={{color:"red"}}>{faddressrr}</label>
                        </li>
                      </ul>
                      <ul className="billing-ul">
                        <li className="billing-li">
                          <label>Apartment,suite,unit etc.</label>
                          <input type="text" onChange={(e)=> setAppartment(e.target.value)}  name="--" />
                          <label style={{color:"red"}}>{fapprtmmentrr}</label>
                        </li>
                      </ul>
                      <ul className="billing-ul">
                        <li className="billing-li">
                          <label>Town / City</label>
                          <input type="text" onChange={(e)=> setCity(e.target.value)}  name="city" />
                          <label style={{color:"red"}}>{fcityrr}</label>
                        </li>
                      </ul>
                      <ul className="billing-ul">
                        <li className="billing-li">
                          <label>State</label>
                          <input type="text" onChange={(e)=> setState(e.target.value)}  name="--" />
                          <label style={{color:"red"}}>{fstaterr}</label>
                        </li>
                      </ul>
                      <ul className="billing-ul">
                        <li className="billing-li">
                          <label>Postcode / Zip</label>
                          <input type="text" onChange={(e)=> setPinCode(e.target.value)}  name="--" />
                          <label style={{color:"red"}}>{fpinCoderr}</label>
                        </li>
                      </ul>
                      <ul className="billing-ul input-2">
                        <li className="billing-li">
                          <label>Email address</label>
                          <input type="text" name="mail" onChange={(e)=> SetEmail(e.target.value)}  placeholder="Email address" />
                          <label style={{color:"red"}}>{femailrr}</label>
                        </li>
                        <li className="billing-li">
                          <label>Phone number</label>
                          <input type="text" name="phone" onChange={(e)=> setPhoneNumber(e.target.value)}  placeholder="Phone number" />
                          <label style={{color:"red"}}>{fphoneNumberrr}</label>
                        </li>
                      </ul>
                    </div>
                  </form>
                  <div className="billing-details">
                    <form>
                      <h2>Shipping details</h2>
                      <ul className="shipping-form pro-submit">
                        <li className=" label-info">
                          <label className="cust-checkbox-label size 16gb">
      <input 
      value='In Stock'
        type='radio' 
        name='stockStatus'
        onChange={(e)=> setShippingDetails(e.target.value)}
      /> 
      <span className="filter-name">Ship to different address?</span>
   
    </label>
                        </li>
                        <li className="comment-area">
                          <label>Order notes(Optional)</label>
                          <textarea name="comments" rows={5} cols={80} defaultValue={""} />
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
                <div className="order-area">
                <div className="check-pro">
  {Cart.length && Cart.length > 0 ? (
    <div>
      <h2 >In your cart ({Cart.length})</h2>
      <ul className="check-ul">
        {Cart.map((item, index) => (
          <li key={index}>
            <div className="check-pro-img">
            <Link to='/userproduct'> <a>
                <img src={`${backendUrl}/uploads/${item.image[0]}`} className="img-fluid" alt="p-1" />
              </a></Link> 
            </div>
            <div className="check-content">
              <a style={{ textTransform: "capitalize", color: "blue" }}>{item.name}</a>
              <span className="check-code-blod">
                <span>Product Flavour:</span>
                <span>{item.flavour}</span>
              </span>
              <span className="check-qty">{item.quantity} X </span>
              <span className="check-price">₹{item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <h2>In your cart (0)</h2>
      <div className="check-content" style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <a style={{ textTransform: "capitalize", color: "blue" }}>No Products in your cart</a>
      </div>
    </div>
  )}
</div>

                  <h2>Your order</h2>
                  <ul className="order-history">
                    <li className="order-details">
                      <span>Product:</span>
                      <span>Total</span>
                    </li>
                    {Cart.length && Cart.length >0 ?(
                      <div>
                      {Cart.map((item,index)=>(
                      

                      <li className="order-details" key={index}>
                      <span style={{textTransform:"capitalize"}}>{item.name}</span>
                      <span>₹{item.quantity * item.price}</span>
                    </li>
                      
                      ))}
                      </div>
                    ):(
                      <></>
                    )}

<div>
  <li className="order-details">
    <span>Subtotal</span>
    <span>₹{subtotal}</span>
  </li>
  {subtotal && subtotal >= 500 ?(
    <li className="order-details">
    <span>Shipping Charge</span>
    <span>Free shipping</span>
  </li>
  ):(
    <li className="order-details">
    <span>Shipping Charge</span>
    <span>₹100</span>
  </li>
  )}
  
  {subtotal && subtotal >= 500 ?(
     <li className="order-details">
     <span>Total</span>
     <span>₹{subtotal}</span>
   </li>
  ):(
    <li className="order-details">
    <span>Total</span>
    <span>₹{subtotal + shipping }</span>
  </li>
  )}
 
</div>

                    
                   
                  </ul>
                  <form>
      <ul className="order-form pro-submit">
        <li>
          <label className="cust-checkbox-label size 16gb">
            <input 
              value='In Stock'
              type='radio' 
              name='stockStatus'
              className='checks'
              id='upi'
              checked={selectedPaymentMethod === 'upi'}
              onChange={handleChange}
            /> 
            <span className="filter-name">UPI</span>
          </label>
        </li>
        <li>
          <label className="cust-checkbox-label size 16gb">
            <input 
              value='In Stock'
              type='radio' 
              name='stockStatus'
              className='checks'
              id='cod'
              checked={selectedPaymentMethod === 'cod'}
              onChange={handleChange}
            /> 
            <span className="filter-name">COD</span>
          </label>
        </li>
        <li className="pay-icon">
          <a href="javascript:void(0)"><i className="fa-solid fa-credit-card"></i></a>
          <a href="javascript:void(0)"><i className="fa-brands fa-cc-visa"></i></a>
          <a href="javascript:void(0)"><i className="fa-brands fa-cc-paypal"></i></a>
          <a href="javascript:void(0)"><i className="fa-brands fa-cc-mastercard"></i></a>
        </li>
      </ul>
    </form>
<div className="checkout-btn">
  <a className="btn-style btns checkout disabled" style={{cursor:"pointer"}} onClick={handleSubmit}>Place order</a>
</div>

                </div>
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
                        <p>Mon to Sat : 8:30AM to 6:30PM</p>
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
              <a href="cart-page.html" className="btn btn-style2">
                View cart
              </a>
              <a href="checkout-style1.html" className={`btn btn-style2 checkout`}>
                Checkout
              </a>
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
  
    <a href="javascript:void(0)" id="top" className="scroll">
      <span><i className="feather-arrow-up" /></span>
    </a>
   
  </div>
  
  )
}

export default Checkout