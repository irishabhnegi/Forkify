import * as model from './model.js'
import recipeView from './views/recipeView.js';
// import icons from "../img/icons.svg";  

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1)
    console.log(id)

    if (!id) return;
    recipeView.renderSpinner()

    // 1) Loading recipe
    await model.loadRecipe(id)

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);

  } catch (err) {
    alert(err)

  }
}

// const event = ['hashChange', 'load']
['hashChange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipe))

// window.addEventListener('hashchange', showRecipe)
// window.addEventListener('load', showRecipe)