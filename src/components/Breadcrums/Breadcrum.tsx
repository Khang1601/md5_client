// import React from 'react'
// import './Breadcrum.css'
// import arrow_icon from '../Assets/breadcrum_arrow.png'



// export default function Breadcrum(props) {

//   const { product } = props;

//   return (
//     <div className='breadcrum'>
//       HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
//     </div>
//   )
// }

import React from 'react'
import './Breadcrum.scss'
import arrow_icon from '../Assets/breadcrum_arrow.png'

interface BreadcrumProps {
  product: {
    category: string;
    name: string;
  };
}

const Breadcrum: React.FC<BreadcrumProps> = ({ product }) => {
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum;



