import { useState } from 'react';
import LeftArrow from '../../assets/img/arrow-left.svg';
import RightArrow from '../../assets/img/arrow-right.svg';
import '../Carousel/carousel.scss';

function Carousel({pictures}) {
    const [activeIndex, setActiveIndex] = useState(0);

    // Fonction pour les boutons flèchés
    const prevImage = () => {
        setActiveIndex(activeIndex - 1 < 0 ? pictures.length - 1 : activeIndex - 1);
    };

    const nextImage = () => {
        setActiveIndex(activeIndex + 1 > pictures.length - 1 ? 0 : activeIndex + 1);
    };

    return (
        <div className='carousel'>
            <div className='carousel-items'>
                {/* Affichage des images du carousel, image visible avec la classe carousel-item-active */}
                {pictures && pictures.map((picture, index) => {
                    return (
                    <img src={picture} alt='' key={index} className={activeIndex === index ? "carousel-item carousel-item-active" : "carousel-item"}/>
                    );
                })}
            </div>
            {/* Affichage des boutons s'il y a plus d'une image seulement */}
            {pictures && pictures.length > 1 ? 
                (<div className='carousel-controls'>
                    <button onClick={prevImage}>
                        <img src={LeftArrow} alt='Précédent' className='left-arrow'/>
                    </button>
                    <button onClick={nextImage}>
                        <img src={RightArrow} alt='Suivant' className='right-arrow'/>
                    </button>
                </div>) : ''}
            {/* Affichage du compteur s'il y a plus d'une image seulement */}
            {pictures && pictures.length > 1 ? (
                <p className='carousel-counter'>
                    {activeIndex + 1}/{pictures.length}
                </p>) : ""
            }
        </div>
    )
}

export default Carousel