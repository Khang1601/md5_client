// import React, { useContext, useRef, useState } from 'react'
// // import './Navbar.scss'
// import './Navbar.css'
// import logo from '../Assets/logo.png'
// import logo_1 from '../Assets/logo_1.png'

// import cart_icon from '../Assets/cart_icon.png'
// import bill_icon from '../Assets/bill_icon.png'
// import nav_dropdown from '../Assets/nav_dropdown.png'
// import { Link } from 'react-router-dom'
// import { ShopContext } from '../../Context/ShopContext'


// // ----------
// // import pictures from '@/pictures/index'
// // import { Dropdown } from 'react-bootstrap';
// // import { useTranslation } from 'react-i18next'


// export default function Navbar() {

//   const [menu,setMenu] = useState("shop");
//   const {getTotalCartItems}= useContext(ShopContext);
//   const menuRef = useRef();

//   const dropdown_toggle = (e) => {
//     menuRef.current.classList.toggle('nav-menu-visible');
//     e.target.classList.toggle('open');
//   }

//   return (
//     <div className='navbar'>
//       <Link to='/' onClick={()=>{setMenu("shop")}} className="nav-logo">
//         {/* <img src={logo} alt="" /> */}
//         <img src={logo_1} alt="" />

//         <p>SHOPEE</p>
//       </Link>
//       <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />

//       <ul ref={menuRef} className="nav-menu">
//         <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("womens")}}><Link to="womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
//         {/* <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li> */}
        
//         <li onClick={()=>{setMenu("blogs")}}><Link to='/blogs'>Blog</Link>{menu==="blogs"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("abouts")}}><Link to='/abouts'>About</Link>{menu==="abouts"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("contacts")}}><Link to='/contacts'>Contact</Link>{menu==="contacts"?<hr/>:<></>}</li>


//       </ul>

//       <div className="nav-login-cart">
//         <Link to='/login'><button>Login</button></Link>
        
//         <Link to='/bill'><img src={bill_icon} alt="" /></Link>     

//         <Link to='/cart'><img src={cart_icon} alt="" /></Link>     

//         <div className="nav-cart-count">{getTotalCartItems()}</div>
     

//         {/* ------------- */}
//         {/* <div className='language_box'>
//               <Dropdown>
//                 <Dropdown.Toggle variant="success" id="dropdown-basic">
//                   Select Language
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Dropdown.Item onClick={() => {
//                     i18n.changeLanguage('vi')
//                     localStorage.setItem("locales", 'vi')
//                   }}>
//                     <img src={pictures.flagVN} />
//                     <span>&nbsp; VN</span>
//                   </Dropdown.Item>
                  
//                   <Dropdown.Item onClick={() => {
//                     i18n.changeLanguage('en')
//                     localStorage.setItem("locales", 'en')
//                   }}>
//                     <img src={pictures.flagUS} />
//                     <span>&nbsp; EN</span>
//                   </Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </div> */}

//       </div>
//     </div>
//   )
// }





import React, { useContext, useRef, useState } from 'react';
import './Navbar.scss'
// import './Navbar.css';
// import logo from '../Assets/logo.png';
import logo_1 from '../Assets/logo_1.png';

import cart_icon from '../Assets/cart_icon.png';
import bill_icon from '../Assets/bill_icon.png';
import nav_dropdown from '../Assets/nav_dropdown.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

// ----------
// import pictures from '@/pictures/index'
// import { Dropdown } from 'react-bootstrap';
// import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef<HTMLUListElement>(null);

  const dropdown_toggle = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('nav-menu-visible');
    }
    e.currentTarget.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <Link to='/' onClick={() => { setMenu("shop") }} className="nav-logo">
        {/* <img src={logo} alt="" /> */}
        <img src={logo_1} alt="" />
        <p>SHOPEE</p>
      </Link>

      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}><Link to='/mens'>Men</Link>{menu === "/mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link to="/womens">Women</Link>{menu === "/womens" ? <hr /> : <></>}</li>
        {/* <li onClick={() => { setMenu("kids") }}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li> */}
        <li onClick={() => { setMenu("blogs") }}><Link to='/blogs'>Blog</Link>{menu === "blogs" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("abouts") }}><Link to='/abouts'>About</Link>{menu === "abouts" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("contacts") }}><Link to='/contacts'>Contact</Link>{menu === "contacts" ? <hr /> : <></>}</li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/bill'><img src={bill_icon} alt="" /></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        {/* ------------- */}
        {/* <div className='language_box'>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Select Language
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => {
                    i18n.changeLanguage('vi')
                    localStorage.setItem("locales", 'vi')
                  }}>
                    <img src={pictures.flagVN} />
                    <span>&nbsp; VN</span>
                  </Dropdown.Item>
                  
                  <Dropdown.Item onClick={() => {
                    i18n.changeLanguage('en')
                    localStorage.setItem("locales", 'en')
                  }}>
                    <img src={pictures.flagUS} />
                    <span>&nbsp; EN</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div> */}
      </div>
    </div>
  );
}
