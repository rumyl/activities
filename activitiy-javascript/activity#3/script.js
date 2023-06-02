let recipeList = [];
let currentRecipeIndex = -1;

function addIngredient() {
  const ingredientInput = document.getElementById("ingredient-input");
  const ingredient = ingredientInput.value.trim();
  if (ingredient !== "") {
    const ingredientsList = document.getElementById("ingredients-list");
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    ingredientsList.appendChild(listItem);
    ingredientInput.value = "";
  }
}

function addInstruction() {
  const instructionInput = document.getElementById("instruction-input");
  const instruction = instructionInput.value.trim();
  if (instruction !== "") {
    const instructionsList = document.getElementById("instructions-list");
    const listItem = document.createElement("li");
    listItem.textContent = instruction;
    instructionsList.appendChild(listItem);
    instructionInput.value = "";
  }
}

function saveRecipe() {
  const titleInput = document.getElementById("recipe-title");
  const title = titleInput.value.trim();
  const ingredientsList = document.getElementById("ingredients-list");
  const instructionsList = document.getElementById("instructions-list");

  if (title !== "" && ingredientsList.children.length > 0 && instructionsList.children.length > 0) {
    const recipe = {
      title: title,
      ingredients: Array.from(ingredientsList.children).map(li => li.textContent),
      instructions: Array.from(instructionsList.children).map(li => li.textContent)
    };

    if (currentRecipeIndex === -1) {
      recipeList.push(recipe);
    } else {
      recipeList[currentRecipeIndex] = recipe;
      currentRecipeIndex = -1;
    }

    renderRecipeList();
    resetForm();
  }
}

function renderRecipeList() {
  const recipeListElement = document.getElementById("recipe-list");
  recipeListElement.innerHTML = "";

  recipeList.forEach((recipe, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = recipe.title;
    listItem.addEventListener("click", () => displayRecipeDetails(index));
    recipeListElement.appendChild(listItem);
  });
}

function displayRecipeDetails(index) {
  const recipe = recipeList[index];
  const titleInput = document.getElementById("recipe-title");
  const ingredientsList = document.getElementById("ingredients-list");
  const instructionsList = document.getElementById("instructions-list");

  titleInput.value = recipe.title;
  ingredientsList.innerHTML = "";
  instructionsList.innerHTML = "";

  recipe.ingredients.forEach(ingredient => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    ingredientsList.appendChild(listItem);
  });

  recipe.instructions.forEach(instruction => {
    const listItem = document.createElement("li");
    listItem.textContent = instruction;
    instructionsList.appendChild(listItem);
  });

  currentRecipeIndex = index;
}

function resetForm() {
  const titleInput = document.getElementById("recipe-title");
  const ingredientsList = document.getElementById("ingredients-list");
  const instructionsList = document.getElementById("instructions-list");

  titleInput.value = "";
  ingredientsList.innerHTML = "";
  instructionsList.innerHTML = "";

  currentRecipeIndex = -1;
}

renderRecipeList();