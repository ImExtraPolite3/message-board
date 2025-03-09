const { Router } = require('express');
const indexRouter = Router();
const messages = require('../allMessages');

indexRouter.get('/', (req, res) =>
  res.render('index', { title: 'Mini Messageboard', messages: messages })
);

indexRouter.post('/new', (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

module.exports = indexRouter;
