const { User } = require("../../models/User");

const emailLogin = (req, res) => {
  try {

    const hola = {
      hola: 1,
      chau: 'holaaaaaaaaa'
    };
    res.send(hola);
  } catch (error) {
    res.status(500).send({ msj: 'Algo salio mal'})
  }
};

const emailSignUp = async (req, res) => {
  try {

    const { names, email, password } = req.body;
    // Buscamos el email si existe
    const findEmail = await User.findOne({ email })
    if (findEmail) {
      return res.status(400).send({
        msj: 'El correo ya existe',
        status: 400
      })
    }

    const user = new User({ names, email, password });

    const { _doc } = await user.save();

    return res.status(200).send({
      msj: 'Se guardo',
      user: {
        names,
        email,
        password,
        _id_user: _doc._id
      }
    });

  } catch (error) {
    res.status(500).send({ msj: 'Algo salio mal'})
  }

};


module.exports = {
  emailLogin,
  emailSignUp
};