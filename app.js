const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const detailRouter = require('./routes/detailsRouter');
const path = require('node:path');
const assetPath = path.join(__dirname, 'public');
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(assetPath));

app.use('/new', newRouter);
app.use('/details', detailRouter);
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log('running');
});
