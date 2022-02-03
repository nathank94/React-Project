import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe";
import "./App.css";

const App = () => {

  const APP_ID = '62a0c862'
  const APP_KEY = '7502cc23bd9f98f37199abf21e08473b'

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes()
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=recipes&app_id=62a0c862&app_key=7502cc23bd9f98f37199abf21e08473b`)
    const data = await response.json();
    //const responseJSON= await response.json()
    setRecipes(data.hits);
    console.log(data.hits);
  }

  //How to update state in the components
  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type="text" />
        <button className='search-button' type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
      <Recipe
      key={recipe.recipe.label}
      
      title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>))}
    </div>
  );
};

export default App;
