import React, { useState } from 'react';
import './aboutpage.scss';
import Banner from '../../components/banner/banner';
import bannerImageAbout from '../../assets/banner_about_background.png';
import Collapse from '../../components/collapse/collapse';

const AboutPage = () => {
  const [openCollapseIndex, setOpenCollapseIndex] = useState(null);

  const handleCollapseClick = (index) => {
    setOpenCollapseIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
  <div className="about-page">
  <Banner image={bannerImageAbout} />
  <div className="content">
    <div className="collapses">
      <Collapse
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes."
        isOpen={openCollapseIndex === 0}
        onClick={() => handleCollapseClick(0)}
      />
      <Collapse
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme."
        isOpen={openCollapseIndex === 1}
        onClick={() => handleCollapseClick(1)}
      />
      <Collapse
        title="Service"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme."
        isOpen={openCollapseIndex === 2}
        onClick={() => handleCollapseClick(2)}
      />
      <Collapse
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
        correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
        également des ateliers sur la sécurité domestique pour nos hôtes."
        isOpen={openCollapseIndex === 3}
        onClick={() => handleCollapseClick(3)}
      />
    </div>
  </div>
</div>
);
};

export default AboutPage;