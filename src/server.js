const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

// Initialization
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}));

// Global Variables

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/note.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;