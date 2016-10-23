const path = require('path');
const express = require('express');

const port = 9999;
const app = express();

app.use('/', express.static(path.resolve('./')));

app.listen(port, () => {
  console.log(`Listening on ${ port }...`);
});
