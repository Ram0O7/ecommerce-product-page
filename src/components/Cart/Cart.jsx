import React from 'react';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ cartItems, items, deleteAddedItem }) => {

  const deleteItem = () => {
    deleteAddedItem();
  }

  return (
      <div className={classes['cart-container']}>
        <div>
          <h4>Cart</h4>
        </div>
        {
          (items > 0 && cartItems.length > 0)
            ?
            <>
              <CartItem cartItem={cartItems[0]} itemCount={items} deleteItem={deleteItem} />
              <div>
                <button className={classes['checkout-btn']}>Checkout</button>
              </div>
            </>
            :
            <p className={classes['cart-message']}>the cart is empty</p>
        }
      </div>
  )
}

export default Cart;
