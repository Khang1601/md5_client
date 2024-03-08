// import React from 'react'
// import Hero from '../Components/Hero/Hero'
// import Popular from '../Components/Popular/Popular'
// import Offers from '../Components/Offers/Offers'
// import NewCollections from '../Components/NewCollections/NewCollections'
// import NewsLetter from '../Components/NewsLetter/NewsLetter'



// export default function Shop() {
//   return (
//     <div>
//       <Hero/>
//       {/* <Popular/> */}
//       <Offers/>
//       <NewCollections/>
//       <NewsLetter/>
//     </div>
//   )
// }


import { Outlet } from "react-router-dom"
import React from 'react';
import Hero from '../Components/Hero/Hero';
// import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';
import './CSS/home.scss'

const Shop: React.FC = () => {
  return (
    // <div>

    //   {/* <Navbar /> */}

    //   {/* <Outlet/> */}

    //   <Hero />
    //   {/* <Popular /> */}
    //   <Offers />
    //   <NewCollections />
    //   <NewsLetter />

    //   {/* <Footer /> */}

    // </div>

    <div className="home_page">
      <Navbar />
      <div className="home_page_body">
        <div className="content">
          <Hero />

          <Offers />

          <NewsLetter />
          <NewsLetter />

          body
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Shop;


