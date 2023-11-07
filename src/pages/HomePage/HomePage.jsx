import React from 'react';
import './HomePage.scss';
import Banner from '../../components/banner/banner';
import Card from '../../components/card/card';
import logementsData from '../../data/logements.json';
import bannerImage from '../../assets/banner_background.png';

const HomePage = () => {
    return (
        <div className="homepage">
            <Banner
                text="Chez vous, partout et ailleurs"
                image={bannerImage}
            />
            <Card logementsData={logementsData} />
        </div>
    );
};

export default HomePage;
