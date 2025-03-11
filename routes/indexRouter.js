const { Router } = require('express');
const indexRouter = Router();
const messages = require('../allMessages');
const getDate = new Date().toString();
const convertDate = getDate.substring(0, 24);
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
    added: convertDate,
  });
  num++;
  res.redirect('/');
});

module.exports = indexRouter;
