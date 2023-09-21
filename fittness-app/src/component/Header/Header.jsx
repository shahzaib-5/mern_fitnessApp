import React, {useState} from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const history = useNavigate();
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened,setMenuopened] = useState(false)
  axios.defaults.headers.common['x-auth-token'] = localStorage.getItem("Token");
  return (
    <div className="header">
      <img src={Logo} alt="" className='logo'/>
<ul className='header-menu'>
<li ><Link className='nav' to = '/'>Home</Link></li>
<li ><Link className='nav' to = '/whyUs'>About Us</Link></li>
<li ><Link className='nav' to = '/login'>LogIn</Link></li>
 {localStorage.getItem("Token") ? <>
<li ><Link className='nav' to = '/program'>Program</Link></li>
<li ><Link className='nav' to = '/plan'>Our Plans</Link></li>
<li ><Link className='nav' to = '/bmi'>BMI</Link></li>

<Button onClick={()=>{
 localStorage.removeItem("Token");
  window.location.reload();
  alert("Want to Logout?"); 
}}>Logout</Button>

</> :""}

</ul>
      
    </div>
  )
}

export default Header