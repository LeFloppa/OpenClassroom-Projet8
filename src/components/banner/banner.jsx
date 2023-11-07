import React from 'react';
import './banner.scss';

const Banner = ({ text, image }) => {
    const bannerStyle = {
        backgroundImage: `url(${image})`
    };
    return (
        <section className="banner" style={bannerStyle}>
            <div className="banner-text">{text}</div>
        </section>
    );
};

export default Banner;