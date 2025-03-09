const db = require('../db');
const asyncHandler = require('express-async-handler');

const getDetailsById = asyncHandler(async (req, res) => {
  const { detailsId } = req.params;

  const detail = await db.getDetailsById(Number(detailsId));

  if (!detail) {
    res.status(404).send(`wtf ${detailsId}`);
    return;
  }

  res.render('details', { title: 'message', detail: detail });
});

module.exports = { getDetailsById };
