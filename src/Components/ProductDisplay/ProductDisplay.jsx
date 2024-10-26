import React from 'react'
import "./productdisplay.css"
import star from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
const ProductDisplay = (props) => {
    const {product} = props; 
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-imagelist">
                <img src={product.image} alt='product' />
                <img src={product.image} alt='product' />
                <img src={product.image} alt='product' />
                <img src={product.image} alt='product' />
            </div>
            <div className="productdisplay-image">
            <img className='productdisplay-mainimg' src={product.image} alt='product' />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star_dull} alt='star' />
            <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ₹{product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                ₹{product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                The best quality of clothing, made with 900GSM pure cotton. Looks good, and lasts long!
            </div>
            <div className="productdisplay-right-size">
                <h1>Select size:</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>Add to Cart</button>
            <p className="productdisplay-right-category"><span>Category:</span>Women, T-shirt, Crop top</p>
            <p className="productdisplay-right-category"><span>Tags:</span>Modern Latest, In trend</p>

        </div>
    </div>
  )
}
export default ProductDisplay;