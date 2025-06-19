const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/user.controller');

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crear un nuevo usuario desde el panel
 *     tags: [Users]
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
 *               - role
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               nickname:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [admin, estudiante, director]
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 *       400:
 *         description: Datos inválidos
 *       409:
 *         description: Usuario ya existe
 */
router.post('/', createUser);

module.exports = router;
