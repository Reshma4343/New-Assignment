// components/Newsletter.js
import React from 'react';

const newsletterStyle = {
  textAlign: 'center',
  padding: '60px 5%',
  margin: '40px 0',
  backgroundColor: '#f0f0f0',
  borderRadius: '10px',
  maxWidth: '800px',
  margin: '40px auto',
};

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Subscribed!');
  };

  return (
    <section style={newsletterStyle}>
      <h2 style={{ marginBottom: '10px' }}>Deliciousness to your inbox</h2>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Get exclusive recipes and special offers delivered straight to your email.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <input
          type="email"
          placeholder="Your email address"
          required
          style={{ padding: '10px', width: '300px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        <button 
          type="submit" 
          style={{ padding: '10px 20px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;