import React from 'react';
import './HomePage.scss';
import Banner from '../../components/banner/banner';
import Card from '../../components/card/card'; 
import logementsData from '../../data/logements.json';

const HomePage = () => {
    return (
        <div className="homepage">
        <Banner />
        <Card logementsData={logementsData} /> 
      </div>
    );
};

export default HomePage;
