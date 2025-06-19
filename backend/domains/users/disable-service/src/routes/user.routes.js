const express = require('express');
const router = express.Router();
const { disableUser } = require('../controllers/user.controller');

/**
 * @swagger
 * /users/{id}/disable:
 *   put:
 *     summary: Inhabilitar usuario
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
 *         description: Usuario inhabilitado correctamente
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/:id/disable', disableUser);

module.exports = router;
