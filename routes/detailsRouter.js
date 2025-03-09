const { Router } = require('express');
const detailRouter = Router();
const { getDetailsById } = require('../controllers/detailController');

detailRouter.get('/', (req, res) =>
  res.render('details', { title: 'Message Details', messages: messages })
);

detailRouter.get('/:detailsId', getDetailsById);

module.exports = detailRouter;
