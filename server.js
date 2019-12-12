const express = require('express');

const port = 8999;
const root = __dirname;
const app = express();

app.set('views', root);
app.set('view engine', 'pug');
app.use('/tny', express.static(root));
app.use('/tny', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Listening on ${ port }...`);
});
