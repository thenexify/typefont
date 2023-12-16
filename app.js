const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const port = 6600

app.use('/static', express.static('static'));
app.use('/', require('./routes/routes'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.listen(port, () => {
  console.log(`TypeFont on port http://localhost:${port}`);
});