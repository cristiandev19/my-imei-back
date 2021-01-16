
const express    = require('express'),
      app        = express(),
      cors       = require('cors'),
      bodyParser = require('body-parser'),
      { dbConnection } = require('./app/database/config');


require('dotenv').config();

dbConnection();

// Aqui pon la logica
app
  .use(cors({ 'origin': '*' }))
  .use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
  .use(bodyParser.json({ limit: '5mb' }));


// const r_login   = require('./app/routes/r_login');
const r_auth    = require('./app/modules/auth/r_auth');
const r_imei    = require('./app/modules/imei/r_imei');
// const r_profile = require('./app/modules/profile/r_profile');
// const r_publication = require('./app/modules/publication/r_publication');

app
// .use('/login', r_auth)
// .use('/profile', r_profile)
.use('/imei', r_imei)
.use('/auth', r_auth);


app.get('/', (req, res) => {
res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});