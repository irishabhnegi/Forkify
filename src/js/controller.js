import * as model from './model.js'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
// import icons from "../img/icons.svg";  

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';


const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1)

    if (!id) return;
    recipeView.renderSpinner()

    // 1) Loading recipe
    await model.loadRecipe(id)

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);

  } catch (err) {
    recipeView.renderError()

  }
};

const controlSearchResults = async function () {

  try {
    // 1) Get Search query
    const query = searchView.getQuery()
    if (!query) return;

    // 2) Load seach result 
    await model.loadSearchResults(query)

    // 3)Render results
    console.log(model.state.search.results);

  } catch (err) {
    console.log(err)
  }
}
controlSearchResults()

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults)
}
init()