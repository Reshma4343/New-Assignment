// components/MoreRecipes.js
import React from 'react';
import RecipeCard from './RecipeCard';

const moreRecipesData = [
  { id: 10, title: 'Steak & Veggie Stir-fry', image: 'beef-stir-fry-with-vegetables.jpg', time: '25 Mins' },
  { id: 11, title: 'Korean BBQ Tacos', image: 'chicken-caesar-salad-with-dressing.jpg', time: '40 Mins' },
  { id: 12, title: 'Japanese Salmon Bowl', image: 'salmonWithGreenOnion.jpg', time: '30 Mins' },
  { id: 13, title: 'Spicy Vegan Burger', image: 'vegiterianBurger.jpg', time: '20 Mins' },
  { id: 14, title: 'Chicken Fajita Wraps', image: 'vegitableMeetWrap.jpg', time: '35 Mins' },
  { id: 15, title: 'Kitchen Basics Soup', image: 'pumpkin soup.jpg', time: '45 Mins' },
];

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)', // As seen in the image, a wider grid
  gap: '15px',
  padding: '0 5%',
};

const MoreRecipes = () => {
  return (
    <section style={{ margin: '60px 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Try this delicious recipe to make your day</h2>
      <div style={gridStyle}>
        {moreRecipesData.map(recipe => (
          <RecipeCard 
            key={recipe.id} 
            title={recipe.title} 
            image={recipe.image} 
            time={recipe.time} 
          />
        ))}
      </div>
    </section>
  );
};

export default MoreRecipes;