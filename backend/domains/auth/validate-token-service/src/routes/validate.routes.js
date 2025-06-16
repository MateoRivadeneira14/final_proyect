const express = require('express');
const router = express.Router();
const validateController = require('../controllers/validate.controller');

/**
 * @swagger
 * /validate:
 *   get:
 *     summary: Valida un token JWT y devuelve su contenido
 *     tags: [Validate]
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: Bearer token
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Token válido
 *       401:
 *         description: Token inválido o no proporcionado
 */
router.get('/', validateController);

module.exports = router;
