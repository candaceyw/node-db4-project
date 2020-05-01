const express = require('express');
const db = require('../data/config');

const router = express.Router();

// GET all measurements/quantities
router.get('/', async (req, res, next) => {
	try {
		res.json(await db('ingredient_qty'));
	} catch (error) {
		next(error);
	}
});

module.exports = router;
