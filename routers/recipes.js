const express = require('express');
const db = require('../data/config');

const recipes = require('../data/recipeHelpers');

const router = express.Router();

// GET all recipes
router.get('/', async (req, res, next) => {
	try {
		const list = await recipes.getRecipes();
		res.status(200).json(list);
	} catch (error) {
		next(error);
	}
});

// GET shopping list

router.get('/:id/shoppinglist', async (req, res, next) => {
	const id = parseInt(req.params.id);
	try {
		const list = await recipes.getShoppingList(id);
		res.status(200).json(list);
	} catch (error) {
		next(error);
	}
});

// GET instructions

router.get('/:id/instructions', async (req, res, next) => {
	const id = parseInt(req.params.id);

	try {
		const list = await recipes.getInstructions(id);
		res.status(200).json(list);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
