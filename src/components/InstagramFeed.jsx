// components/InstagramFeed.js
import React from 'react';

const InstagramFeed = () => {
  const posts = Array(6).fill('instagram_post.jpg'); // Simulate 6 posts

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '10px',
    padding: '0 5% 40px',
  };

  return (
    <section style={{ textAlign: 'center', margin: '40px 0' }}>
      <h2 style={{ marginBottom: '20px' }}>Check out @foodieland on Instagram</h2>
      <div style={gridStyle}>
        {posts.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`Instagram Post ${index + 1}`} 
            style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '5px' }} 
          />
        ))}
      </div>
      <button style={{ padding: '10px 30px', backgroundColor: 'transparent', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}>
        Visit Instagram
      </button>
    </section>
  );
};

export default InstagramFeed;