import { BrowserRouter, Route, Routes } from 'react-router-dom'
import utils from '@utils/index'
// import Home from '@pages/home/Home'

import Navbar from '@/Components/Navbar/Navbar'
import Shop from '@/CPages/Shop'
import ShopCategory from '@/CPages/ShopCategory'
import Product from '@/CPages/Product'
import Cart from '@/CPages/Cart'
import LoginSignup from '@/CPages/LoginSignup'

import Footer from '@/Components/Footer/Footer'
import men_banner from '@/assets/images/banner_mens.png'
import women_banner from '@/assets/images/banner_women.png'
// import kid_banner from '@/assets/images/banner_kids.png'
// import Authen from '@/pages/authen/Authen'





export default function RouteCom() {
  return (
    <BrowserRouter>



      <Navbar />

      <Routes>

        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
        {/* <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} /> */}
        <Route path="/product" element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />




        <Route path='/authen' element={utils.lazyFn(() => import("@pages/authen/Authen.tsx"))()}></Route>



        {/* <Route path="/" element={<Home/>}></Route>
            <Route path='/authen' element={utils.lazyFn(() => import("@pages/authen/Authen.tsx"))()}></Route>
            <Route path='/admin' element={utils.lazyFn(() => import("@pages/admin/Admin.tsx"), localStorage.getItem("token") != null)()}></Route> */}
      
      </Routes>

      <Footer/>

    </BrowserRouter>


  )
}
