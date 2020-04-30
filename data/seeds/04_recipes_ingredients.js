exports.seed = async function (knex) {
	await knex('recipes_ingredients').insert([
		{ recipe_id: 1, ingredient_id: 1, from_date: '2020-30-04' },
		{
			recipe_id: 2,
			ingredient_id: 2,
			from_date: '2020-30-04',
			to_date: '2020-30-04',
		},
	]);
};
