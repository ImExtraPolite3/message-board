const { Router } = require('express');
const indexRouter = Router();
const messages = require('../allMessages');
let num = 3;

indexRouter.get('/', (req, res) =>
  res.render('index', { title: 'Mini Messageboard', messages: messages })
);

indexRouter.post('/new', (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({
    id: num,
    text: messageText,
    user: messageUser,
    added: new Date(),
  });
  num++;
  res.redirect('/');
});

module.exports = indexRouter;
