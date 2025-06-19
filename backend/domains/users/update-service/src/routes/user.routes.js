const express = require('express');
const router = express.Router();
const { updateUser } = require('../controllers/user.controller');

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualizar usuario
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [admin, estudiante, director]
 *               is_verified:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/:id', updateUser);

module.exports = router;
