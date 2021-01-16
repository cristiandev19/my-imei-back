const { Imei } = require("../../models/Imei");

const imeiByPersona = async (req, res) => {
  const { _id_user } = req.query;
  let findImeis = await Imei.find({ _id_user })
  findImeis = findImeis.map(imei => {
    return {
      alias    : imei.alias,
      imei     : imei.imei,
      estado   : imei.estado,
      _id_user : imei._id_user,
      id_imei  : imei._id
    }
  })
  return res.status(200).send({ imeis: [...findImeis] });
};

const addImei = async (req, res) => {
  try {
    const { alias, imei, estado, _id_user } = req.body;
    // const { alias, imei, estado }
    // throw({
    //   error: 'error'

    const imeiData = new Imei({ alias, imei, estado, _id_user });
    const { _doc } = await imeiData.save();
    // })
    return res.status(200).send({
      msj: 'insertado existosamente',
      imei: {
        alias    : alias,
        imei     : imei,
        estado   : estado,
        _id_user : _id_user,
        id_imei  : _doc._id
      }
    })
  } catch (error) {
    return res.status(400).send({msj: 'hubo un error'});
  }
}

const updateImei = async (req, res) => {
  try {
    const { alias, imei, estado, id_imei } = req.body;
    // validacion
    // const findImeis = await Imei.find({ _id: id_imei })

    const response = await Imei.updateOne({ _id: id_imei }, { alias, imei, estado });
    console.log("🚀 ~ file: c_imei.js ~ line 53 ~ updateImei ~ response", response)
    if(response.n == 0 || response.nModified == 0) {
      throw new Error('No se encontro un imei ')
    }
    return res.status(200).send({
      msj: 'actualizado existosamente'
    })
  } catch (error) {
    console.log("🚀 ~ file: c_imei.js ~ line 61 ~ updateImei ~ error", error)
    return res.status(400).send({msj: 'hubo un error'});
  }
}


const deleteImei = async (req, res) => {
  try {
    const { id_imei } = req.body;
    // validacion
    const findImei = await Imei.find({ _id: id_imei })
    console.log("🚀 ~ file: c_imei.js ~ line 60 ~ deleteImei ~ findImei", findImei)

    if(findImei.length == 0) {
      throw new Error('No existe el imei que quieres eliminar')
    }
    const response = await Imei.deleteOne({ _id: id_imei }, (err) => {
      console.log('err', err)
    });


    console.log("🚀 ~ file: c_imei.js ~ line 64 ~ response ~ response", response)
    // if(response.n == 0 || response.nModified == 0) {
    //   throw new Error('No se encontro un imei ')
    // }
    return res.status(200).send({
      msj: 'Eliminado existosamente'
    })
  } catch (error) {
    console.log("🚀 ~ file: c_imei.js ~ line 61 ~ updateImei ~ error", error)
    return res.status(400).send({msj: 'hubo un error'});
  }
}


module.exports = {
  imeiByPersona,
  addImei,
  updateImei,
  deleteImei
};