const express = require('express');
const router = express.Router();
const verifyController = require('../controllers/verify.controller');

/**
 * @swagger
 * /verify:
 *   post:
 *     summary: Verifica el código enviado al correo del usuario
 *     tags: [Verify]
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
 *               code:
 *                 type: string
 *     responses:
 *       200:
 *         description: Verificación exitosa
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Usuario o código no encontrado
 */
router.post('/', verifyController);

module.exports = router;
