// components/RecipeGrid.js
import React from 'react';
import RecipeCard from './RecipeCard';

const recipesData = [
  { id: 1, title: 'Fried Rice served w/ Veggies', image: 'fried-rice-served-with-hot-syrup.jpg', time: '30 Mins' },
  { id: 2, title: 'Delicious Roasted Salmon', image: 'view-delicious-food-from-around-world.jpg', time: '45 Mins' },
  { id: 3, title: 'Strawberry Oatmeal Pancakes', image: 'pancakes-with-homemade-delicious-jam.jpg', time: '20 Mins' },
  { id: 4, title: 'Chicken Noodles with Curry', image: 'spicy-spaghetti-frying-pan.jpg', time: '35 Mins' },
  { id: 5, title: 'The Best Easy One Pot Chicken', image: 'roasted-christmas-ham-with-pomegranate-lentils-food-photography.jpg', time: '50 Mins' },
  { id: 6, title: 'Pro Desserts! Creamy Chicken', image: 'chicken-caesar-salad-with-dressing.jpg', time: '60 Mins' },
];

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '30px',
  padding: '0 5%',
};

const RecipeGrid = () => {
  return (
    <section style={gridStyle}>
      {recipesData.map(recipe => (
        <RecipeCard 
          key={recipe.id} 
          title={recipe.title} 
          image={recipe.image} 
          time={recipe.time} 
        />
      ))}
    </section>
  );
};

export default RecipeGrid;