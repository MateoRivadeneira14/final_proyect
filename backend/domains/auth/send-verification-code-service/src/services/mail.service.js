const transporter = require('../config/mailer');

module.exports = async function sendMail({ email, code }) {
  if (!email || !code) {
    throw new Error('Faltan datos requeridos');
  }

  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: email,
    subject: 'Código de verificación',
    text: `Tu código de verificación es: ${code}`
  });

  console.log(`📧 Correo enviado a ${email} con código: ${code}`);
};
