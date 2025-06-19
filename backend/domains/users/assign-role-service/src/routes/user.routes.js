const express = require('express');
const router = express.Router();
const { assignRole } = require('../controllers/user.controller');

/**
 * @swagger
 * /users/{id}/role:
 *   put:
 *     summary: Asignar o cambiar el rol de un usuario
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
 *             required:
 *               - role
 *             properties:
 *               role:
 *                 type: string
 *                 enum: [admin, estudiante, director]
 *     responses:
 *       200:
 *         description: Rol actualizado correctamente
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/:id/role', assignRole);

module.exports = router;
