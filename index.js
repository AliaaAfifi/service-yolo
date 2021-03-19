const Express = require('express')
const config = require('./config/index.js')

const app = Express();
const port = config.app.port;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`)
})