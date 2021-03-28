const express = require('express');
const cors = require('cors');
const config = require('./config/index.js');

const app = express();
const { port } = config.app;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/user', require('./app/routes/UserRoute'));
app.use('/category', require('./app/routes/CategoryRoute'));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up and running on port ${port}`);
});
