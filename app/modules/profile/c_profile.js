const { User } = require("../../models/User");

const updateProfileInfo = async (req, res) => {
  try {

    const { names, email, id_user } = req.body;
    // validacion
    // const findImeis = await Imei.find({ _id: id_imei })

    const response = await User.updateOne({ _id: id_user }, { names, email });
    console.log("🚀 ~ file: c_imei.js ~ line 53 ~ updateImei ~ response", response)
    if(response.n == 0 || response.nModified == 0) {
      throw new Error('No se encontro un imei ')
    }
    return res.status(200).send({
      msj: 'actualizado existosamente'
    });

  } catch (error) {
    console.log("🚀 ~ file: c_imei.js ~ line 61 ~ updateImei ~ error", error)
    return res.status(400).send({msj: 'hubo un error'});
  }
}


module.exports = {
  updateProfileInfo,
};