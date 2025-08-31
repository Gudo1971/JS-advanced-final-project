'use strict';
const prompt = require("prompt-sync")();

const cakeRecipes = require("./cake-recipes.json");

// Creer een global array voor saved recipe 

const savedRecipes = [];


// Your functions here
// function to get a list of unique Authors
const getAllUniqueAuthors = (recipes) => {
  const authors = [];
  recipes.forEach(recipes =>{
    if (!authors.includes(recipes.Author)) { authors.push(recipes.Author);
    }
  });
  
  return authors;
};

// Function to Log Recipe Names

const logRecipeNames =(recipes) => {
  if (!recipes || recipes.length === 0) {
    console.log ("No recipes found.");
    return
  }
  recipes.forEach(({Name}) =>{
    console.log("- " + Name);
  });
};

// Function to Get Recipes by Author

const getRecipeByAuthor = (recipes, author) =>{
  return recipes.filter(recipe => recipe.Author.toLowerCase().trim() === author.toLowerCase().trim());
};

// Function to Get Recipes by Ingredient

const getRecipeByIngredient =(recipes, ingredient) =>{
  return recipes.filter(recipe => recipe.Ingredients.some(item => 
    item.toLowerCase().trim().includes(ingredient.toLowerCase().trim())
  )
);
};

// Function to Get Recipe by Name

const getRecipeByName = (recipes, name) => {
  return recipes.find(recipe => recipe.Name.toLowerCase().includes(name.toLowerCase())) || null;
};
// Function to Get All Ingredients

const getAllIngredients =(recipes) =>{
  return recipes.reduce((all, recipe) =>{

    return   all.concat(recipe.Ingredients);
  }, []);
};


// Part 2

const displayMenu = () => {
  console.log("\nRecipe Management System Menu:");
  console.log("1. Show All Authors");
  console.log("2. Show Recipe names by Author");
  console.log("3. Show Recipe names by Ingredient");
  console.log("4. Get Recipe by Name");
  console.log("5. Get All Ingredients of Saved Recipes");
  console.log("6. Get Ingredients of 1 one specific recipe ");
  console.log("0. Exit");
  const choice = prompt("Enter a number (1-5) or 0 to exit: ");
  return parseInt(choice);
}


let choice;
let selectedAuthor = null;
do {
  choice = displayMenu();

  switch (choice) {
    case 1: {
  const authors = getAllUniqueAuthors(cakeRecipes);
  console.log("\nAll Authors:\n");

  authors.forEach((author, index) => {
    console.log(`${index + 1}.${author}`);
  });

  const authorIndex = parseInt(prompt("Enter the number of the author to view their recipes: ")) - 1;

  if (authorIndex >= 0 && authorIndex < authors.length) {
    const selectedAuthor = authors[authorIndex];
    const recipesByAuthor = getRecipeByAuthor(cakeRecipes, selectedAuthor);

    if (recipesByAuthor.length === 0) {
      console.log(`No recipes found for author: ${selectedAuthor}`);
    }else {
      console.log(` by${selectedAuthor}:\n`);
      recipesByAuthor.forEach((recipe, index) => {
        console.log(`${index + 1}.${recipe.Name}`);
      });
    
      const recipeIndex = parseInt(prompt("Enter the number of the recipe to view details: ")) - 1;

      if (recipeIndex >= 0 && recipeIndex < recipesByAuthor.length) {
        const selectedRecipe = recipesByAuthor[recipeIndex];

      console.log("\nFull Recipe:");
      console.log(selectedRecipe);;

        const saveChoice = prompt("Do you want to save this recipe? (yes or no): ").toLowerCase();
        if (saveChoice === "yes" || saveChoice === "y") {
          savedRecipes.push(selectedRecipe);
          console.log("Recipe saved.");
        } else {
          console.log("Recipe not saved.");
        }
      } else {
        console.log("Invalid recipe number.");
      }
    }
  } else {
    console.log("Invalid author number.");
  }

  break;
}

    case 2: {
let recipesByAuthor = [];
let authorName = "";

do {
  authorName = prompt("Enter author's name: ");
  recipesByAuthor = getRecipeByAuthor(cakeRecipes, authorName);

  if (recipesByAuthor.length === 0) {
    console.log(`No recipes found for author: ${authorName}. Try again.`);
  }
} while (recipesByAuthor.length === 0);




  console.log(` by ${authorName}:\n`);
  recipesByAuthor.forEach((recipe, index) => {
    console.log(`${index + 1}.${recipe.Name}`);
  });

  const indexChoice = parseInt(prompt("Enter the number of the recipe to view details: ")) - 1;

  if (indexChoice >= 0 && indexChoice < recipesByAuthor.length) {
    const selectedRecipe = recipesByAuthor[indexChoice];
    console.log(`\nRecipe: ${selectedRecipe.Name}`);
    console.log("\nIngredients:");
    selectedRecipe.Ingredients.forEach(ing => console.log("- " + ing));
0

    const saveChoice = prompt("Do you want to save this recipe? (yes or no): ").toLowerCase();
if (saveChoice === "yes" || saveChoice === "y") {
      savedRecipes.push(selectedRecipe);
      console.log("Recipe saved.");
    } else {
      console.log("Recipe not saved.");
    }
  } else {
    console.log("Invalid recipe number.");
  }

  break;
}


 


    case 3:
      const ingredient = prompt ("Enter an ingredient to search for: ").toLocaleLowerCase().trim();
      const recipeWithIngredient = getRecipeByIngredient(cakeRecipes, ingredient);

      if (recipeWithIngredient.length === 0){
        console.log(`no recipe found with ingredient; ${ingredient}`) ;
      }else{
        console.log (`\n Recipies with ingredient: ${ingredient} \n`);
        logRecipeNames(recipeWithIngredient);
      }

      break;
    case 4:
      const recipeByName = prompt("enter a recipe where your looking for: ");
      const foundRecipe = getRecipeByName(cakeRecipes, recipeByName);
      if (!foundRecipe ){
        console.log (`\n there is no recipe containing: ${recipeByName}\n`);
      }else{
        console.log(`\n recipe found wich contains ${recipeByName} in the name: \n`);
        console.log (`\n the following recipe is found: ${foundRecipe.Name}\n`);
      const saveChoice = prompt ("Do you want to save this recipe for ingredient listing later? (yes/no): ").toLocaleLowerCase();
      if (saveChoice === "yes" || saveChoice === "y" ){
        savedRecipes.push(foundRecipe);
        console.log (`Recipe: ${foundRecipe.Name} saved`)
      }else {
        console.log("recipe is not saved.");
      }
      }
        break;

    case 5: {
      if (savedRecipes.length === 0) {
      console.log("No recipes saved yet.");
      } else {
      console.log("\nIngredients from saved recipes:\n");
      savedRecipes.forEach((recipe, index) => {
      console.log(`${index + 1}. Recipe: ${recipe.Name}\n`);
      recipe.Ingredients.forEach(ing => console.log("- " + ing));
      console.log(""); 
      });
  }
  break;
}

      case 6:
        let recipeNameInput = prompt(" enter the recipe name to get the ingredient list:");
        const recipe = getRecipeByName(cakeRecipes, recipeNameInput);
        if (!recipe){
          console.log(`No recipe found with name: ${recipeNameInput}`);
        }else{
          console.log(`\nrecipe name: ${recipe.Name}:\n`);
          console.log(`Ingredients for ${recipe.Name}\n`);
          recipe.Ingredients.forEach(item => console.log ("-" + item ));
        }
        break;
        
    case 0:
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid input. Please enter a number between 0 and 5.");
  }
} while (choice !== 0);