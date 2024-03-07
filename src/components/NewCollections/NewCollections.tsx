// import React from 'react'
// import './NewCollections.css'
// import new_collection from '../Assets/new_collections'
// import Item from '../Item/Item'


// export default function NewCollections() {
//   return (

//     <div className='new-collections'>
//       <h1>NEW COLLECTIONS</h1>
//       <hr />

//       {/* <div className="collections">
//         {new_collection.map((item,i)=>{
//             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//         })}
//       </div> */}

//     </div>
  
//   )
// }


import React from 'react'
import './NewCollections.scss'
// import new_collection from '../Assets/new_collections'
// import Item from '../Item/Item'

// interface ItemProps {
//   id: number;
//   name: string;
//   image: string;
//   new_price: number;
//   old_price: number;
// }

const NewCollections: React.FC = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      {/* <div className="collections">
        {new_collection.map((item: ItemProps, i: number) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div> */}
    </div>
  )
}

export default NewCollections;

