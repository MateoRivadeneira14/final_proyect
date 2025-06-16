const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.controller');

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Autentica al usuario y devuelve un JWT
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Autenticación exitosa
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: Contraseña incorrecta
 *       403:
 *         description: Cuenta no verificada
 *       404:
 *         description: Usuario no encontrado
 */
router.post('/', loginController);

module.exports = router;
