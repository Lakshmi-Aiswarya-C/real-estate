import React from 'react';

function Properties() {
  return (
    <div className="properties-container">
      <div className="property-item">
        <h2>Plots for Sale – Sengundram – DTCP Approved</h2>
        <p>Plots 4, 7 & 8 for sale near Singaperumal Koil</p>
        <img className="property-image" src="sengundram.jpg" alt="picture" style={{ width: '400px', height: '400px' }}></img>
        <p className="property-price">Price: 4.5 Crores</p>
      </div>

      <div className="property-item">
        <h2>Plot for sale at Shankar Nagar – Velachery</h2>
        <p>Land NEAR to VELACHERY METRO/SUBURBAN Station</p>
        <img className="property-image" src="shankar_nagar.jpg" alt="picture" style={{ width: '400px', height: '400px' }}></img>
        <p className="property-price">Price: 3 Crores</p>
      </div>

      {/* Add more property items as needed */}
    </div>
  );
}

export default Properties;
