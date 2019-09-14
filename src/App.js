import React, { useEffect, useState } from "react";
import Recipe from "./recipe";
import "./App.css";
const App = () => {
  const app_id = "7065798b";
  const app_key = "b7eea0fa01f566f7db68d1ffaba87164";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getReceipes();
  }, [query]);

  const getReceipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App" onSubmit={getSearch}>
      <form className="search-form">
        <input
          type="text"
          className="search=bar"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      <div className="recipe">
       
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      
   
      </div>
      </div>);
};
export default App;
