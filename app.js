const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
	return res.send('yes');
});

app.get('/mean', (req, res) => {
	const test = req.query.test;
	return res.send(`test: ${req.params.test}`);
});
app.get('/median', (req, res) => {
	return res.send('median');
});
app.get('/mode', (req, res) => {
	return res.send('mode');
});

app.listen(3000, () => {
	console.log('App on port 3000');
});
