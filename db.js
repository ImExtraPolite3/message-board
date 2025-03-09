const messages = require('./allMessages');

async function getDetailsById(detailsId) {
  return messages.find((message) => message.id === detailsId);
}

module.exports = { getDetailsById };
