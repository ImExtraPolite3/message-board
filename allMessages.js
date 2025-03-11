const getDate = new Date().toString();
const convertDate = getDate.substring(0, 24);

const messages = [
  {
    id: 1,
    text: 'Hi there!',
    user: 'Amando',
    added: convertDate,
  },
  {
    id: 2,
    text: 'Hello World!',
    user: 'Charles',
    added: convertDate,
  },
];

module.exports = messages;
