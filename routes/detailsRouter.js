const { Router } = require('express');
const detailRouter = Router();

detailRouter.get('/', (req, res) =>
  res.render('details', { title: 'Message Details' })
);

module.exports = detailRouter;
