const express = require('express');
const router = express.Router();
const resetController = require('../controllers/reset.controller');

/**
 * @swagger
 * /reset-password:
 *   post:
 *     summary: Restablece la contraseña de un usuario usando un código
 *     tags: [Reset]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - code
 *               - new_password
 *             properties:
 *               email:
 *                 type: string
 *               code:
 *                 type: string
 *               new_password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contraseña restablecida exitosamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Código inválido o usuario no encontrado
 */
router.post('/', resetController);

module.exports = router;
