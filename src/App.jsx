// App.js
import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import RecipeGrid from './components/RecipeGrid';
import ChefSection from './components/ChefSection';
import InstagramFeed from './components/InstagramFeed';
import MoreRecipes from './components/MoreRecipes';
import Footer from './components/Footer';
import Newsletter from "./components/Newsletter.jsx";


import './App.css'; // Assume a global stylesheet for basic reset/layout

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <h2 style={{ textAlign: 'center', margin: '40px 0 20px' }}>Simple and tasty recipes</h2>
      <RecipeGrid />
      <ChefSection />
      <InstagramFeed />
      <MoreRecipes />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;