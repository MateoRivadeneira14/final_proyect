const express = require('express');
const router = express.Router();
const accessController = require('../controllers/access.controller');
const verifyToken = require('../middleware/auth');

/**
 * @swagger
 * /access:
 *   post:
 *     summary: Verifica acceso según el rol requerido
 *     tags: [Access]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - requiredRole
 *             properties:
 *               requiredRole:
 *                 type: string
 *                 enum: [admin, estudiante, director]
 *     responses:
 *       200:
 *         description: Acceso permitido
 *       403:
 *         description: Acceso denegado
 *       401:
 *         description: Token inválido
 */
router.post('/', verifyToken, accessController);

module.exports = router;
