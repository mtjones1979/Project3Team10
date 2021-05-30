import React, { useState } from "react";
import API from "../../utils/API";
import RecipeSearch from "../../components/RecipeSearch/RecipeSearch"
import RecipeList from "../../components/RecipeSearch/RecipeList"
import Hero from "../../components/Hero/index"
import { Link, useLocation } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Search() {
    const [recipes, setRecipes] = useState([]);
    const [recipeSearch, setRecipeSearch] = useState("");

    const handleInputChange = event => {
        const { value } = event.target;
        setRecipeSearch(value);
  };

    const handleFormSubmit = event => {
        event.preventDefault();
        // const q = "chicken";
        console.log(recipeSearch)
        API.searchRecipes(recipeSearch)
        .then((res) =>{setRecipes(res.data.hits); console.log(recipes, "this is the get");})
        .catch(err => console.log(err));
        // API.getRecipesByQuery(recipeSearch)
        //     .then(res => setRecipes(res.data))
        //     .catch(err => console.log(err));
  }; console.log("are we getting this", recipeSearch)
  const location = useLocation();
  return (
   
    <div>
        <div className= "col- lg text-center">
          <Link to="/plan" className={location.pathname === "/plan"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Manage Meal Plan</button></Link>
          <Link to="/" className={location.pathname === "/"}><button type="button" className="btn btn-warning btn-lg homebtn m-4 ">Go Home</button></Link>
          <Link to="/list" className={location.pathname === "/list"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">My Shopping List</button></Link>
           
       </div>
       <div className="row"></div>
        <Hero />
        
        <h1 className="text-center">Search For Recipes!</h1>
 
        <form className="search">
            <div className="form-group-center">
                <Input
                    value={recipeSearch}
                    onChange={handleInputChange}
                    name="RecipeSearch"
                    type="text"
                    placeholder="Type in a Cuisine Type or Main Ingredient"
                />
                <Button type="success" onClick={handleFormSubmit} className="input-lg">
                    Search
                </Button>
            </div>
        </form>
        {recipes.length > 0 && (<RecipeSearch>
             {console.log("recipe", recipes)}
            {recipes.map(recipe => {
                return (
                    <RecipeList
                        key={recipe.recipe.label}
                        label={recipe.recipe.label}
                        url={recipe.recipe.url}
                        // ingredients={recipe.recipe.ingredients}
                        image={recipe.recipe.image}
                    />
                );
            })}
            {/* another map for ingredients */}
            {/* another return for ingredient list component */}
        </RecipeSearch> 
        )}
      </div>
    );
}
export default Search;
