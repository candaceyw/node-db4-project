const express = require('express');
const helmet = require('helmet');
const ingredientsRouter = require('./routers/ingredients');
const qtyRouter = require('./routers/quantities');
const recipesRouter = require('./routers/recipes');

const server = express();
const port = 4800;

server.use(helmet());
server.use(express.json());

server.use('/recipes', recipesRouter);
server.use('/ingredients', ingredientsRouter);
server.use('/quantities', qtyRouter);

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: 'Something went wrong',
	});
});

server.get('/', (req, res) => {
	res.status(200).json('Success');
});

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`);
});
