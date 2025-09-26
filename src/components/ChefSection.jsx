
import React from 'react';

const chefSectionStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '60px 5%',
  margin: '60px 0',
  backgroundColor: '#f9f9f9',
};

const ChefSection = () => {
  return (
    <section style={chefSectionStyle}>
      <div style={{ maxWidth: '400px' }}>
        <h2 style={{ fontSize: '2em' }}>Everyone can be a chef in their own kitchen</h2>
        <button style={{ padding: '10px 20px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Learn More
        </button>
      </div>
      <div>
       
        <img 
          src="checkenWings.jpg" 
          alt="chicken wings" 
          style={{ width: '300px', height: 'auto' }} 
        />

      </div>
    </section>
  );
};

export default ChefSection;