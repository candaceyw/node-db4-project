const db = require('../data/config');

module.exports = {
	getRecipes,
	getRecipesById,
	getShoppingList,
	getInstructions,
};

// getRecipes(): should return a list of all recipes in the database.

function getRecipes() {
	return db('recipes');
}

function getRecipesById(id) {
	return db('recipes').where({ recipe_id: id });
}

// getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
	return db('recipes_ingredients as ri')
		.join('recipes as r', 'r.id', 'ri.recipe_id')
		.join('ingredients as i', 'i.id', 'ri.ingredient_id')
		.join('ingredient_qty as iq', 'iq.id', 'ri.ingredient_id')
		.where('ri.recipe_id', recipe_id)
		.select('r.id', 'i.ingredient_name', 'iq.qty');
}

// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe

function getInstructions(recipe_id) {
	return db('recipes')
		.select('recipe_name', 'instructions')
		.where('id', recipe_id);
}
