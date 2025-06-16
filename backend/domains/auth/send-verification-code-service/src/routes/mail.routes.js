const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mail.controller');

/**
 * @swagger
 * /send-code:
 *   post:
 *     summary: Envía un código de verificación por correo
 *     tags: [SendCode]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - code
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               code:
 *                 type: string
 *     responses:
 *       200:
 *         description: Código enviado con éxito
 *       500:
 *         description: Error al enviar el correo
 */
router.post('/', mailController);

module.exports = router;
