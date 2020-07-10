


const server = require('./server')
const chalk = require('chalk');


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(chalk.red`\n*** Server Running on http://localhost:${port} ***\n`);
});
