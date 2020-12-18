
const emailLogin = (req, res) => {
  console.log('holaa');
  const hola = {
    hola: 1,
    chau: 'holaaaaaaaaa'
  };
  res.send(hola);
};

const emailSignUp = (req, res) => {
  console.log('hola')
  console.log('req.body', req.body);

  return res.send({ hey: 'you' });
};


module.exports = {
  emailLogin,
  emailSignUp
};