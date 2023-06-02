
 function addIngredient() {
    var ingredientsList = document.getElementById('ingredientsList');
    var newIngredient = document.createElement('li');
    var input = document.createElement('input');
    input.type = 'text';
    input.required = true;
    newIngredient.appendChild(input);
    ingredientsList.appendChild(newIngredient);
  }

  function addInstruction() {
    var instructionsList = document.getElementById('instructionsList');
    var newInstruction = document.createElement('li');
    var input = document.createElement('input');
    input.type = 'text';
    input.required = true;
    newInstruction.appendChild(input);
    instructionsList.appendChild(newInstruction);
  }

  document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var recipeTitle = document.getElementById('title').value;
    var ingredientsList = document.getElementById('ingredientsList');
    var instructionsList = document.getElementById('instructionsList');
    var ingredients = [];
    var instructions = [];

    var ingredientInputs = ingredientsList.getElementsByTagName('input');
    for (var i = 0; i < ingredientInputs.length; i++) {
      if (ingredientInputs[i].value.trim() !== '') {
        ingredients.push(ingredientInputs[i].value);
      }
    }

    var instructionInputs = instructionsList.getElementsByTagName('input');
    for (var j = 0; j < instructionInputs.length; j++) {
      if (instructionInputs[j].value.trim() !== '') {
        instructions.push(instructionInputs[j].value);
      }
    }

    var recipe = {
      title: recipeTitle,
      ingredients: ingredients,
      instructions: instructions
    };

    document.getElementById('title').value = '';
    ingredientsList.innerHTML = '';
    instructionsList.innerHTML = '';

    addRecipeToList(recipe);
  });

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

  function toggleRecipeDetails(titleElement) {
    var detailsElement = titleElement.nextElementSibling;
    if (detailsElement.style.display === 'none') {
      detailsElement.style.display = 'block';
    } else {
      detailsElement.style.display = 'none';
    }
  }