const { Router } = require('express');
const newRouter = Router();

newRouter.get('/', (req, res) => res.send('new'));

module.exports = newRouter;
