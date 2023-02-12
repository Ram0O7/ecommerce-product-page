import React, { useState } from 'react';
import classes from './Navbar.module.css';
import cartIcon from '../../assets/images/icon-cart.svg';
import avtar from '../../assets/images/image-avatar.png';

const NavBar = ({ showCart, cartCount }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const navList = <ul className={classes['nav-list']}>
    <a href='/'><li className={classes['list-item']}>collections</li></a>
    <a href='/'><li className={classes['list-item']}>men</li></a>
    <a href='/'><li className={classes['list-item']}>women</li></a>
    <a href='/'><li className={classes['list-item']}>about</li></a>
    <a href='/'><li className={classes['list-item']}>contact</li></a>
  </ul>

  return (
    <nav>
      <div className={classes.heading}>
        <div className={classes.menu} onClick={() => setShowSidebar(!showSidebar)}>
          <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd" /></svg>
        </div>
        <a href='/'><h1>sneakers</h1></a>
      </div>
      {showSidebar &&
        <React.Fragment>
          <div className={classes.backdrop} onClick={() => setShowSidebar(!showSidebar)}></div>
          <div className={classes.sidebar}>
            <div className={classes.close} onClick={() => setShowSidebar(!showSidebar)}>
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#f45" fillRule="evenodd" /></svg>
            </div>
            <ul className={classes['sidebar-list']}>
              <a href='/'><li className={classes['list-item']}>collections</li></a>
              <a href='/'><li className={classes['list-item']}>men</li></a>
              <a href='/'><li className={classes['list-item']}>women</li></a>
              <a href='/'><li className={classes['list-item']}>about</li></a>
              <a href='/'><li className={classes['list-item']}>contact</li></a>
            </ul>
          </div>
        </React.Fragment>
      }
      {navList}
      <div>
        <button className={classes['cart-btn']} onClick={showCart}><img src={cartIcon} alt="cart-icon" /><span>{cartCount}</span></button>
        <img src={avtar} alt="profile-img" />
      </div>
    </nav>
  )
}

export default NavBar;
