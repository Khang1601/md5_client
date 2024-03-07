// import React from 'react'
// import './Hero.css'
// import hand_icon from '../Assets/hand_icon.png'
// import arrow_icon from '../Assets/arrow.png'
// import hero_image from '../Assets/hero_image.png'
// import hero_image_1 from '../Assets/hero_image_1.png'
// import hero_image_2 from '../Assets/hero_image_2.png'




// export default function Hero() {
//   return (
//     <div className='hero'>
//       <div className="hero-left">
//         <h2>NEW ARRIVALS ONLY</h2>
//         <div>
//             <div className="hero-hand-icon">
//                 <p>new</p>
//                 <img src={hand_icon} alt="" />
//             </div>
//             <p>collections</p>
//             <p>for everyone</p>
//         </div>
//         <div className="hero-latest-btn">
//             <div>Latest Collection</div>
//             <img src={arrow_icon} alt="" />
//         </div>
//       </div>
//       <div className="hero-right">

//         <img src={hero_image_2} alt="" />

//       </div>
//     </div>
//   )
// }


// import React from 'react';
import './Hero.scss';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
// import hero_image from '../Assets/hero_image.png';
// import hero_image_1 from '../Assets/hero_image_1.png';
import hero_image_2 from '../Assets/hero_image_2.png';

export default function Hero(): JSX.Element {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image_2} alt="" />
      </div>
    </div>
  );
}