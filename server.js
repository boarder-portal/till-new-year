const path = require('path');
const express = require('express');

const port = 9999;
const app = express();

app.set('views', path.resolve('./'));
app.set('view engine', 'pug');
app.use('/', express.static(path.resolve('./')));
app.use('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Listening on ${ port }...`);
});
