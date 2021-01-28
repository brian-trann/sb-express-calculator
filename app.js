const express = require('express');
const { sortValidInput, handleInput, calcMean, calcMode, calcMedian } = require('./helpers');
const ExpressError = require('./expressError');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
	return res.send('yes');
});

app.get('/mean', (req, res, next) => {
	try {
		if (!req.query.nums) throw new ExpressError('Please provide a value');
		const nums = req.query.nums;
		const validArr = handleInput(nums);
		if (!validArr) throw new ExpressError('Not a valid input', 404);
		const mean = calcMean(validArr);

		return res.json({ operation: 'mean', value: mean });
	} catch (error) {
		return next(error);
	}
});
app.get('/median', (req, res, next) => {
	try {
		if (!req.query.nums) throw new ExpressError('Please provide a value');
		const nums = req.query.nums;
		const validArr = handleInput(nums);
		if (!validArr) throw new ExpressError('Not a valid input', 404);
		const sortedValidArr = sortValidInput(validArr);
		const median = calcMedian(sortedValidArr);
		return res.json({ operation: 'median', value: median });
	} catch (error) {
		return next(error);
	}
});

app.get('/mode', (req, res, next) => {
	try {
		if (!req.query.nums) throw new ExpressError('Please provide a value');
		const nums = req.query.nums;
		const validArr = handleInput(nums);
		if (!validArr) throw new ExpressError('Not a valid input', 404);
		const mode = calcMode(validArr);
		return res.json({ operation: 'mode', value: mode });
	} catch (error) {
		next(error);
	}
});
app.get('/all', (req, res, next) => {
	try {
		if (!req.query.nums) throw new ExpressError('Please provide a value');
		const nums = req.query.nums;
		const validArr = handleInput(nums);
		const sortedValidArr = sortValidInput(validArr);
		if (!validArr) throw new ExpressError('Not a valid input', 404);
		const mean = calcMean(validArr);
		const mode = calcMode(sortedValidArr);
		const median = calcMedian(sortedValidArr);
		return res.json({ operation: 'all', mode, median, mean });
	} catch (error) {
		next(error);
	}
});
app.use(function(err, req, res, next) {
	// the default status is 500 Internal Server Error
	let status = err.status || 500;
	let message = err.message;

	// set the status and alert the user
	return res.status(status).json({
		error : { message, status }
	});
});

app.listen(3000, () => {
	console.log('App on port 3000');
});
