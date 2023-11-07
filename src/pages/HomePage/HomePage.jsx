import React from 'react';
import './homepage.scss';
import Banner from '../../components/banner/banner';
import Card from '../../components/card/card';
import logementsData from '../../data/logements.json';
import bannerImageHome from '../../assets/banner_home_background.png';

const HomePage = () => {
    return (
        <div className="homepage">
            <Banner
                text="Chez vous, partout et ailleurs"
                image={bannerImageHome}
            />
            <Card logementsData={logementsData} />
        </div>
    );
};

export default HomePage;
