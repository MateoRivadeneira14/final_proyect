const sendMail = require('../services/mail.service');

const mailController = async (req, res) => {
  try {
    await sendMail(req.body);
    res.status(200).json({ message: 'Código enviado con éxito' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = mailController;
