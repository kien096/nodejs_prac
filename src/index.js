const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

// Http logger
app.use(morgan('combined'));

// Template engine
const handlebars = exphbs.create({
  extname: '.hbs', // Specify the file extension as .hbs
  defaultLayout: 'main' // Specify the default layout file name
});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => console.log(`Example listening at https://localhost:${port}`));
