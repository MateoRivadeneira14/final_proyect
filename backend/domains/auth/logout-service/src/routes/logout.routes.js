const express = require('express');
const router = express.Router();
const logoutController = require('../controllers/logout.controller');

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Logout simbólico del usuario
 *     tags: [Logout]
 *     responses:
 *       200:
 *         description: Logout exitoso
 */
router.post('/', logoutController);

module.exports = router;
