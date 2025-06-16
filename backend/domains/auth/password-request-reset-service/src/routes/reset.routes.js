const express = require('express');
const router = express.Router();
const resetController = require('../controllers/reset.controller');

/**
 * @swagger
 * /request-reset:
 *   post:
 *     summary: Genera y envía un código de restablecimiento de contraseña
 *     tags: [Reset]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Código enviado
 *       400:
 *         description: Datos inválidos
 *       403:
 *         description: Cuenta no verificada
 *       404:
 *         description: Usuario no encontrado
 *       502:
 *         description: Error al enviar el correo
 */
router.post('/', resetController);

module.exports = router;
