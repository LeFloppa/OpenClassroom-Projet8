import React, { useState, useEffect } from 'react';
import './propertypage.scss';
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../../components/slideshow/slideshow';
import Stars from '../../components/stars/stars';
import Collapse from '../../components/collapse/collapse';
import propertysData from '../../data/logements.json';

const PropertyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setproperty] = useState(null);
  const [collapseStates, setCollapseStates] = useState([]);

  useEffect(() => {
    const fetchedproperty = propertysData.find((property) => property.id === id);
    if (!fetchedproperty) {
      navigate('/404');
    } else {
      setproperty(fetchedproperty);
      setCollapseStates(Array(fetchedproperty.equipments.length).fill(false));
    }
  }, [id, navigate]);

  const handleCollapseClick = (index) => {
    setCollapseStates((prevState) => {
      const newStates = [...prevState];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  if (!property) {
    return <div>Chargement en cours...</div>;
  }

  const [firstName, lastName] = property.host.name.split(' ');
  return (
    <div className="property">
      <Slideshow property={property} />
      <div className="property-host-container">
        <div className="property-info">
          <div className="property-title">{property.title}</div>
          <div className="property-location">{property.location}</div>
        </div>
        <div className="host-info">
          <div className="host-name">
            <div>{firstName}</div>
            <div>{lastName}</div>
          </div>
          <div className="host-picture">
            <img src={property.host.picture} alt="Hôte" />
          </div>
        </div>
      </div>

      <div className="tags-ratings-container">
        <div className="property-tags">
          {property.tags.map((tag) => (
            <div key={tag} className="tag">
              {tag} 
            </div>
          ))}
        </div>

        <div className="rating-host-container">
          <div className="property-rating">
            <Stars rating={parseInt(property.rating)} />
          </div>
          <div className="host-info host-info-phone">
            <div className="host-name">
              <div>{firstName}</div>
              <div>{lastName}</div>
            </div>
            <div className="host-picture">
              <img src={property.host.picture} alt="Hôte" />
            </div>
          </div>
        </div>
      </div>

      <div className="property-collapses">
        <Collapse
          title="Description"
          content={property.description}
          isOpen={collapseStates[0]}
          onClick={() => handleCollapseClick(0)}
        />
        <Collapse
          title="Équipements"
          content={property.equipments.map((equipment) => (
            <div key={equipment}>{equipment}</div>
          ))}
          isOpen={collapseStates[1]}
          onClick={() => handleCollapseClick(1)}
        />
      </div>
    </div>
  );
};
export default PropertyPage;