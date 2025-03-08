const { Router } = require('express');
const newRouter = Router();

newRouter.get('/', (req, res) => res.render('form', { title: 'Add Message' }));

module.exports = newRouter;
