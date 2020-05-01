exports.up = async function (knex) {
	await knex.schema.createTable('recipes', (table) => {
		table.increments('id');
		table.text('recipe_name').notNullable().unique;
		table.text('instructions').notNullable();
	});
	await knex.schema.createTable('ingredient_qty', (table) => {
		table.increments('id');
		table.text('qty').notNullable();
	});

	await knex.schema.createTable('ingredients', (table) => {
		table.increments('id');
		table.text('ingredient_name').notNullable();
		table
			.integer('qty_id')
			.references('id')
			.inTable('ingredient_qty')
			.onDelete('SET NULL')
			.onUpdate('CASCADE');
	});

	await knex.schema.createTable('recipes_ingredients', (table) => {
		table
			.integer('recipe_id')
			.references('id')
			.inTable('recipes')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		table
			.integer('ingredient_id')
			.references('id')
			.inTable('ingredients')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		table.primary(['recipe_id', 'ingredient_id']);
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('recipes_ingredients');
	await knex.schema.dropTableIfExists('ingredients');
	await knex.schema.dropTableIfExists('ingredient_qty');
	await knex.schema.dropTableIfExists('recipes');
};
