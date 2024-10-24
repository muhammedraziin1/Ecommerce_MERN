import React, { useContext } from 'react'
import "./css/shopcategory.css"
import { ShopContext } from '../Context/ShopContext'
import drop_icon from "../Components/Assets/dropdown_icon.png";
import Item from '../Components/Items/Item';
const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='shopcategory'>
        <img className="shopcategory-banner" src={props.banner} alt='banner' />
        <div className="shopcategory-indexSort">
          <p><span>Showing items 1-12</span>/36</p>
           <div className="shopcategory-sort">
            Sort by <img src={drop_icon} alt='dropdown'/>
           </div>
           <div className="shopcategory-products">
            {all_products.map((item, i) => {
              if(props.category === item.category) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else {
                return null;
              }
            } )}
           </div>
        </div>
    </div>
  )
}
export default ShopCategory;