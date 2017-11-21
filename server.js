const express = require('express');

const port = 8999;
const root = __dirname;
const app = express();

app.set('views', root);
app.set('view engine', 'pug');
app.use('/', express.static(root));
app.use('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Listening on ${ port }...`);
});
