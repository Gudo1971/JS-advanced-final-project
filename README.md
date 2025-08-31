Function to Get Unique Authors

Create a function that returns all authors of a given recipe list.
Utilize the `.forEach` method for iteration.
Input: `recipes` (an array of recipes with the same format as `cakeRecipes`)
Output: A list of unique authors (each author appears only once in the returned list).
Users can choose this option from the menu to view authors' names.

Function to Log Recipe Names

Create a function that logs the name of each recipe.
Input: `recipes` (a list of recipes with the same format as `cakeRecipes`).
Utilize object destructuring within the function to access recipe names.
No specific output is required; it should log the names to the console.
Users can select this option from the menu and triggers this function.
•
Function to Get Recipes by Author

Create a function that returns all recipes of a given author.
Utilize the `.filter` method for filtering recipes by author.
Input: `recipes` (an array of recipes with the same format as `cakeRecipes`) and `author` (a string representing the author's name).
Output: An array of all recipes authored by the given author.
This option is available in the menu and triggers this function.
•
Function to Get Recipes by Ingredient

Create a function that returns a list of recipes that contain a given ingredient.
Utilize the `.filter()` method to filter recipes.
Use the `.some()` method to check if the ingredient list of each recipe contains the given ingredient.
Input: `recipes` (an array of recips with the same format as `cakeRecipes`) and `ingredient` (a string representing the ingredient to search for).
Output: An array of recipes that contain the specified ingredient.
This feature is accessible from the menu and triggers this function.
•
Function to Get Recipe by Name

Create a function that returns a single recipe that matches a given name.
Utilize the `.find()` method to find a recipe by name.
Use `.includes()` method to check for name match.
Input: `recipes` (an array of recipes with the same format as `cakeRecipes`) and `name` (a string representing the recipe name to search for).
Output: The recipe object that matches the given name, or `null` if no match is found.
After running this function from the menu, give the user the option to save the found recipe so that it can be used to print an ingredient list (see next requirement).
•
Function to Get All Ingredients

Create a function that returns all ingredients of a given recipe list in a single array.
Utilize the `.reduce()` method to flatten the recipe array.
Input: `recipes` (an array of recipes with the same format as `cakeRecipes`).
Output: An array containing all the ingredients from the recipe list.
Users can select this option from the menu to view the ingredient list from the recipes that are saved in the previous function.

===================================================================================================================================================================================================

Show All Authors
===================================================================================================================================================================================================

When this option is selected, the program should display a list of all unique authors found in the recipe data.
you can choose the author from the list and get their recepies
when you seen the recipie you can select one  en get the complete recipe
you have the option to save the ingredients  to print out later  for a shopping list

Show Recipe Names by Author
===================================================================================================================================================================================================

If you choose this option, you will be prompted to enter the name of an author.

The program will then display a list of recipe names authored by the specified author.
you can choose the author from the list and get their recepies
when you seen the recipie you can select one  en get the complete recipe
you have the option to save the ingredients  to print out later  for a shopping list


Show Recipe Names by Ingredient
===================================================================================================================================================================================================


This option allows you to search for recipes containing a specific ingredient.

You will be prompted to enter the name of the ingredient.

The program will display a list of recipe names that include the entered ingredient.

Get Recipe by Name
===================================================================================================================================================================================================

If you select this option, you can search for a recipe by its name.

Enter the name of the recipe you're looking for.

The program will display the details of the found recipe.

You'll also have the option to save the ingredients of the recipe. Save them in a global variable, so that you can save the ingredients of multiple recipes and also use it for the next step. 

Get All Ingredients of Saved Recipes
===================================================================================================================================================================================================

Choose this option to view a list of ingredients from the saved recipes.

The program will display the ingredient list from all the saved recipes.
