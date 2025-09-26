// components/Header.js
import React from 'react';

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 5%',
  backgroundColor: '#f8f8f8', // Light background for the nav bar
};

const heroStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '60px 5%',
};

const Header = () => {
  return (
    <header>
    
      <nav style={headerStyle}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Foodieland</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#">Home</a>
          <a href="#">Recipes</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div style={heroStyle}>
        <div style={{ maxWidth: '400px' }}>
          <h1 style={{ fontSize: '3em', margin: '0 0 20px' }}>Spicy delicious chicken wings</h1>
          <p>This recipe is quick, easy, and absolutely delicious. Perfect for a weeknight meal!</p>
          <button style={{ padding: '10px 20px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            View Recipe
          </button>
        </div>
        <div>
         
          <img 
            src="checkenWings.jpg" 
            alt="Spicy chicken wings" 
            style={{ width: '300px', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;