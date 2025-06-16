const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register.controller');

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Register]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - nickname
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 minLength: 8
 *               nickname:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [estudiante, director]
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Datos inválidos
 *       403:
 *         description: No permitido
 *       409:
 *         description: El usuario ya existe
 */
router.post('/', registerController);

module.exports = router;
