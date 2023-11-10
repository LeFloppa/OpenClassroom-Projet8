import React from 'react';
import './homepage.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/banner/banner';
import Card from '../../components/card/card';
import propertysData from '../../data/logements.json';
import bannerImageHome from '../../assets/banner_home_background.png';

const HomePage = () => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/logement/${id}`);
    };
    return (
        <div className="homepage">
            <Banner text="Chez vous, partout et ailleurs" image={bannerImageHome} />
            <Card propertysData={propertysData} onCardClick={handleCardClick} />
        </div>
    );
};

export default HomePage;
