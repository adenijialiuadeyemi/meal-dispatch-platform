import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'


const FoodItem = ({id, name, desc, image, price}) => {

    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)    

    return (
    <div className="food-item">
        <div className='food-item-image-container'>
            <img className="food-item-image" src={image} />
            {!cartItems[id]?<img src={assets.add_icon_white} onClick={()=>addToCart(id)} className='add' />
            :<div className='food-item-counter'>
                <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} />
                <p>{cartItems[id]}</p>
                <img src={assets.add_icon_green} onClick={()=>addToCart(id)} />
            </div>
            }
            
                
        </div>
        <div className="food-item-info">
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} />
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem