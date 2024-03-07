// import React from 'react'
// import './RelatedProducts.css'
// import data_product from '../Assets/data'
// import Item from '../Item/Item'



// export default function RelatedProducts() {
//   return (
//     <div className='relatedproducts'>
//       <h1>Related Products</h1>
//       <hr />
//       <div className="relatedproducts-item">
//         {data_product.map((item,i)=>{
//             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//         })}
//       </div>
//     </div>
//   )
// }


// import React from 'react'
import './RelatedProducts.scss'
import data_product from '../Assets/data'
import Item from '../Item/Item'

interface Product {
  id: number;
  name: string;
  image: string;
  new_price: number;
  old_price: number;
}

export default function RelatedProducts(): JSX.Element {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item: Product, i: number) => {
            return <Item key={i} id={item.id.toString()} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}


