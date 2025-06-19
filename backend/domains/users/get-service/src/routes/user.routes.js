const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/user.controller');

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener usuarios
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: ID del usuario
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: Email del usuario
 *     responses:
 *       200:
 *         description: Lista de usuarios o usuario único
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/', getUsers);

module.exports = router;
