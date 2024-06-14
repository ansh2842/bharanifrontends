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

import { useEffect, useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import axios from "axios";


function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [invalid,setInvalid] = useState('')
  const backendUrl = process.env.REACT_APP_BHARANI_BACKEND_URL;
  // try{
    
  //     axios.post(`${backendUrl}/index/admin`)
  //   }catch(err){
  //       console.log(err);
  //     }
      
      
        const [name,setName] = useState('');
        const [password,setPassword]= useState('');

        const Login = async(e)=>{
          e.preventDefault();

          const data ={
            input: name,
            password: password
          }
          try {
            const response = await axios.post(`${backendUrl}/index/dataLogin`, data);
            
            if (response.status === 200) {
              localStorage.setItem("token", response.data.token);
              const adminProfiles = JSON.stringify(response.data.adminProfile);
              localStorage.setItem("adminProfile", adminProfiles);
              setInvalid('');
        
              
              window.location = "/dashboard";
            }
          } catch (error) {
            if (error.response && error.response.status === 409) {
              setInvalid("Incorrect Password or Username");
            } else {
              console.log(error);
            }
          }
        

        }
      
    

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography  component="label" variant="caption" fontWeight="bold">
             Username
            </SoftTypography>
          </SoftBox>
          <SoftInput onChange={(e)=> setName(e.target.value)}  placeholder="Username" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
          <p onChange={(e)=> setPassword(e.target.value)} style={{fontSize:"10px"}}>{password}</p>
        </SoftBox>
        <p style={{fontSize:"13px",color:"red"}}>{invalid}</p>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <button onClick={Login}  color="info" >
            sign in
          </button>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
