const Express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = new Express();

app.use(morgan('tiny'));

app.use(Express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Index.html'));
});

app.listen(process.env.PORT, process.env.IP, () => {
  debug(`Server is running on port ${chalk.green(process.env.PORT)}`);
});
