const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const PORT = 3000;

app.use('/new', newRouter);
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log('running');
});
