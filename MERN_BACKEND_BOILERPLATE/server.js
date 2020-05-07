const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// app
const app = express();

//envitonment
const port = process.env.PORT || 8000;
const env = process.env.ENV || 'DEVELOPMENT';
const client_app = process.env.CLIENT_URL;
const MONGO_URI = process.env.DATABASE;

// database
const dbcon = (db_env) => {
	mongoose
		.connect(db_env, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		})
		.then(() => console.log('[API] : Database Connected'));
};
dbcon(MONGO_URI);

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
const apiRoutes = require('./routes/apis');
const authRoutes = require('./routes/auth');

// routes middlewares
app.use('/api', blogRoutes);
app.use('/api', apiRoutes);

// app listen
app.use(function(req, res) {
	res.status(404).json({ error: '404 : Page not found' });
});

app.listen(port, () => {
	console.log(
		`[API] : Server running on port ${port} | ENVIRONMENT : ${env} \n[API] : CLIENT APP : ${client_app}`
	);
});
