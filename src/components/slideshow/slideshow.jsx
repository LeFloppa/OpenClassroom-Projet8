import React, { useState } from 'react';
import './slideshow.scss';
import Banner from '../banner/banner';
import ArrowLeft from '../arrows/arrowleft';
import ArrowRight from '../arrows/arrowright';

const Slideshow = ({ property, bannerStyle }) => {
    const { pictures } = property;
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = pictures.length - 1;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
    };

    return (
        <div className="slideshow">
            {pictures.length > 1 && <ArrowLeft onClick={handlePrev} />}
            <Banner image={pictures[currentIndex]} style={bannerStyle} />
            {pictures.length > 1 && <ArrowRight onClick={handleNext} />}
            {pictures.length > 1 && (
                <div className="slide-number">{`${currentIndex + 1}/${pictures.length}`}</div>
            )}
        </div>
    );
};

export default Slideshow;