const Express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = new Express();
const bookRouter = Express.Router();

app.use(morgan('tiny'));

app.use(Express.static(path.join(__dirname, '/public')));

app.set('views', './src/views');
app.set('view engine', 'ejs')

bookRouter.route('/').get((req, res) => {
  res.send('Hello Books');
});

bookRouter.route('/single').get((req, res) => {
  res.send('Hello Single Book');
});


app.use('/books', bookRouter);

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Library',
    nav: [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }]
  });
});

app.listen(process.env.PORT, process.env.IP, () => {
  debug(`Server is running on port ${chalk.green(process.env.PORT)}`);
});
