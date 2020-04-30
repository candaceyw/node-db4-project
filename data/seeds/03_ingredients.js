exports.seed = async function (knex) {
	await knex('ingredients').insert([
		{ ingredient_name: 'watermelon', qty_id: 1 },
		{ ingredient_name: 'sugar', qty_id: 2 },
		{ ingredient_name: 'limes', qty_id: 3 },
		{ ingredient_name: 'vodka', qty_id: 4 },
		{ ingredient_name: 'white bread', qty_id: 5 },
		{ ingredient_name: 'mayonnaise', qty_id: 6 },
		{ ingredient_name: 'cheddar cheese', qty_id: 7 },
		{ ingredient_name: 'shredded cheddar', qty_id: 6 },
	]);
};
