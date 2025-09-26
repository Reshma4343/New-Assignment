// components/Categories.js
import React from 'react';

const categoriesData = [

 { name: 'Steak & Veggie Stir-fry', image: 'pancakes-with-homemade-delicious-jam.jpg'},
   { name: 'Korean BBQ Tacos', image: 'pancakes-with-homemade-delicious-jam.jpg'},
  { name: 'Soups', image: 'pumpkin soup.jpg'},
   { name: 'Japanese Salmon Bowl', image: 'salmonCucumbers.jpg'},
  { name: 'Chicken Fried rice', image: 'roasted-christmas-ham-with-pomegranate-lentils-food-photography.jpg'},
    
];

const categoryContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  padding: '40px 0',
};

const categoryItemStyle = {
  textAlign: 'center',
};

const Categories = () => {
  return (
    <section>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Categories</h2>
      <div style={categoryContainerStyle}>
        {categoriesData.map((category) => (
          <div key={category.name} style={categoryItemStyle}>
            <div style={{ fontSize: '2em' }}>
              {category.image && <img src={category.image} alt={category.name} style={{ width: '100px', height: '70%', borderRadius: '50%' }} />}
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;