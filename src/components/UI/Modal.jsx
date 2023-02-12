import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import iconNext from '../../assets/images/icon-next.svg';
import iconClose from '../../assets/images/icon-close.svg';
import iconPrevious from '../../assets/images/icon-previous.svg';
import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');

const Modal = ({ onClose, images, thumbs, currentImage }) => {
    const [currentIndex, setCurrentIndex] = useState(currentImage);

    const changeImage = (index) => {
        setCurrentIndex(index);
    }
    const prevImage = () => {
       currentIndex > 0 ? setCurrentIndex((prevIndex) => prevIndex - 1) : setCurrentIndex(images.length - 1) ;
    }
    const nextImage = () => {
        currentIndex < images.length - 1 ? setCurrentIndex(prevIndex => prevIndex + 1) : setCurrentIndex(0);
    }

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>
                    <div className={classes.close} onClick={onClose} >
                        <img src={iconClose} alt='close' />
                    </div>
                    <div className={classes.prev} onClick={prevImage}><img src={iconPrevious} alt='next' /></div>
                    <img src={images[currentIndex]} alt='shoes' />
                    <div className={classes.next} onClick={nextImage}><img src={iconNext} alt='next' /></div>
                    <div className={classes.thumbs}>
                        {thumbs.map((img, index) => {
                            return <div className={classes['thumb']}>
                                <img src={img.img_thumb} alt={img.alt} onClick={() => changeImage(index)} />
                                {index === currentIndex && <div className={`${classes.overlay} ${classes.outline}`}></div>}
                            </div>
                        })}
                    </div>
                </ModalOverlay>
                , portalElement)}
        </Fragment>
    )
};

export default Modal;
