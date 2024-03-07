// import React from 'react'
// import './Popular.css'
// import data_product from '../Assets/data'
// import Item from '../Item/Item'

// export default function Popular() {
//   return (
//     <div className='popular'>
//       <h1>POPULAR IN WOMEN</h1>
//       <hr />
//       <div className="popular-item">
//         {data_product.map((item,i)=>{
//             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//         })}
//       </div>
//     </div>
//   )
// }





import React from 'react';
import './Popular.scss';
import data_product from '../Assets/data';
import Item from '../Item/Item';

interface Product {
  id: number;
  name: string;
  image: string;
  new_price: number;
  old_price: number;
}

const Popular: React.FC = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item: Product, i: number) => {
          return <Item key={i} id={item.id.toString()} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
