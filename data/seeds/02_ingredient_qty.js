exports.seed = async function (knex) {
	await knex('ingredient_qty').insert([
		{ qty: '6-8 cups' },
		{ qty: '1/3 cup' },
		{ qty: '2' },
		{ qty: '8oz' },
		{ qty: '4 slices' },
		{ qty: '2 tablespoons' },
		{ qty: '4 oz' },
	]);
};
