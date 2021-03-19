const Express = require('express');
const config = require('./config/index.js');

const app = Express();
const { port } = config.app;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up and running on port ${port}`);
});
