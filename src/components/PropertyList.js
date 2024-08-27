import React from 'react';

const PropertyList = ({ properties }) => {
  return (
    <div>
      {properties.map(property => (
        <div key={property.id}>
          <h2>{property.title}</h2>
          <img src={property.image} alt={property.title} style={{ width: '125px', height: '150px' }} />
          <p>{property.description}</p>
          <p><strong>Price:</strong> {property.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
