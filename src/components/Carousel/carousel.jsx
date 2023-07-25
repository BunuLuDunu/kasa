import { useState } from 'react';
import LeftArrow from '../../assets/img/arrow-left.svg';
import RightArrow from '../../assets/img/arrow-right.svg';
import '../Carousel/carousel.scss';

function Carousel({pictures}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const prevImage = () => {
        setActiveIndex(Math.max(0, activeIndex - 1));
    };

    const nextImage = () => {
        setActiveIndex(Math.min(pictures.length - 1, activeIndex + 1));
    };

    return (
        <div className='carousel'>
            <div className='carousel-items'>
                {pictures && pictures.map((picture, index) => {
                    return (
                    <img src={picture} alt='' key={index} className={activeIndex === index ? "carousel-item carousel-item-active" : "carousel-item"}/>
                    );
                })}
            </div>
            {pictures && pictures.length > 1 ? 
                (<div className='carousel-controls'>
                    <button onClick={prevImage}>
                        <img src={LeftArrow} alt='Précédent' className='left-arrow'/>
                    </button>
                    <button onClick={nextImage}>
                        <img src={RightArrow} alt='Suivant' className='right-arrow'/>
                    </button>
                </div>) : ''}
            {pictures && pictures.length > 1 ? (
                <p className='carousel-counter'>
                    {activeIndex + 1}/{pictures.length}
                </p>) : ""
            }
        </div>
    )
}

export default Carousel