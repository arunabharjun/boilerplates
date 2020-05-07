const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();

//envitonment
const port = process.env.PORT || 8000;
const env = process.env.ENV || 'DEVELOPMENT';
const client_app = process.env.CLIENT_URL;

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

// cors

if (env === 'DEVELOPMENT') {
	app.use(
		cors({
			origin: client_app
		})
	);
}

// routes
app.get('/api', (req, res) => {
	res.json({
		time: Date().toString()
	});
});

// app listen
app.use(function(req, res) {
	res.status(404).json({ error: '404 : Page not found' });
});

app.listen(port, () => {
	console.log(
		`[API] : Server running on port ${port} | ENVIRONMENT : ${env} \n[API] : CLIENT APP : ${client_app}`
	);
});
