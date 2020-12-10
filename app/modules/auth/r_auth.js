const express = require('express');
const router = express.Router();

const c_auth = require('./c_auth');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/emailLogin', c_auth.emailLogin);
router.post('/emailSignUp', c_auth.emailSignUp);

module.exports = router;