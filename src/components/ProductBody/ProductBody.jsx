import React, { useState } from 'react';
import ProductImg from './ProductImg/ProductImg';
import ProductInfo from './ProductInfo/ProductInfo';
import products from '../../assets/products/products.js';
import Cart from '../Cart/Cart';
import Modal from '../UI/Modal';
import classes from './ProductBody.module.css';

const product = products[0].product_1[0].product_info;

const { heading, description, mrp, discount, company_name } = product[0];
const { images } = product[1];
const { thumbs } = product[2];

const currentPrice = (mrp - (mrp * discount) / 100).toFixed(2);

const ProductBody = ({ showCart, cartItemCount }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentModalImage, setCurrentModalImage] = useState(0);

  const addToCart = () => {
    if (itemCount > 0) {
      setCartItems([...cartItems, { heading: heading, product_thumb: thumbs[0].img_thumb, price: currentPrice }]);
    }
    cartItemCount(itemCount, 'add');
  }
  const increment = () => {
    setItemCount((prevCount) => prevCount + 1);
    cartItemCount(itemCount, 'increment');
  }

  const decrement = () => {
    if (itemCount > 0) {
      setItemCount(prevCount => prevCount - 1);
    } else {
      setItemCount(0);
    }
    cartItemCount(itemCount, 'decrement');
  }

  const deleteAddedItem = () => {
    setCartItems([]);
    cartItemCount(0, 'clear');
  }

  const IsModalShowing = (index) => {
    setShowModal(!showModal);
    setCurrentModalImage(index);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
    <section className={classes['section-center']}>
        {showModal && <Modal onClose={closeModal} images={images} thumbs={thumbs} currentImage={currentModalImage} />}
      {showCart && <Cart cartItems={cartItems} items={itemCount} deleteAddedItem={deleteAddedItem} />}
      <ProductImg images={images} thumbs={thumbs} modalShowing={IsModalShowing} />
      <ProductInfo company={company_name}
        heading={heading}
        description={description}
        mrp={mrp}
        discount={discount}
        currentPrice={currentPrice}
        addToCart={addToCart}
        increaseQuantity={increment}
        decreaseQuantity={decrement}
        items={itemCount}
      />
    </section>
    </>
  )
}

export default ProductBody;
