/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Admin from "./admin"
import Carousel from "./carousel"
import Product from "./product"
import Category from "./category"
import NavSlider from "navSlider";
import About from "./about"
import Signin from "layouts/authentication/sign-in/index"
import NewArrivalproduct from "newArrivalproduct";
import Orders from './orders'
import Orderplaced from './orderplaced'

import UserFront from "./Frontend";
import Cart from "./cart";
import UserProduct from "userProduct";
import PrivacyPolicy from "privacyPolicy";
import Contact from 'contact'
import Checkout from 'checkout'
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import CreditCard from "examples/Icons/CreditCard";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    
    name: "sign in",
    key: "sign in",
    route: "/authentication/sign-in",
    icon: <Shop size="12px" />,
    component: <Signin />,
    noCollapse: true,
  },
  
  {
    type: "collapse",
    name: "Admin",
    key: "admin",
    route: "/admin",
    icon: <Office size="12px" />,
    component: <Admin />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "carousel",
    key: "carousel",
    route: "/carousel",
    icon: <Office size="12px" />,
    component: <Carousel />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Product",
    key: "product",
    route: "/product",
    icon: <Office size="12px" />,
    component: <Product />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Orders",
    key: "Orders",
    route: "/Orders",
    icon: <Office size="12px" />,
    component: <Orders />,
    noCollapse: true,
  },
  {
    name: "UserProduct",
    key: "userproduct",
    route: "/userproduct",
    icon: <Office size="12px" />,
    component: <UserProduct />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "newproducts",
    key: "newproducts",
    route: "/newproducts",
    icon: <Office size="12px" />,
    component: <NewArrivalproduct />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "navslider",
    key: "navslider",
    route: "/navslider",
    icon: <Office size="12px" />,
    component: <NavSlider />,
    noCollapse: true,
  },
  
  {
    type: "collapse",
    name: "category",
    key: "category",
    route: "/category",
    icon: <Office size="12px" />,
    component: <Category />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "about",
    key: "about",
    route: "/about",
    icon: <Office size="12px" />,
    component: <About />,
    noCollapse: true,
  },
  
  {
    name: "Front",
    key: "front",
    route: "/",
    icon: <CreditCard size="12px" />,
    component: <UserFront />,
    // noCollapse: true,
  },
  {
    name: "cart",
    key: "cart",
    route: "/cart",
    icon: <CreditCard size="12px" />,
    component: <Cart />,
    // noCollapse: true,
  },
  {
    name: "orderplaced",
    key: "orderplaced",
    route: "/orderplaced",
    icon: <CreditCard size="12px" />,
    component: <Orderplaced />,
    // noCollapse: true,
  },
  
  {
    name: "Privacy Policy",
    key: "Privacy Policy",
    route: "/privacy-policy",
    icon: <CreditCard size="12px" />,
    component: <PrivacyPolicy />,
    // noCollapse: true,
  },
  {
    name: "Contact",
    key: "Contact",
    route: "/contact",
    icon: <CreditCard size="12px" />,
    component: <Contact />,
    // noCollapse: true,
  },
  {
    name: "Checkout",
    key: "Checkout",
    route: "/checkout",
    icon: <CreditCard size="12px" />,
    component: <Checkout />,
    // noCollapse: true,
  }
  

  
  
];

export default routes;
