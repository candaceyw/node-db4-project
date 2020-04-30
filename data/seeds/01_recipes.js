exports.seed = async function (knex) {
	await knex('recipes').insert([
		{
			recipe_name: 'Watermelon Granita',
			instructions:
				'Add your cubed watermelon, sugar, and lime juice to your blender. Blend until smooth. Pour it all into a 9×13 metal pan and freeze for one hour. Using a fork, scrape to loosen the granita. Freeze for another hour and repeat. After it has been frozen for three hours, scrape it once more and then serve in a hollowed watermelon or in cups.',
		},
		{
			recipe_name: 'Classic Grilled Cheese Sandwich',
			instructions:
				'1. Preheat a small skillet over low heat. 2. Spread mayonnaise over one side of each piece of bread and place mayonnaise side down in the skillet. 3. Top with cheddar cheese slices, black pepper to taste and remaining slice of bread, mayonnaise side out. 4. Grill until golden, about 4-5 minutes. Flip and grill the other side until golden. 5. Optional: Just before serving, add the shredded cheddar directly to the outside of the sandwich and grill an additional minute or so until it gets crispy',
		},
	]);
};
