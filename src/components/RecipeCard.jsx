// components/RecipeCard.js (Helper Component)
import React from 'react';

const cardStyle = {
  width: '100%',
  border: '1px solid #ddd',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  cursor: 'pointer',
};

const RecipeCard = ({ title, image, time }) => {
  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <div style={{ padding: '10px' }}>
        <h3 style={{ margin: '0 0 5px', fontSize: '1.1em' }}>{title}</h3>
        <p style={{ margin: 0, fontSize: '0.8em', color: '#666' }}>{time}</p>
      </div>
    </div>
  );
};

export default RecipeCard;