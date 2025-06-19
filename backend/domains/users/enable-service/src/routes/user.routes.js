const express = require('express');
const router = express.Router();
const { enableUser } = require('../controllers/user.controller');

/**
 * @swagger
 * /users/{id}/enable:
 *   put:
 *     summary: Habilitar usuario
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario habilitado correctamente
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/:id/enable', enableUser);

module.exports = router;
