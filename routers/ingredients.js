const express = require('express');
const db = require('../data/config');

const router = express.Router();

// GET all ingredients
router.get('/', async (req, res, next) => {
	try {
		res.json(await db('ingredients'));
	} catch (error) {
		next(error);
	}
});

module.exports = router;
