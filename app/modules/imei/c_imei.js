
const imeiByPersona = (req, res) => {
  console.log('holaa');
  const hola = [{
    alias: 'hola',
    imei: 'asd asd sd ads ads ',
    estado: 'robado',
    id_imei: 12
  }, {
    alias: 'hol 12  12a',
    imei: 'asd 123 12332 ',
    estado: 'adquirido',
    id_imei: 13
  }, {
    alias: 'hodasl dasd12  12a',
    imei: 'asd 123 123sad32 ',
    estado: 'adquirido',
    id_imei: 19
  }, {
    alias: '123213 12',
    imei: 'asd 123 12332 ',
    estado: 'adquirido',
    id_imei: 16
  }, {
    alias: 'cristian',
    imei: 'asd 123 12332 ',
    estado: 'robado',
    id_imei: 15
  }];
  res.send({ imeis: hola });
};


module.exports = {
  imeiByPersona
};