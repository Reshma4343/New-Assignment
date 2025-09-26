// components/Footer.js
import React from 'react';

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '40px 5%',
  marginTop: '40px',
};

const contentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid #555',
  paddingBottom: '20px',
  marginBottom: '20px',
};

const linkGroupStyle = {
  display: 'flex',
  gap: '30px',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <div>
          <h3 style={{ margin: 0 }}>Foodieland</h3>
          <p style={{ fontSize: '0.8em', color: '#ccc' }}>Taste the world one recipe at a time.</p>
        </div>
        <div style={linkGroupStyle}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Recipes</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About Us</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Terms</a>
        </div>
      </div>
      <div style={{ textAlign: 'center', fontSize: '0.7em', color: '#999' }}>
        © 2025 Foodieland. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;