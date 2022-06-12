import React from 'react';
import '../style-sheet/CartWidget.css';


function CartWidget({cantidad}) {
    return (
        <div className='nav-cart'>
            <img  className='cart-img'src= {require ("../imagenes/shopping-cart.png")} alt="Shopping Cart" />
            <span className='badge badge-warning' id='lblCartCount'> {cantidad} </span>
        </div>
    )
}

export default CartWidget;