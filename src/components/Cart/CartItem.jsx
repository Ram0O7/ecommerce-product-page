import React from 'react';
import deleteIcon from '../../assets/images/icon-delete.svg';
import classes from './CartItem.module.css';

const CartItem = ({ cartItem, itemCount, deleteItem }) => {
    const { heading, product_thumb, price } = cartItem;
    const total = (price * itemCount).toFixed(2);

    return (
        <div className={classes['product-info']}>
            <img className={classes['cart-img']} src={product_thumb} alt='product' />
            <div className={classes['cart-detail']}>
                <p>{ heading }</p>
                <span>₹{price} X {itemCount}</span><span>₹{total}</span>
            </div>
            <img className={classes['delete-icon']} src={deleteIcon} alt="delete" onClick={deleteItem} />
        </div>
    )
}

export default CartItem;
