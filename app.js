const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');

const indexRouter = require('./routes/index');
const schoolRouter = require('./routes/ecole');
const entrepriseRouter = require('./routes/entreprise');
const projectsRouter = require('./routes/projects');
const competencesRouter = require('./routes/competences');
const veilleRouter = require('./routes/veille');
const contactRouter = require('./routes/contact');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/centre-de-formation', schoolRouter);
app.use('/entreprise', entrepriseRouter);
app.use('/mes-projets', projectsRouter);
app.use('/mes-competences', competencesRouter);
app.use('/veille', veilleRouter);
app.use('/contact', contactRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

let port;
if (process.env.PORT) {
    port = process.env.PORT;
} else {
    port = 8080;
}
const server = app.listen(port, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
});
