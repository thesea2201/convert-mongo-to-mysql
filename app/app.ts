// lib/app.ts
import express = require('express');

const app: express.Application = express();

app.get('/', function (req, res) {
	res.send('hello world');
});

app.listen(3000, function () {
	console.log('example app listening on port 3000');
});
