const express = require('express');
const router = express.Router();

const c_imei = require('./c_imei');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/imeiByPersona', c_imei.imeiByPersona);

module.exports = router;