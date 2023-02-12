import React, { useState } from 'react';
import classes from './productImg.module.css';

const ProductImg = ({ images, thumbs, modalShowing }) => {
    const [image, setImage] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeImage = (index) => {
        setImage(images[index]);
        setCurrentIndex(index);
    }

    const prevImage = () => {
        currentIndex > 0 ? setCurrentIndex(prevIndex => prevIndex - 1) : setCurrentIndex(images.length - 1);
        setImage(images[currentIndex]);
    }
    
    const nextImage = () => {
        currentIndex < images.length - 1 ? setCurrentIndex(prevIndex => prevIndex + 1) : setCurrentIndex(0);
        setImage(images[currentIndex]);
    }

    return (
        <div className={classes.container}>
            <div className={classes.prev} onClick={prevImage} >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
            </div>
            <img src={image} alt='product' className={classes.img} onClick={() => modalShowing(currentIndex)} />
            <div className={classes.next} onClick={nextImage} >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
            </div>
            <div className={classes.thumbnails}>
                {thumbs.map((img, index) => {
                    return (<div key={index} className={classes['thumb-imgs']}>
                        <img src={img.img_thumb} alt={img.alt} onClick={() => changeImage(index)} />
                        {index === currentIndex && <div className={`${classes.overlay} ${classes.outline}`}></div>}
                    </div>)
                })}
            </div>
        </div>
    )
}

export default ProductImg;
