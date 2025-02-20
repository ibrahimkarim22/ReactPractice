import {useState, useEffect} from 'react';

const API = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const RandomRecipe = () => {

    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const FETCH_RECIPES = async () => {
            try{
                const response = await fetch(API);
                const data = await response.json();
                setRecipes(data.meals);
                setRecipe(data.meals[Math.floor(Math.random() * data.meals.length)])
            } catch(err) {
                console.error('error fetching data...', err);
            } finally {
                setLoading(false);
            }
        }
        FETCH_RECIPES();
    }, [])

    const GENERATE_RECIPE = () => {
        setRecipe(recipes[Math.floor(Math.random() * recipes.length)])
    }

    return    (
        <>
            <h1>GENERATE A RANDOM RECIPE</h1>

            {loading ? ( <p>loading...</p>

            ) : (
                <div>
                    <img alt='meal' src={recipe?.strMealThumb} />
                    <p>NAME: {recipe?.strMeal}</p>
                    <p>CATEGORY: {recipe?.strCategory}</p>
                    <p>INSTRUCTIONS: {recipe?.strInstructions}</p>

                    <button onClick={GENERATE_RECIPE}>RANDOMIZE</button>
                </div>
            )
            
            
            }
        </>
    )
};

export default RandomRecipe; 