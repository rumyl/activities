 // Function to add an ingredient field
 function addIngredient() {
    var ingredientsList = document.getElementById('ingredientsList');
    var newIngredient = document.createElement('li');
    var input = document.createElement('input');
    input.type = 'text';
    input.required = true;
    newIngredient.appendChild(input);
    ingredientsList.appendChild(newIngredient);
  }

  // Function to add an instruction field
  function addInstruction() {
    var instructionsList = document.getElementById('instructionsList');
    var newInstruction = document.createElement('li');
    var input = document.createElement('input');
    input.type = 'text';
    input.required = true;
    newInstruction.appendChild(input);
    instructionsList.appendChild(newInstruction);
  }

  // Function to save the recipe
  document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var recipeTitle = document.getElementById('title').value;
    var ingredientsList = document.getElementById('ingredientsList');
    var instructionsList = document.getElementById('instructionsList');
    var ingredients = [];
    var instructions = [];

    // Get all ingredients
    var ingredientInputs = ingredientsList.getElementsByTagName('input');
    for (var i = 0; i < ingredientInputs.length; i++) {
      if (ingredientInputs[i].value.trim() !== '') {
        ingredients.push(ingredientInputs[i].value);
      }
    }

    // Get all instructions
    var instructionInputs = instructionsList.getElementsByTagName('input');
    for (var j = 0; j < instructionInputs.length; j++) {
      if (instructionInputs[j].value.trim() !== '') {
        instructions.push(instructionInputs[j].value);
      }
    }

    // Create the recipe object
    var recipe = {
      title: recipeTitle,
      ingredients: ingredients,
      instructions: instructions
    };

    // Clear the form inputs
    document.getElementById('title').value = '';
    ingredientsList.innerHTML = '';
    instructionsList.innerHTML = '';

    // Add the recipe to the recipe list
    addRecipeToList(recipe);
  });

  // Function to add a recipe to the recipe list
  function addRecipeToList(recipe) {
    var recipeList = document.getElementById('recipeList');
    var newRecipe = document.createElement('li');
    newRecipe.innerHTML = '<span class="recipe-title" onclick="toggleRecipeDetails(this)">' + recipe.title + '</span>' +
      '<div style="display: none;">' +
      '<strong>Ingredients:</strong><br>' + recipe.ingredients.join('<br>') + '<br><br>' +
      '<strong>Instructions:</strong><ol><li>' + recipe.instructions.join('</li><li>') + '</li></ol>' +
      '</div>';
    recipeList.appendChild(newRecipe);
  }

  // Function to toggle recipe details visibility
  function toggleRecipeDetails(titleElement) {
    var detailsElement = titleElement.nextElementSibling;
    if (detailsElement.style.display === 'none') {
      detailsElement.style.display = 'block';
    } else {
      detailsElement.style.display = 'none';
    }
  }