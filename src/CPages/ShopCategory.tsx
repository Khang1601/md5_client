// import React, { useContext } from 'react'
// import './CSS/ShopCategory.css'
// import { ShopContext } from '../Context/ShopContext'
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
// import Item from '../Components/Item/Item'


// import product_13 from '../Components/Assets/product_13.png'



// export default function ShopCategory(props) {
//   const {all_product} = useContext(ShopContext);
//   return (
//     <div className='shop-category'>
//       <img className='shopcategory-banner' src={props.banner} alt="" />
//       <div className="shopcategory-indexSort">
//         <p>
//           <span>Showing 1-12</span> out of 36 products
//         </p>
//         <div className="shopcategory-sort">
//           Sort by <img src={dropdown_icon} alt="" />
//         </div>
//       </div>
// {/* 
//       <div className="shopcategory-products">
//         {all_product.map((item,i)=>{
//           if (props.category===item.category) {
//             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//           }
//           else{
//             return null;
//           }
//         })}
//       </div> */}


//       <div className="shopcategory-products">
//         <Item key={13} id={13} name="abc" image={product_13} new_price="100" old_price="111"/>
//         <Item key={13} id={13} name="abc" image={product_13} new_price="100" old_price="111"/>
//         <Item key={13} id={13} name="abc" image={product_13} new_price="100" old_price="111"/>
//         <Item key={13} id={13} name="abc" image={product_13} new_price="100" old_price="111"/>

//       </div>


//       <div className="shopcategory-loadmore">
//         Explore More
//       </div>
//     </div>
//   )
// }



// import React, { useContext } from 'react';
// import './CSS/ShopCategory.css';
// import { ShopContext } from '../Context/ShopContext';
// import dropdown_icon from '../Components/Assets/dropdown_icon.png';
// import Item from '../Components/Item/Item';
// import product_13 from '../Components/Assets/product_13.png';

// interface ShopCategoryProps {
//   banner: string;
//   category?: string;
// }

// const ShopCategory: React.FC<ShopCategoryProps> = (props) => {
//   const { all_product } = useContext(ShopContext);
//   return (
//     <div className='shop-category'>
//       <img className='shopcategory-banner' src={props.banner} alt="" />
//       <div className="shopcategory-indexSort">
//         <p>
//           <span>Showing 1-12</span> out of 36 products
//         </p>
//         <div className="shopcategory-sort">
//           Sort by <img src={dropdown_icon} alt="" />
//         </div>
//       </div>
//       {/* 
//       <div className="shopcategory-products">
//         {all_product.map((item, i) => {
//           if (props.category === item.category) {
//             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//           }
//           else {
//             return null;
//           }
//         })}
//       </div> */}
//       <div className="shopcategory-products">
//         <Item key={13} id={13} name="abc" image={product_13} new_price="100" old_price="111" />
//         <Item key={13} id={13} name="abc" image={product_13} new_price="100" old_price="111" />
//         <Item key={13} id={13} name="abc" image={product_13} new_price="100" old_price="111" />
//         <Item key={13} id={13} name="abc" image={product_13} new_price="100" old_price="111" />
//       </div>
//       <div className="shopcategory-loadmore">
//         Explore More
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;


import React, { useContext } from 'react';
import './CSS/ShopCategory.scss';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

// import product_13 from '../Components/Assets/product_13.png';

interface ShopCategoryProps {
  banner: string;
  category: string;
}

const ShopCategory: React.FC<ShopCategoryProps> = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item: { category: string; id: string; name: string; image: string; new_price: number; old_price: number; }, i: React.Key | null | undefined) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
