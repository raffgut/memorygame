const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express static files
app.use(express.static('assets'));

// Express body parser
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 3030;
app.listen(PORT, "0.0.0.0", console.log(`Server started on port: ${PORT}`));
